import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import BreedSelector from '../components/BreedSelector.js';
import Scrollbox from '../components/Scrollbox.js';
import styles from '../styles/Home.module.css';

const Index = (props) => {

  const gridStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center'
  }

  const [ dogs, setDogs ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/api/hello')
    const res = await response.json();
    // console.log(res)
    setData(res);
    return res;
  }

  const loadRandomDogs = async () => {
    const key = process.env.dogAPIkey;
    const res = await fetch('https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=10', {
      method: 'GET',
      headers: ({
        'Accept': 'application/json',
        "Content-type": 'application/json',
        "x-api-key": key,
      })
    });
    const dogs = await res.json();
    setDogs(dogs);
    return {
      props: {
        dogs: dogs
      }
    }
  }
  
  async function loadDogs(event) {
    event.preventDefault();
    const data = await loadRandomDogs();
    // console.log(data);
  }
  useEffect(() => {
    loadRandomDogs();
    fetchData();
  }, [])

  return (
    <div>
      <Head>
        <title>Dogstagram</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <script src="https://kit.fontawesome.com/73150d13e4.js" crossOrigin="anonymous"></script>
      </Head>

      {props.data}

      <Navbar onClick={loadDogs}/>
      <div className='flexiboi' style={gridStyle}>
        <Scrollbox dogs={dogs}/>
        <BreedSelector />
      </div>

    </div>
  )
}


export default Index;

// WORKING FOR FETCH ALL
// fetch random 10 random images
// https://api.thedogapi.com/v1/images/search?limit=10
// fetch single image
// https://api.thedogapi.com/v1/images/search
// fetch 10 static images
// https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&limit=10
// ==================================================================================
// ==================================================================================
// breed list -- USE TO POPULATE DROPDOWN
// https://api.thedogapi.com/v1/breeds
// get images by breed_id -- USE TO CALL IMAGES FROM DROPDOWN SELECTION
// https://api.thedogapi.com/v1/images/search?breed_ids=1&limit=10
// ==================================================================================
// ==================================================================================
// find staffies
// https://api.thedogapi.com/v1/breeds/search?q=staf


// NOT WORKING
// https://api.thedogapi.com/v1/breeds/search?breed_ids=pug
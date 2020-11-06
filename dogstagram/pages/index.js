import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import Scrollbox from '../components/Scrollbox.js';
import styles from '../styles/Home.module.css';

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Dogstagram</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <script src="https://kit.fontawesome.com/73150d13e4.js" crossorigin="anonymous"></script>
      </Head>

      <Navbar onClick={loadRandomDogs}/>

      <Scrollbox dogs={props.dogs} onClick={loadRandomDogs}/>

    </div>
  )
}

Index.getInitialProps = async function () {
  const key = process.env.dogAPIkey;
  const res = await fetch('https://api.thedogapi.com/v1/breeds/search?attach_breed=pug&page=1&limit=10', {
    method: 'GET',
    headers: ({
      'Accept': 'application/json',
      "Content-type": 'application/json',
      "x-api-key": key,
    })
  });
  // console.log('============' + key + '===============');
  const dogs = await res.json();
  console.log(dogs);
  return {
    dogs: dogs
  }
}
const loadRandomDogs = () => {
  console.log('random dogs clicked')
}

export default Index;

// WORKING FOR FETCH ALL
// fetch random
// https://api.thedogapi.com/v1/breeds/search?limit=10&page=10&order=Desc
// single image search
// https://api.thedogapi.com/v1/images/search
// search for static images
// https://api.thedogapi.com/images/search?mime_types=jpg,png
// breed list
// https://api.thedogapi.com/v1/breeds
// breed list
// https://api.thedogapi.com/v1/breeds?attach_breed=0
// find staffies
// https://api.thedogapi.com/v1/breeds/search?q=staf
// get by breed_id
// https://api.thedogapi.com/v1/images/search?breed_ids=1&limit=10

// NOT WORKING
// https://api.thedogapi.com/v1/breeds/search?attach_breed=beng&page=1&limit=10
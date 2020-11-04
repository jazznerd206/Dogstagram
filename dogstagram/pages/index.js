import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Navbar from '../components/Navbar.js';
import Scrollbox from '../components/Scrollbox.js';
import styles from '../styles/Home.module.css';

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dogstagram</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
      </Head>

      <Navbar />
      {/* {props.dogs.id} */}

      <Scrollbox dogs={props.dogs}/>

    </div>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc');
  const dogs = await res.json();
  console.log(process.env.dogAPIKey);
  console.log(dogs);
  return {
    dogs: dogs
  }
}

export default Index;
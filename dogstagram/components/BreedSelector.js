import React, { useState, useEffect } from 'react';
import Post from './Post.js'

function BreedSelector(props) {

    const listStyle = {
        listStyle: 'none',
        maxHeight: '250px',
        width: '400px',
        maxWidth: '400px',
        overflowY: 'scroll',
        border: '1px solid black',
        borderTop: 'none',
        fontFamily: 'Roboto'
    }

    const [ showList, setShowList ] = useState(false)
    const [ breeds, setBreeds ] = useState([]);
    const [ breedSelected, setBreedSelected ] = useState('');
    const [ single, setSingleDog ] = useState();

    const showBreeds = () => {
        if (showList === false) {
            setShowList(true)
        } else if (showList === true) {
            setShowList(false);
        }
    }


    const getBreeds = async () => {
        const key = process.env.dogAPIkey;
            const res = await fetch('https://api.thedogapi.com/v1/breeds', {
            method: 'GET',
            headers: ({
                'Accept': 'application/json',
                "Content-type": 'application/json',
                "x-api-key": key,
            })
            });
            const breeds = await res.json();
            setBreeds(breeds);
        }

    const findBreed = async (dogBreed) => {
        console.log(dogBreed);
        // if (dogBreed.includes(' ') === true) {
        //     dogBreed = dogBreed.toLowerCase().split(' ').join('%20');
        // } else {
        //     dogBreed = dogBreed.toLowerCase()
        // }
        console.log(`dog breed after modification ${dogBreed}`)
        const key = process.env.dogAPIkey;
        let query = 'https://api.thedogapi.com/v1/images/search?breed_id=';
        query += dogBreed;
        console.log(query)
        const res = await fetch(query, {
        method: 'GET',
        headers: ({
            'Accept': 'application/json',
            "Content-type": 'application/json',
            "x-api-key": key,
        })
        });
        const dog = await res.json();
        setSingleDog(dog);
    }



    useEffect(() => {
        getBreeds();
    }, [])

    return (
        <div>
            <div onClick={showBreeds}>
                <h2>Breed List</h2>
            </div>
            <ul style={listStyle}>
                {/* {showList === true ?
                    (
                        <div> */}
                            {breeds.map((breed, index) => (
                                <li 
                                    value={breed.name}
                                    key={breed.id}
                                    onClick={e => findBreed(breed.id)}
                                >
                                    {breed.name}
                                </li>
                            ))}
                        {/* </div>
                    ) : (
                        null
                    )
                } */}
            </ul>
            {single ? 
                (
                    <div>
                        <Post dogs={single}/>
                    </div>
                ) : (
                    null
                )
            }
        </div>
    )
}

// BreedSelector.getInitialProps = async () => {
//     const key = process.env.dogAPIkey;
//     const res = await fetch('https://api.thedogapi.com/v1/breeds', {
//       method: 'GET',
//       headers: ({
//         'Accept': 'application/json',
//         "Content-type": 'application/json',
//         "x-api-key": key,
//       })
//     });
//     console.log('response ' + res)
//     const breeds = await res.data;
//     return {
//       props: {
//         breeds: breeds
//       }
//     }
// }

export default BreedSelector;
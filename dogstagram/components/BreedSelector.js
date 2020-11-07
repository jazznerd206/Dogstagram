import React, { useState, useEffect } from 'react';

function BreedSelector(props) {

    const [ showList, setShowList ] = useState(false)
    const [ breeds, setBreeds ] = useState([]);

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
            console.log(breeds);
            setBreeds(breeds);
        }
    useEffect(() => {
        getBreeds();
    }, [])

    return (
        <div>
            <div onClick={showBreeds}>
                Show List
            </div>
            <ul>
            {showList === true ?
            (
                <div>
                    {breeds.map(breed => (
                        <li key={breed.id}>
                            {breed.name}
                        </li>
                ))}
                </div>
            ) : (
                null
            )
        }
        </ul>
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
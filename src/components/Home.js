import React, { useEffect, useState } from 'react';
import { Container, ButtonContainer, Button, Offset} from '../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner/Spinner';
import Breach from './Breach';
import axios from 'axios';


const Home = (props) => {
    const [breaches, setBreaches] = useState([]);
    const [offset,setOffset] = useState(0)
    const [numberOfItems, setNumberOfItems] = useState(0)
    console.log(props.mode)
    let endP = `https://guard.io/v2/hiring/fe/breaches`;

	useEffect(() => {
		axios
			.get(`${endP}?offset=${offset}`, {
				headers: {
					'X-Best-Pokemon': 'charmander',
				},
			})
			.then((res) => {
                setBreaches(res.data.items);
                setNumberOfItems(res.data.items.length)
			})
			.catch((err) => console.log(err));
	}, []);

    const breachSelectedHandler = (id) => {
        props.history.push('/' + id + '/' + offset);
    }

    const offsetHandlerForward = () => {
        axios.get(`${endP}?offset=${offset + 1}`, {
            headers: {
                'X-Best-Pokemon': 'charmander',
            }
        }).then((res) => {
            setOffset(prevMode => prevMode + 1)
            setBreaches(res.data.items);
            setNumberOfItems(res.data.items.length)
        })
        .catch(err => console.log(err))
    }

    const offsetHandlerBack = () => {
        axios.get(`${endP}?offset=${offset - 1}`, {
            headers: {
                'X-Best-Pokemon': 'charmander',
            }
        }).then((res) => {
            setOffset(prevMode => prevMode - 1)
            setBreaches(res.data.items);
        })
        .catch(err => console.log(err))
    }
    
    let displayedBreaches = <Spinner />
    if (breaches) { 
        displayedBreaches = breaches.map((el, i) => (
            <Breach key={el.Name} 
                name={el.Title}
                BreachDate={el.BreachDate}
                LogoPath={el.LogoPath}
                breaches={breaches}
                clicked={() => breachSelectedHandler(el.Name)}
            />
            ));
    }


        
    return (
            <>
            <ButtonContainer>
                <Button disabled={ offset === 0 } onClick={offsetHandlerBack}> <FontAwesomeIcon icon={faBackward} /> </Button>
                <Offset> {offset} </Offset>
                <Button disabled={ numberOfItems === 1 } onClick={offsetHandlerForward}> <FontAwesomeIcon icon={faForward} /> </Button>
            </ButtonContainer>
			<Container>{displayedBreaches}</Container>
            </>
	);
};


export default Home;



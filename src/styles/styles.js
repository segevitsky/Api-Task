import styled, { keyframes } from 'styled-components';


//////////////////HOME STYLES ///////////////////////

const appear = keyframes`
 0% { opacity: 0 }
 50% { opacity: 0.6 }
 100% { opacity: 1 }
`

export const Container = styled.div`
max-width: 1200px;
margin: 4em auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 2rem;
animation: ${appear} 1.2s ease-in forwards;
`;



export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em auto;
    @media (max-width: 350px) {
        margin: 2em;
    }
`;


export const Button = styled.button`
background: transparent;
    border: 1px solid white;
    padding: .5em 1em;
    border: none;
    margin-right: 1em;
    margin-left: 1em;
    cursor: pointer;
    font-size: 2.5em;
    font-weight: 900;
    transition: all 250ms ease-in;
    color: indianred;
    &:hover {
        transform: translateY(-3px);
    }
    
    @media (max-width: 350px) {
        font-size: 1em;
        
    }
    `

///BREACH
export const BreachContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
    padding: 1.5em;
    text-align: center;
    box-shadow: 0 3px 12px -6px indianred;
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms ease-in;

    &:hover {
        transform: scale(1.05);
    box-shadow: 0 3px 12px -6px white;

    }
    `;
    

export const Image = styled.img`
    filter: invert(100%);
    -webkit-filter: invert(100%);
    max-width: 35%;
    padding: 1.5em;
    `;




/////FULL BREACH
export const FullBreachContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
`

export const FullBreachContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 75%;
    margin: 2em 0;
    border: 1px solid indianred;
    box-shadow: 0 3px 12px -6px indianred;
`

export const Header = styled.h1`
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: center;
    max-width: 95%;
`;

export const Description = styled.p`
    max-width: 75%;
    font-size: 1em;
    font-weight:700;
`;

export const Para = styled.p`
    max-width: 75%;
    text-align: center;
`;


export const BackButton = styled.button`
    border: none;
    font-weight: bold;
    margin-top: 1em;
    font-size: 1.5em;
    transition: all 350ms ease-in-out;
    background: transparent;
    border: 1px solid;
    padding: .3em;
    cursor: pointer;
    color: white;
    background-color: indianred;


    &:hover {
        // transform: translateY(-2px);
        background: white;
        color: indianred;
    }
`;

export const FullBreachImage = styled.img`
    filter: invert(100%);
    -webkit-filter: invert(100%);
    max-width: 10%;
`;

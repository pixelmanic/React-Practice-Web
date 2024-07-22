import { useState } from "react";

const About = () => {
    const [name , setName] = useState('practice');


    
    return ( 
        <div>
        <h1>{name}</h1>
        <button onClick={(e) => setName(e.target.textContent)}>done</button>
        <button onClick={(e) => setName(e.target.textContent)}>hello</button>
        <button onClick={(e) => setName(e.target.textContent)}>world</button>
        <button onClick={(e) => setName(e.target.textContent)}>design</button>
        </div>
     );
}
 
export default About;
import React from 'react';
import { Link } from "gatsby"
import { FaYoutube } from 'react-icons/fa';


const Square = (props) => {
    let prelinker = props.title.toLowerCase().trim();
    let linker = prelinker.replace(" ", "");
    return (
        <Link to={`/${linker}/`}>
            <div style={{
                background: `${props.color}`,
                color: 'white',
                padding: 20,
                margin: 20,
            }} className="square">
                <div><h1>{props.title}</h1></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold' }}>{props.description}</div>
                    <FaYoutube style={{ fontSize: 128 }} />
                </div>

            </div>
        </Link >
    )
}

export default Square;
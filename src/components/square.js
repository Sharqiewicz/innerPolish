import React from 'react';
import { Link } from "gatsby"
import { FaYoutube } from 'react-icons/fa';


const Square = (props) => {
    return (
        <Link to='/videos/'>
            <div style={{
                width: 390,
                background: `${props.color}`,
                color: 'white',
                padding: 20,
                margin: 20
            }}>
                <h1>{props.title}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold' }}>{props.description}</div>
                    <FaYoutube style={{ fontSize: 128 }} />
                </div>

            </div>
        </Link>
    )
}

export default Square;
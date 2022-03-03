import React from 'react';

export default function Button({btnClass,text, onClick, type, onChange}) {
    return(
        <button
            className= {btnClass}
            onClick={onClick}
            onChange={onChange}
            type={type}
        >
            {text}
        </button>
    )
}
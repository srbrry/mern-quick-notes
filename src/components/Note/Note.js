import React from 'react'

export default function Note({text, createdAt}) {
    return (
        <div>
            <h3>{text}</h3>
            <p>{createdAt}</p>
        </div>
    )
}
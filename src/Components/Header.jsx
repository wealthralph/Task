import React from 'react';
import Button from './Button'

const Header = ({greet}) => {
    const onClick = (e) => {
        console.log("click")
    }

    return (
        <header className='header'>
            <h1>{greet}</h1>
            <Button color= 'green' text='Add' onClick = {onClick}/>
        </header>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Header

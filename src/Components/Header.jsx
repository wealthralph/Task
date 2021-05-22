import React from 'react';
import Button from './Button'

const Header = ({greet , onAdd, showAdd}) => {
    

    return (
        <header className='header'>
            <h1>{greet}</h1>
            <Button color= 'green' text={showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
        </header>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Header

import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App'
import { useWindowWidth } from '../customHooks/useWindowWidth';

function Row(props) {
    return (
        <div>
            <h5>{props.label}</h5>
            <h3>{props.children}</h3>
        </div>
    );
}

export default function Greeting(props) {
    // hooks are functions provided by react, that lets you to hooks into react features
    // from your function components
    const [firstName, setFirstName] = useState('Mary');
    const [lastName, setLastName] = useState('Green');
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.title = firstName + ' ' + lastName;
    }, [firstName, lastName]);

    const width = useWindowWidth();





    function handleNameChange(e) {
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }
    return (
        <section className={theme}>
            <Row label='Name'>
                <input type="text" onChange={handleNameChange} value={firstName} />
            </Row>
            <Row label='Surname'>
                <input type="text" onChange={handleLastNameChange} value={lastName} />
            </Row>
            <Row label='Width'>
                {width}
            </Row>
        </section>
    )
}
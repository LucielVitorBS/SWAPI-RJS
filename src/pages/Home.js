import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function Home(){
    const [ response, setResponse] = useState({});
    const [ list, setList ] = useState([]);
    return(
        <h1>Hello World</h1>
    );
}
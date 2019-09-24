import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './Home.css'

export default function Home({ history }){
    const [ data, setData] = useState([]);
    const [ list, setList ] = useState([]);
    const [ page, setPage ] = useState(1);

    function nextPage(){
        setPage(page+1);
    }
    function previousPage(){
        setPage(page-1);
    }
    function parseUrl(url){
        const id = url.substr(28);
        return id
    }
    function handlePerson(e, url){
        e.preventDefault();
        const id = parseUrl(url);
        history.push(`/details/${id}`);
    }

    useEffect(() =>{
        async function loadList(){
            const response = await api.get(`/people/?page=${page}`);

            setData(response.data); 
            setList(response.data.results);           
        }
        loadList();
    }, [page])
    return(
        <div className="homeContainer" >
            <ul>
            {
                list.map((people, index) =>{
                    return(
                        <li key= { index }>
                            <button onClick= { (e) => handlePerson(e, people.url) }>{people.name}</button>
                        </li>
                    )
                })
            }
            </ul>
            <div className="navButtons">
                {
                    data.previous === null
                    ? <button onClick={ nextPage }>Próximo</button>
                    : data.next === null 
                        ? <button onClick={ previousPage }>Anterior</button>
                        :
                            <>
                                <button onClick={ previousPage }>Anterior</button>
                                <button onClick={ nextPage }>Próximo</button>
                            </>
                }
            </div>
        </div>
        
    );
}
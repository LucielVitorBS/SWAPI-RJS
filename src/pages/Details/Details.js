import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Details.css'

export default function Details({ match }) {
  const [person, setPerson] = useState({});
  const id = match.params.id;

  useEffect(() =>{
    async function loadPerson(){
      const result = await api.get(`/people/${id}`);
      setPerson(result.data)
    }

    loadPerson();
  },[])

  return (
    <div className="detailsContent">
      <table>
        <tr>
          <td><h1>{ person.name }</h1></td>
        </tr>
        <hr/>
        <tr>
          <td><h2>Altura: { person.height }</h2></td>
        </tr>
      </table>
    </div>
  );
}

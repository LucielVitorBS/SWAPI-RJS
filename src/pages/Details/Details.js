import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './Details.css'

import DetailsPeople from '../../components/DetailsPeople';

export default function Details({ match }) {
  const [people, setPeople] = useState({});
  const id = match.params.id;

  useEffect(() =>{
    async function loadPeople(){
      const result = await api.get(`/people/${id}`);
      setPeople(result.data)
    }

    loadPeople();    
  },[id])

  return (
    <div className="detailsContent">
      <DetailsPeople referencie={ people } />
    </div>
  );
}

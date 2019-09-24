import React from 'react';
import './DetailsPeople.css'

export default function DetailsPeople(props) {
    const people = props.referencie;
  return (
    <table>
        <tbody>
            <tr>
                <td><h1>{ people.name }</h1></td>
            </tr>
            <tr>
                <td><p>Altura: { people.height }</p></td>
            </tr>
            <tr>
                <td><p>Peso: { people.mass }</p></td>
            </tr>
            <tr>
                <td><p>Cor do Cabelo: { people.hair_color }</p></td>
            </tr>
            <tr>
                <td><p>Cor da Roupa: { people.skin_color }</p></td>
            </tr>
            <tr>
                <td><p>Cor dos Olhos: { people.eye_color }</p></td>
            </tr>
            <tr>
                <td><p>Ano de Nascimento: { people.birth_year }</p></td>
            </tr>
            <tr>
                <td><p>Genero: { people.gender }</p></td>
            </tr>
            <tr>
                <td><p>Planeta: { people.homeworld }</p></td>
            </tr>
            <tr>
                <td><p>Filmes:</p></td>
                {
                    people.films &&
                    people.films.map((film, index) =>(
                        <td key={ index }><p>{film}</p></td>
                    ))
                }
            </tr>
            <tr>
                <td><p>Especies:</p></td>
                {
                    people.species &&
                    people.species.map((specie, index) =>(
                        <td key={ index }><p>{specie}</p></td>
                    ))
                }
            </tr>
            <tr>
                <td><p>Veículos:</p></td>
                {
                    people.vehicles &&
                    people.vehicles.map((vehicles, index) =>(
                        <td key={ index }><p>{vehicles}</p></td>
                    ))
                }
            </tr>
            <tr>
                <td><p>Naves Estelares:</p></td>
                {
                    people.starships &&
                    people.starships.map((starships, index) =>(
                        <td key={ index }><p>{starships}</p></td>
                    ))
                }
            </tr>
            <tr>
                <td><p>Criado em: { people.created }</p></td>
            </tr>
            <tr>
                <td><p>Editado em: { people.edited }</p></td>
            </tr>
            <tr>
                <td><p>URL: { people.url }</p></td>
            </tr>
        </tbody>
    </table>
  );
}

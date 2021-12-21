import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDogs, filterDogsByTemperament} from '../actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';

export default function Home (){

const dispatch = useDispatch()
const allDogs = useSelector(state => state.dogs)
const [currentPage, setCurrentPage]=useState(1) // estado inicial en 1
const [dogsPerPage, setDogsPerPage]=useState(8) // cartas por página
const inndexOfLastDog = currentPage * dogsPerPage // = 8
const indexOfFirstDog = inndexOfLastDog - dogsPerPage//0
const currentDogs = allDogs.slice(indexOfFirstDog, inndexOfLastDog)

const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber)
}


useEffect(() =>{
    dispatch(getDogs())
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getDogs());
}
function handleFilterTemperament(e){
    dispatch(filterDogsByTemperament(e.target.value))
}


return (
    <div>
    <Link to= '/dogs'>Crear raza</Link>
    <h1>PROYECTO INDIVIDUAL DOGS</h1>
    <button onClick={e => {handleClick(e)}}>
       HOME
       

    </button>
    <div>
        <select>
            <option>Ordenar por...</option>
            <option value= 'asc'>Ascendente</option>
            <option value= 'desc'>Descendente</option>
            <option value= 'peso'>Peso</option>
        </select>
        <select>
        <option value= 'All'>Todas las Razas</option>
            <option value= 'created'>Razas Creadas</option>
            <option value= 'api'>Razas Existentes</option>s
        </select>
        <select onChange ={e=> handleFilterTemperament()}>
        <option value= 'All'>Todos los Temperamentos</option>
            <option value= 'temperament'>Temperamentos</option>

        </select>
        <Paginado
        dogsPerPage ={dogsPerPage}
        allDogs= {allDogs.length}
        paginado = {paginado}
        />
        {currentDogs?.map((c)=>{
            return (
              <div>
                <Link to={'/home/'+ c.id}>
                  <Card name={c.name} image={c.image} temperament={c.temperament} weigth={c.weigth} key={c.id}/>
                </Link>
              </div>
            );
            })}
    </div>
    </div>
)
}
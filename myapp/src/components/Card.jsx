import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardList from './CardList'

const Card = () => {

    const [person, setPersons] = useState([])

    const getPersons = async ()=> {
        const data = await axios.get("https://randomuser.me/api/?results=6"); 
        setPersons(data.data.results);
    }

    useEffect(()=>{
       
        getPersons();
    },[])
  return (
   <>
   <div className='user'>
        <ul className='user'>
            {
                person.map((p,i)=>(
               
                     <li className='d-flex p-2'  key={i}> <CardList data={p} key={i} /></li>  
                    
                ))
            }
        </ul>
   </div>
   </>
  )
}

export default Card
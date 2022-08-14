import React from 'react'
import { useState,useEffect } from 'react'
import {getDocs ,doc,deleteDoc } from 'firebase/firestore'
 import {movieCollectionRef} from  "./EasyPath"
 import { db } from '../firebase/config'
 import { onSnapshot } from 'firebase/firestore'

const ListMovies = () => {

 const [movies, setMovies] = useState([])
useEffect(() => {
  
const unsub= onSnapshot(movieCollectionRef, snapshot=>{
  setMovies(snapshot.docs.map( 
    doc=>({
        id:doc.id,data:doc.data()
    })
  ))
}  )
  return () => {
     unsub()
  }
}, [ ])
useEffect(() => {
  getMovies()
}, [ ])

 


function getMovies(){
    getDocs(movieCollectionRef).then(response=>{
const movie=response.docs.map( 
    doc=> ( { 
        data: doc.data(),
        id:doc.id,
     } )
 ) 
 setMovies(movie)
}  )
  .catch(
    error=>console.log(error.message)
   )
}

const deleteMovie=(id)=>{
  const docRef=doc(db,'movies',id)
  deleteDoc(docRef).then(
  ()=>console.log('deleted ')
  ).catch(
  error=>console.log(error.message)
  )

 }

  return (
    <div> 
   <h3> Movies List</h3>
 
  <ul>
  {movies.map(mov=> (<li key={mov.id} >
    <span className='lid'>

  {mov.id } 
    </span>
   
     <span className='rname'>
   
     {mov.data.name}
      </span> 
<button className='del' onClick={ ()=> deleteMovie(mov.id) } > DELETE ❌ </button>
  </li> 
   ) ) }
  </ul>
    </div>
  )
}

export default ListMovies
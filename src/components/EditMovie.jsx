import React, { useState } from 'react'
  import {doc,updateDoc  } from 'firebase/firestore'
 import {db } from '../firebase/config'

const EditMovie = () => {
  const [name,setName]=useState('')
  const [id,setId]=useState('')
     // const movieCollectRef=collection( db,'movies')
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(name==='' || id==='' ){
      return
    }
   const docRef=doc( db,'movies',id)
  updateDoc(docRef,{name} ).then(
      response=>{
          console.log(response);
      }
  ).catch(error=>{
      console.log(error);
  }  )
   };

return (
 <div className='edit'> 
   <h4> Edit Movies </h4>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'> Movie Name </label>
        <input
     placeholder='movie name'
         id='name' type='text'
    value={name}
    onChange={ e=>setName(e.target.value) } ></input>  
        <label htmlFor='id'> Movie Id </label>
        <input
        placeholder='movie id'
         id='name' type='text'
    value={id}
    onChange={ e=>setId(e.target.value) } ></input>  
    <button type='submit' className='btn1' > update new</button>
    </form>
    </div>

   )
}

export default EditMovie
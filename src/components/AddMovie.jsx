import React from 'react'
import { useState } from 'react'
import {addDoc  } from 'firebase/firestore'
 import {movieCollectionRef} from  "./EasyPath"
const AddMovie = () => {
    const[ name, setName ]=useState('')
    const handleSubmit=(e)=>{
          e.preventDefault()
          if(name===''){
            return
          }
         // const movieCollectRef=collection( db,'movies')
        addDoc(movieCollectionRef,{name} ).then(
            response=>{
                console.log(response);
            }
        ).catch(error=>{
            console.log(error);
        }  )
        }
    return (
        <div className='add'> 
        <h4> ADD Movies </h4>
         <form onSubmit={handleSubmit}>
             <label htmlFor='name'> Movie Name </label>
             <input
          placeholder='movie name'
              id='name' type='text'
         value={name}
         onChange={ e=>setName(e.target.value) }
        ></input>  
         <button type='submit' className='btn1' > add new</button>
         </form>
         </div>
    )
}

export default AddMovie
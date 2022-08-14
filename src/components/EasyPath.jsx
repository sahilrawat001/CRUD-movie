import {collection  } from 'firebase/firestore'
import {db } from '../firebase/config'

  export  const movieCollectionRef=collection( db,'movies')

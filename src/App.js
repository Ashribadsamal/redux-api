import React,{useEffect} from 'react'
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { listGallery } from './action/action';

function App() {
const dispatch = useDispatch()
const Image = useSelector(state => state.Image);
const {loading , error , products} = Image;
useEffect(() => {
  dispatch(listGallery())
}, [dispatch])

console.log(products)
  return (
    <div className="App">
      {loading? <h2>loading...</h2>
      :
      error?<div>{error}</div>
      :
      <h3>{products.map(i=>(
        i.title
      ))}</h3>
    }
    </div>

  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import './App.css';
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
import {getMatches,getMatchDetail} from './components/Api'


function App() {

  const [matches,setMatches]=useState([])

  useEffect(()=>
    {getMatches().then((data)=>{setMatches(data.matches);
    console.log(data.matches)}).catch()}

  ,[])
  return (
    <div className="App">
        <Navbar />
      <h1>Welcome to LiveScore APP</h1>
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">   {
         matches.map((match)=>(
        <>
         {(match.type=="Twenty20") ? (
           <MyCard key={match.unique_id} match={match} />
         ) : ("")}
        </>
         ))
       }</Grid>
    </Grid>
        
    </div>
  );
}

export default App;

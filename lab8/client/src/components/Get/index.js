import Axios from 'axios';
import { useState } from 'react';

function Get(){
    //first route
    const [addPeople, setAddPeople] = useState("");
    const [searchPeople, setSearchPeople] = useState("");
    const [addResults, setAddResults] = useState([]);
    //second route
    const [findLetter, setFindLetter] = useState("");
    const [searchLetter, setSearchLetter] = useState("");
    const [letterResults, setLetterResults] = useState([]);
  
    //first route
    function Add() {
        Axios.get("http://localhost:45030/people/" + addPeople )
        .then(response => {
          console.log(response.data);
          setAddResults(response.data.addPeople);
        })
        .catch(error => {
          console.log("Error" + error);
        })
  
        
          
    }
        //second route
    function Search() {
        Axios.get("http://localhost:45030/search/" + findLetter)
        .then(response => {
          console.log(response.data);
          setLetterResults(response.data.search);
        })
        .catch(error => {
          console.log("Error" + error);
        })
  
        
          
    }
  
        return (
            <div>
                <input type= "text" onChange={(event) => setAddPeople(event.target.value)} />
                    <button onClick= {() => Add()}>Click to find a Person!</button>
                    <p>{addPeople}</p>
            
                   

                    <input type= "text" onChange={(event) => setFindLetter(event.target.value)} />
                    <button onClick= {() => Search()}>Click to search for a Letter!</button>
                    {
                        letterResults.map((value, index) => {
                           return <p key = {index}>{value}</p>
                        })
  
                        
                    }
            </div>
        )
}

export default Get;
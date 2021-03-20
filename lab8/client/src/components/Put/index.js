import Axios from 'axios';
import { useState } from 'react';

function Put(){
  const [addName, setAddName] = useState("");
  const [searchAdd, setSearchAdd] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function New() {
      Axios.put("http://localhost:45030/people/" + addName)
      .then(response => {
        console.log(response.data);
        setSearchResults(response.data.addName);
      })
      .catch(error => {
        console.log("Error" + error);
      })

      
        
  }

      return (
          <div>
              <input type= "text" onChange={(event) => setAddName(event.target.value)} />
                  <button onClick= {() => New()}>Click to add name!</button>
                  <p>{addName}</p>
                  
          </div>
      )
}

export default Put;
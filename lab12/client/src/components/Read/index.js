import Axios from 'axios';
import { useState } from 'react';

function Read(){
  const [readISBN, setReadISBN] = useState("");
  const [readResult, setReadResult] = useState("");

  const Find = async () => {
    const response = await  Axios.get("http://localhost:45030/books/" + readISBN, {
    
    params:{
      "books": readISBN
    }
   
      })
      console.log(response.data);
  }

  return (
      <div>
          <input type= "text" onChange={(event) => setReadISBN(event.target.value)} />
            <button onClick= {() => Find()}>Find Book by ISBN</button>
            <p>{readISBN}</p>
      </div>
  )
}

export default Read;
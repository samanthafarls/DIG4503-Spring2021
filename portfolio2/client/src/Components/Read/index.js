import Axios from 'axios';
import { useState } from 'react';

function Read(){
  const [findISBN, setFindISBN] = useState("");
  const [findResult, setFindResult] = useState("");

  const Find = async () => {
    const response = await  Axios.get("http://localhost:45030/books/" + findISBN, {
          params: {
              "books": findISBN
          }
      })
      console.log(response.data);
  }

  return (
      <div>
          <input type= "text" onChange={(event) => setFindISBN(event.target.value)} />
            <button onClick= {() => Find()}>Find Book by ISBN</button>
            <p>Found:{findISBN}</p>
      </div>
  )
}

export default Read;
import Axios from 'axios';
import { useState } from 'react';

function Create(){
    //add isbn
  const [insertISBN, setInsertISBN] = useState("");
  const [insertResult, setInsertResult] = useState("");
  //add title
  const [insertTitle, setInsertTitle] = useState("");
  const [titleResult, setTitleResult] = useState("")
  //add author
  const [insertAuthor, setInsertAuthor] = useState("");
  const [authorResult, setAuthorResult] = useState("");
  //add description
  const [insertDescription, setInsertDescription] = useState("");
  const [descriptionResult, setDescriptionResult] = useState("");

  const Insert = async ()  => {
     const response = await Axios.put("http://localhost:45030/books/" + insertISBN,{
          "title": insertTitle,
          "author": insertAuthor,
          "description": insertDescription
      })
      console.log(response.data);
  }

  return (
      <div>
          <input type= "text" onChange={(event) => setInsertISBN(event.target.value)} />
            <button onClick= {() => Insert()}>Add ISBN</button>
            <p>{insertISBN}</p>
            <input type= "text" onChange={(event) => setInsertTitle(event.target.value)} />
            <button onClick= {() => Insert()}>Add Title</button>
            <p>{insertTitle}</p>
            <input type= "text" onChange={(event) => setInsertAuthor(event.target.value)} />
            <button onClick= {() => Insert()}>Add Author</button>
            <p>{insertAuthor}</p>
            <input type= "text" onChange={(event) => setInsertDescription(event.target.value)} />
            <button onClick= {() => Insert()}>Add Description</button>
            <p>{insertDescription}</p>
      </div>
  )
}

export default Create;
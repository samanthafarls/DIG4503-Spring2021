import Axios from 'axios';
import { useState } from 'react';

function Create(){
    //add isbn
  const [addISBN, setAddISBN] = useState("");
  const [addResult, setAddResult] = useState("");
  //add title
  const [addTitle, setAddTitle] = useState("");
  const [titleResult, setTitleResult] = useState("")
  //add author
  const [addAuthor, setAddAuthor] = useState("");
  const [authorResult, setAuthorResult] = useState("");
  //add description
  const [addDescription, setAddDescription] = useState("");
  const [descriptionResult, setDescriptionResult] = useState("");

  const Insert = async ()  => {
     const response = await Axios.put("http://localhost:45030/books/" + addISBN,{
          "title": addTitle,
          "author": addAuthor,
          "description": addDescription
      })
      console.log(response.data);
  }

  return (
      <div>
          <input type= "text" onChange={(event) => setAddISBN(event.target.value)} />
            <button onClick= {() => Insert()}>Add ISBN</button>
            <p>{addISBN}</p>
            <input type= "text" onChange={(event) => setAddTitle(event.target.value)} />
            <button onClick= {() => Insert()}>Add Title</button>
            <p>{addTitle}</p>
            <input type= "text" onChange={(event) => setAddAuthor(event.target.value)} />
            <button onClick= {() => Insert()}>Add Author</button>
            <p>{addAuthor}</p>
            <input type= "text" onChange={(event) => setAddDescription(event.target.value)} />
            <button onClick= {() => Insert()}>Add Description</button>
            <p>{addDescription}</p>
      </div>
  )
}

export default Create;
import React,{useState} from "react";
import noteContext from "./NoteContext";

const NoteState=(props)=>{
    // const host="https://memobook.herokuapp.com";
    const host="http://localhost:5000";
   const notesInitial=[
   
  ]
    const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

const [notes, setNotes] = useState(notesInitial);
//get a note
const getNote=async()=>{
  //api call
   
  setLoading(true);
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    
     headers: {
       'Content-Type': 'application/json',
       "auth-token":localStorage.getItem('token')
     }
    
     
   });
 //   const json =response.json(); 
     const json =await response.json()
    // console.log(json);
    setNotes(json)
    
    setLoading(false);
 }

//Add a note
const addNote=async(title,description,tag)=>{
 //api call
    
 setLoading(true);
 const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    },
    body: JSON.stringify({title,description,tag})
    
  });

  const json = await response.json(); 


  setNotes(notes.concat(json))
  setLoading(false);
}

//delete a note
const deleteNote=async(id)=>{
   
  setLoading(true);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    const json =await response.json(); 
    console.log(json)
    const newNotes= notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
    setLoading(false);
}
//Edit a Note
const editNote=async(id,title,description,tag)=>{
    //api call
    
    setLoading(true);
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
       
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')
        },
       
        body: JSON.stringify({title,description,tag})
      });
      const json =await response.json(); 
      console.log(json);

        let newNotes=JSON.parse(JSON.stringify(notes))
    //logic to edit
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if(element._id===id)
        {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
       
    }
      setNotes(newNotes)
      setLoading(false);
}

const deleteUser=async(id)=>{
  setProgress(10);
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    }
   
    
  });
 let json =await response.json();
  json=JSON.stringify(json);
  setProgress(50);
 if(json!=='[]'){
  const response1 = await fetch(`${host}/api/notes/deleteallnote`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    }
  });
  const json1 =await response1.json(); 
  console.log(json1);
}
setProgress(70);
  const response2 = await fetch(`${host}/api/auth/deleteuser/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      'Content-Type': 'application/json',
      "auth-token":localStorage.getItem('token')
    }
  });
  const json2 =await response2.json(); 
  console.log(json2);
 
  setProgress(100);
}
    
    return (
        <noteContext.Provider value={{notes,addNote,getNote,deleteNote,editNote,deleteUser,loading,progress}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;

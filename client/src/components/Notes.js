import React,{useContext,useState,useEffect,useRef} from 'react'

import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';
import Addnote  from './Addnote';
import Noteitem from './Noteitem';
function Notes(props) {
    const ref=useRef(null)
    const refClose=useRef(null)
    const context=useContext(noteContext);
    const  navigate=useNavigate();
    const [note, setnote] = useState({id:"",etitle:"",edescription:"",etag:""})
   
const onchange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}

const handleClick=()=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click()                                         
    props.showAlert("Updated Successfully","success");
  }

    
    const {notes,getNote,editNote}=context;
    useEffect(() => {
      if(localStorage.getItem('token')){
        getNote();
      }
      else{
        navigate('/login')
      }
        // eslint-disable-next-line
    }, [])
   
   

    const updateNote=(currentnote)=>{
        ref.current.click()
        setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
        
    }
    return (
        <>
        <Addnote showAlert={props.showAlert}/>
       
<button ref={ref} type="button" className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label  htmlFor="etitle" className="form-label ">Title</label>
    <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp"onChange={onchange}/>
    
  </div>
  <div className="mb-3">
  <label htmlFor="edescription" className="form-label">Description</label>
    <textarea name="edescription" id="edescription" cols="30" rows="10"  value={note.edescription} onChange={onchange} minLength={2} required/>
    <label  htmlFor="etag" className="form-label">Tag</label>
    <input type="text" value={note.etag} className="form-control" id="etag" name="etag" onChange={onchange} />
  </div>
  
  
</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<2||note.edescription.length<2}type="button" className="btn btn-primary"  onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
        <div className="container">
            
           <h2 >Your Notes</h2>
           <div className="row my-3">
           <div className="container">
           {notes.length===0 && <p style={{color:"black"}}> No notes to display</p>}</div>
           {notes.map((note)=>{
               return <Noteitem  showAlert={props.showAlert} updateNote={updateNote} key={note._id} note={note}/>
           })}
           </div>
        </div>
        </>
    )
}

export default Notes

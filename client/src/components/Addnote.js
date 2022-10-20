import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/NoteContext';
import LoadingBar from 'react-top-loading-bar'

import Spinner from './Spinner';

 const Addnote = (props) => {

  
    const context=useContext(noteContext);
    const {addNote,loading,progress}=context;
    const [note, setnote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
            addNote(note.title,note.description,note.tag);
           setnote({title:"",description:"",tag:""})
           props.showAlert("Added Successfully","success");
    }
    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
    return (
       
              <div className="container my-3">
           <h2 className=''>Add a Note</h2> 
           <LoadingBar
        color='#f11946'
       height={4}
        progress={progress}
        
      />
           <form>
  <div className="mb-0">
    <label htmlFor="title" className="form-label ">Title</label>
    <input  type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp"onChange={onchange} minLength={2} required/>
    
  </div>
  <div className="mb-3">
    
    <label htmlFor="description" className="form-label  ">Description</label>
    <textarea name="description" id="description" cols="30" rows="10"  value={note.description} onChange={onchange} minLength={2} required/>
    <label htmlFor="tag" className="form-label ">Tag</label>
    <input  type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onchange}/>
  </div>
  
  <button disabled={note.title.length<2||note.description.length<2} type="submit" className="btn btn-primary"  onClick={handleClick}>Add Note</button>
</form>
<div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"10vh"}}>{loading&&<Spinner/>}</div>
</div>
        
    )
}
export default Addnote;
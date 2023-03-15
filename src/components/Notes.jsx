import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteCotext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from "./NoteItem"
import AlertContext from "../context/notes/AlertContext"
import { useNavigate } from 'react-router-dom';

function Notes() {
  const context = useContext(NoteCotext)
  const { notes, getNotes, editNote } = context;
  const alertcontext = useContext(AlertContext)
  const {showAlert} = alertcontext
  let navigate  =useNavigate();

  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      
      getNotes()
    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line 
  }, [])
  const ref = useRef(null)

  const refClose = useRef(null)
  const [note, setNote] = useState({id:"e",etitle:"",edescription:"",etag:"default"})
  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.etag})
    
  }
  const handelClick=async (e)=>{
    try {
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click()
      await (note._id);
      showAlert('Updated Note Successfully', 'success');
    } catch (error) {
      showAlert('An error occurred while Updating the note', 'danger');
    }
}
const handleChange= (event)=>{
  setNote({...note,[event.target.name]:event.target.value})
}
  
  
  return (
    <>
      <AddNote />
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div  className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='my-3'>
<div className="mb-3">
  <label htmlFor="etitle">Title</label>
  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={handleChange} minLength={5} required/>
 
</div>
<div className="mb-3">
  <label htmlFor="edescription">Description</label>
  <textarea type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleChange} minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="etag">Tag</label>
  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={handleChange}/>
</div>


</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handelClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>





     
        <h1>you Notes</h1>
        <div className="container mx-2"> 
                {notes.length===0 && 'No notes to display'}
              
          {notes.map((notes) => {
            return <NoteItem key={notes._id} updateNote={updateNote} note={notes} />
          })}
        </div>
      
    </>
  )
}

export default Notes
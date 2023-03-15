import React,{useContext,useState} from 'react'
import NoteCotext from '../context/notes/NoteContext';
import AlertContext from "../context/notes/AlertContext"

function AddNote() {
  const alertContext = useContext(AlertContext)
  const {showAlert} = alertContext
    const context = useContext(NoteCotext)
    const {addNote} = context
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handelClick= (e)=>{
        e.preventDefault()
       addNote(note.title,note.description,note.tag);
       setNote({title: "", description: "", tag: ""})
       showAlert("Added Note Succesfully","success")
    }
    const handleChange= (event)=>{
      setNote({...note,[event.target.name]:event.target.value})
    }
  return (
    <div><h1>
    Add a note
  </h1>
  <form className='my-3'>
<div className="mb-3">
  <label htmlFor="title">Title</label>
  <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={handleChange} minLength={5} required />
 
</div>
<div className="mb-3">
  <label htmlFor="description">Description</label>
  <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange} minLength={5} required />
</div>
<div className="mb-3">
  <label htmlFor="tag">Tag</label>
  <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange} minLength={5} required />
</div>

<button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handelClick}>Add Note</button>
</form>
</div>
  )
}

export default AddNote
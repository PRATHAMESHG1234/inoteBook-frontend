import React, { useContext } from 'react'
import NoteCotext from '../context/notes/NoteContext';
import AlertContext from "../context/notes/AlertContext"
function NoteItem(props) {
    const alertcontext = useContext(AlertContext)
  const {showAlert} = alertcontext
  const context = useContext(NoteCotext)
  const { deleteNote } = context
  const { note,updateNote } = props
  return (
    <div className='col-md-3'>
      <div className="card my-3" >

        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <p className="card-text"> {note.description}. </p>
          <div className='d-flex align-items-center' style={{ cursor: "pointer" }}>
          <div onClick={async() => {  try {
      await deleteNote(note._id);
      showAlert('Deleted Note Successfully', 'success');
    } catch (error) {
      showAlert('An error occurred while deleting the note', 'danger');
    } }}  ><i className="fa-solid fa-trash mx-4" ></i></div>
           <div onClick={()=>{updateNote(note)}}> <i className="fa-solid fa-edit mx-2" ></i></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NoteItem
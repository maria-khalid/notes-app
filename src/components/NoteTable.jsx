import React, { Component } from 'react';

const NoteTable = (props) => {
  return ( 
    <table className="table table-striped">
    <thead className="table-dark">
      <tr>
        <th>Title</th>
        <th>Detail</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((note) => (
        <tr key={note.index}>
          <td>{note.title}</td>
          <td>{note.details}</td>
          <td>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => props.handleEdit(note)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => props.handleDelete(note)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

   );
}
 
export default NoteTable;

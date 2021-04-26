import React, { Component } from "react";
import Notecreate from "./addEditNote";
import NoteTable from "./NoteTable";

class notes extends Component {
  state = {
    data: [],
    note: { index: 0, title: "", details: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const note = { ...this.state.note };
    note[input.name] = input.value;
    this.setState({ note });
  };

  handleAddNote = () => {
    let data = [...this.state.data];
    data.push(this.state.note);
    let dataNote = data.map((element, index) => {
      element.index = index+1;
      return element;
    });
    this.setState({ data: dataNote });
    const note = {
      index: 0,
      title: "",
      details: "",
    };
    this.setState({ note });
  };

  handleEditNoteUpdate = (index) => {
    console.log(index);
    this.setState((prevState) => ({
      data: this.state.data.map((x, key) =>
        key+1 === index
          ? {
              ...x,
              title: this.state.note.title,
              details: this.state.note.details,
            }
          : x
      ),
    }));
    const note = {
      index: 0,
      title: "",
      details: "",
    };
    this.setState({ note });
  };

  handleDelete = (note) => {
    const data = this.state.data.filter(
      (x) => x.title !== note.title && x.details !== note.details
    );
    this.setState({ data });
  };

  handleEdit = (noteObj) => {
    const note = {
      index: noteObj.index,
      title: noteObj.title,
      details: noteObj.details,
    };
    console.log(note);
    this.setState({ note });
  };

  render() {
    return (
      <React.Fragment>
        <div className="mt-5">
          <Notecreate
            onAddNote={this.handleAddNote}
            onEditNote={this.handleEditNoteUpdate}
            handleChange={this.handleChange}
            data={this.state.data}
            note={this.state.note}
          />
        </div>
        <div className="col-md-8 mt-5">
          <NoteTable data = {this.state.data}
          handleEdit ={this.handleEdit}
          handleDelete ={this.handleDelete}
          />
         </div>
      </React.Fragment>
    );
  }
}

export default notes;

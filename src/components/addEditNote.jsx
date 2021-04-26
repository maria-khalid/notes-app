import React, { Component } from "react";

class addEditNote extends Component {
  submitForm = () => {
    if(this.props.note.index === 0){
    this.props.onAddNote();
  }else{
    console.log(this.props.note.index)
    this.props.onEditNote(this.props.note.index );
  }
  };
 
  render() {
    const { index, title, details } = this.props.note;

    return (
      <div className="col-md-6">
        {/* onSubmit={this.handleSubmit} */}
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
              autoFocus
              value={title}
              onChange={this.props.handleChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              id="detail"
              placeholder="Detail"
              value={details}
              onChange={this.props.handleChange}
              name="details"
            />
          </div>

          <button
            type="button" 
            className="btn btn-primary"
            onClick={this.submitForm}
          >
          {this.props.note.index === 0 ? 'Add Note' : 'Edit Note'}
          </button>
        </form>
      </div>
    );
  }
}

export default addEditNote;

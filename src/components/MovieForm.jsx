import React, { Component } from "react";
import axios from "axios";
import "./MovieForm.css";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Movie added with the ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(
          `Error when the movie was added : ${e.message} please fill in all the fields!`
        );
      });
  }

  render() {
    return (
      <div className="MovieForm">
        <h1>Add a new film :</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Title : </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.lastname}
                required
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster URL :</label>
              <input
                type="url"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment">Comment :</label>
              <input
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Add !" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MovieForm;

import React, { Component } from "react";

class Formulaire extends Component {
  state = {
    message: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  HandleChange = (event) => {
    const message = event.target.value;
    this.setState({ message });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea value={this.state.message} onChange={this.HandleChange} required maxLength="140" />
        <div className="info">140</div>
        <button type="submit">Envoyer!</button>
      </form>
    );
  }
}

export default Formulaire;

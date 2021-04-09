import React, { Component } from "react";

class Connexion extends Component {
  render() {
    return (
      <div className="connexionBox">
        <from className="connexion">
          <input 
            placeholder="Pseudo" 
            type="text" 
            reduired />
            <button type="submit">Go</button>
        </from>
      </div>
    );
  }
}

export default Connexion;

import React, { Component, createRef } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

// Firebase
import base from "./base";

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  };

  messagesRef = createRef();

  componentDidMount() {
    // Permet de synchroniser un state avec la base de donnée
    base.syncState("/", {
      context: this,
      state: "messages",
    });
  }

  componentDidUpdate() {
    // la ref correspond au dernier message envoyé grace à .current
    const ref = this.messagesRef.current;
    // defini que le haut du scroll = taille du scroll antier
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    // on va boucler sur les messages et supprimer tous ce qui dépasse 10 messages
    // le foreach pour chaque message au-delà de 10 affecte la valeur null au message
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      messages[key] = null
    })

    this.setState({ messages })
  };

  render() {
    const messages = Object.keys(this.state.messages).map((key) => (
      <Message
        key={key}
        message={this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}
      />
    ));

    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <div className="message">{messages}</div>
          </div>
        </div>
        <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    );
  }
}

export default App;

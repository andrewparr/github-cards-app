import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import "./App.css";

interface Props {
  title: string;
}

type State = {
  profiles: any;
};

class App extends React.Component<Props, State> {
  state = { profiles: [] };

  addNewProfile = (profileData: any) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

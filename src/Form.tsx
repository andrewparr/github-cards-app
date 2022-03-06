import React from "react";
import "./Form.css";
import axios from "axios";

interface Props {
  onSubmit: any;
}

type State = {
  userName: string;
};

export default class Form extends React.Component<Props, State> {
  state = { userName: "" };
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ userName: e.currentTarget.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.onChange}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

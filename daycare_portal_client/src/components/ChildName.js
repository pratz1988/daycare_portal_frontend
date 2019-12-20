import React, { Component } from "react";

class ChildName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "header active item greenName"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.color === "header active item greenName") {
      this.setState({
        color: "header active item redName"
      });
    } else {
      this.setState({
        color: "header active item greenName"
      });
    }
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <a
          class={this.state.color}
          onClick={() => {
            this.changeColor(this.props.childrenData);
            this.props.onClickChildName();
          }}
        >
          {this.props.childrenData.childName}
        </a>
      </>
    );
  }
}

export default ChildName;

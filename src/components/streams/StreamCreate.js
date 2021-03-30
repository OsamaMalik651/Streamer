import React, { Component } from "react";
import { connect } from "react-redux";
import { createStreams } from "../../actions";
import StreamForm from "./StreamForm";

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStreams(formValues);
  };
  render() {
    return (
      <div className="">
        <h3>
          Create a Stream
          <StreamForm onSubmit={this.onSubmit} />
        </h3>
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);

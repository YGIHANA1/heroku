import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class comicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.comicSelected !== this.props.comicSelected) {
      this.setState({
        book: this.props.comics.find(
          (comic) => comic.id === this.props.comicSelected
        ),
      });
    }
  }

  render() {
    return this.state.comic ? (
      <div className="col-sm-8">
        <div className="row mt-3">
          <div className="col-sm-12">
            <h1>{this.state.comic.title}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-5 mt-3">
            <img
              className="comic-cover"
              src={this.state.comic.image}
              alt="book selected"
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row margin-top">
          <div className="col-sm-12">
            <h3>Please select a comic!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default comicDetail;

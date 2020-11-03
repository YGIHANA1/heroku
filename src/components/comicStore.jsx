import React, { Component } from "react";
import ComicList from "./comicList";
import ComicDetail from "./comicDetails";
import  comics  from "../data/comics.json";

class comicStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicSelected: null,
    };
  }

  changeComic = (id) => this.setState({ comicSelected: id });

  render() {
    return (
      <div className="row">
        <ComicList
          comicSelected={this.state.comicSelected}
          changeComic={this.changeComic}
          comics={comics}
        />
        <ComicDetail
          comicSelected={this.state.comicSelected}
          comics={comics}
        />
      </div>
    );
  }
}

export default comicStore;

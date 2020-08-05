import React from "react";
import unsplash from "./api/unsplash"
import SearchBar from "./components/SearchBar";
import ImageList from "./ImageList"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      images: []
    }

    //Fixes this (undefined) issue
    this.getSearch = this.getSearch.bind(this)
  }

  async getSearch(term) {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.getSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

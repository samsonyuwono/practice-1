import React, { Component } from "react";
import Album from "./Album";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(json =>
        this.setState({
          albums: json,
          loading: true
        })
      );
  }
  render() {
    const { albums, loading } = this.state;
    console.log(this.state);
    return !loading ? (
      <h1>Loading....</h1>
    ) : (
      <div className="App">
        {albums.map(album => {
          return <Album album={album} />;
        })}
      </div>
    );
  }
}
export default App;

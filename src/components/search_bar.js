import React, { Component } from 'react';

//following is a functional component that we  started with
//but now are creating the input field via a class componnent
// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: 'type in a search'};
  }

  render() {
    //must return some jsx
    return (
      <div>
        <input
        value = {this.state.term}
        onChange = { (event) => this.setState({term: event.target.value})} />
      </div>
    );

  }

}

export default SearchBar;

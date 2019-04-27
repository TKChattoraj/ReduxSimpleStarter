import React, { Component } from 'react';

//following is a functional component that we  started with
//but now are creating the input field via a class componnent
// const SearchBar = () => {
//   return <input />
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    //must return some jsx
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange = { (event) => this.onInputChange(event.target.value)} />
      </div>
    );

  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

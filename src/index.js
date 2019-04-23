import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCDwBjtAqpUlan6e-Y-PVPfH_gAOQvXQOQ'


//Create a new component.  This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    // 'videos' is what is returned object from the YTSearch--we can call it anything we want
    YTSearch({key: API_KEY, term: 'chattoraj'}, (videos) => {
      this.setState( {videos});
      // the above is the same as:
      // this.setState ({ videos: videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

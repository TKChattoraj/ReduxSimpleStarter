import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCDwBjtAqpUlan6e-Y-PVPfH_gAOQvXQOQ'


//Create a new component.  This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('1975 Cincinnati Reds');
  }
    videoSearch(term) {
      // 'videos' is what is returned object from the YTSearch--we can call it anything we want
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState( {
          videos: videos,
          selectedVideo: videos[1]
        });
      });
    }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 750)
;
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }

}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));

import React, { Component } from "react";
import ChannelSelector from './ChannelSelector';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
              
const channels = {
  simpsons: "UCjQyoKg38Her282_PUiEI7Q", // good
  familyGuy: "UCQ6TzJFgNGCuL4-2jzVR-EQ", // good
  ninjaTurtles: "UCDDEmvTzbFG--7TdVXboM2Q", // good
  southPark: "UCXAIPcomhdB9sftDVfd3bUg", // good
  blackDynamite: "UC-fyTk7pMDqSnTL1iGPgN3Q", // good
  duckTales: "UCY0qmH__iGTR-_AqisigkqA", // good
  boondocks: "UCvlnmTczslaaUNbD-u22D5A", // good
  blackPanther: "UCiSzhJOn3gEfELUNeO-PTTw", // good  
  looneyTunes: "UC9trsD1jCTXXtN3xIOIU8gg", // good
  fatAlbert: "UCoPqG91ZybtkzoZA7iCHjNg" // good
};

const numVids = 10;

// randomly select which channel to load component with
const randomKey = function (obj) {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}


class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [], // array of video links
      channelID: randomKey(channels)
    };
    // bind statements always go in the constructor
    this.clicked = this.clicked.bind(this);
    this.onChangeChannel = this.onChangeChannel.bind(this);
  }

  onChangeChannel(newChannel){
     this.setState({ 
       channelID: channels[newChannel] 
      }, () => {
        console.log(`The new channel chosel was: ${newChannel}`);
        this.clicked();
       });
  }


  clicked() {
  let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${this.state.channelID}&part=snippet,id&order=date&maxResults=${numVids}`;
    fetch(finalURL) // fetch to this url brings up all of the videos
      .then(response => response.json())
      .then(responseJson => {
   
        const resultyt = responseJson.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount(){
    this.clicked();
  }

  render() {
    return (
      <div>
        <ChannelSelector onChangeChannel={this.onChangeChannel} />
        {this.state.resultyt.map((link, i) => {
        
          let frame = (
            <div key={i} className="youtube">
              <iframe title={i} width="560" height="315" src={link} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}
        {this.frame}
      </div>
    );
  }
}

export default Youtube;

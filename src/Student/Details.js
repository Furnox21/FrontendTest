import React, { Component } from "react";
import { Button, Input } from "reactstrap";

const style2 = {
  color: "white",
  fontFamily: "Trebuchet MS",
  fontSize: "20px",
  fontWeight: "italic",
  paddingLeft: "20%",
  paddingRight: "20%",
};

class Details extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      indexValue: 0,
      textInput: "dog",
    };
    this.backPage = this.backPage.bind(this);
  }

  componentDidMount() {
    this.ReloadImages();
  }

  ReloadImages = () => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bd7ff0fdfbeeb14767202a64761e1d20&tags=" +
        this.state.textInput +
        "&per_page=20&page=1&format=json&nojsoncallback=1on&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (sample) {
          let picArray = sample.photos.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return <img alt="dogs" src={srcPath}></img>;
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  };

  backPage() {
    this.props.history.push("/students");
  }

  HandleChange = (e) => {
    this.setState({ textInput: e.target.value });
  };

  Delay = (function () {
    var timer = 0;
    return function (callback, time) {
      clearTimeout(timer);
      timer = setTimeout(callback, time);
    };
  })();

  NextHandler = () => {
    var currentIndex = this.state.indexValue;
    currentIndex++;
    this.setState({ indexValue: currentIndex });
  };
  PreviousHandler = () => {
    var currentIndex = this.state.indexValue;
    currentIndex--;
    this.setState({ indexValue: currentIndex });
  };
  render() {
    return (
      <div>
        <h1>Random Images from API Flickr</h1>

        <br />
        <br />
        <div style={style2}>
          <Input
            placeholder="Type here to search the images"
            onChange={this.HandleChange}
            onKeyUp={() =>
              this.Delay(
                function () {
                  this.ReloadImages();
                }.bind(this),
                1000
              )
            }
          ></Input>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h1>Picture {this.state.indexValue}</h1>
          <br />
        </div>
        {this.state.pictures[this.state.indexValue]}
        <div>
          <br />
          <br />
          <Button onClick={this.PreviousHandler}>Previous Image</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.NextHandler}>Next Image</Button>
          <br />
          <br />
          <Button onClick={this.backPage}>Back to Student List</Button>
        </div>
      </div>
    );
  }
}

export default Details;

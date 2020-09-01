import React from "react";
import "./styles.css";
import { TopBar, Button, GlobalStyles } from "./theme";

export class Slide extends React.Component {
  render() {
    return <div style={{ padding: 50 }}>{this.props.children}</div>;
  }
}

export default class App extends React.Component {
  state = {
    slide: 1,
    slideMax: 6
  };

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      console.log(event.keyCode);
      if (event.keyCode === 37) {
        if (this.state.slide > 1)
          this.setState({ slide: this.state.slide - 1 });
        console.log("left");
      }

      if (event.keyCode === 39) {
        if (this.state.slide < this.state.slideMax)
          this.setState({ slide: this.state.slide + 1 });
        console.log("right");
      }
    });
  }

  handleKeyPress = (e) => {
    // console.log(e);
  };

  prevSlide() {}

  nextSlide() {}

  render() {
    return (
      <div className="App" onKeyDown={this.handleKeyPress}>
        <GlobalStyles />
        <TopBar>
          <div
            style={{ paddingLeft: 35, flex: 1, whiteSpace: "nowrap", width: 0 }}
          >
            <h1>Mothership Presentation</h1>
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ textAlign: "center" }}>
              {this.state.slide}/{this.state.slideMax}
            </p>
          </div>

          <div style={{ flex: 1, textAlign: "right", paddingRight: 35 }}>
            {this.state.slide > 1 && (
              <Button
                onClick={(e) => {
                  this.setState({ slide: this.state.slide - 1 });
                }}
              >
                <i className="fal fa-chevron-square-left" />
              </Button>
            )}
            {this.state.slide < this.state.slideMax && (
              <Button
                onClick={(e) => {
                  this.setState({ slide: this.state.slide + 1 });
                }}
              >
                <i className="fal fa-chevron-square-right" />
              </Button>
            )}
          </div>
        </TopBar>

        {this.state.slide === 1 && (
          <Slide>
            <h1>Mandate</h1>
            <p style={{ fontSize: 30, lineHeight: 1.5 }}>
              To rapidly build and productize next-generation Internet of Things
              solutions and help foster the global community to rapidly
              integrate and become active participants in the IoT space.
            </p>
          </Slide>
        )}

        {this.state.slide === 2 && (
          <Slide>
            <h1>Major wins to date</h1>

            <h2>Kraft</h2>
            <p>Description</p>

            <h2>CoVision</h2>
            <p>Description</p>

            <h2>Bidvest</h2>
            <p>Description</p>
          </Slide>
        )}

        {this.state.slide === 3 && (
          <Slide>
            <h1>Core</h1>
            <p>
              How do we work with core to make our struggles of slide 2 easier.
            </p>
          </Slide>
        )}

        {this.state.slide === 4 && (
          <Slide>
            <h1>Focus</h1>
            <p>More devices and end points on the core platform</p>
          </Slide>
        )}

        {this.state.slide === 5 && (
          <Slide>
            <h1>General purpose re-brandable mobile solution</h1>
            <div
              style={{
                boxSizing: "content-box",
                border: "15px solid black",
                width: 400,
                height: 800,
                borderRadius: 25,
                margin: "50px auto"
              }}
            >
              <iframe
                title="vid"
                width="400"
                height="800"
                src="https://www.youtube.com/embed/QLY5_JhcXm8?showinfo=0&controls=0&autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Slide>
        )}

        {this.state.slide === 6 && (
          <Slide>
            <h1>Roadmap</h1>
            <p>Description</p>
          </Slide>
        )}
      </div>
    );
  }
}

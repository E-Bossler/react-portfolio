import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }




  render() {
    return (
      <div>
  &lt;&gt;
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Welcome, meet Eric!</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
  <link rel="stylesheet" href="assets/style/style.css" />
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="index.html">Welcome</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="resume.html">Interactive Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="hobbies.html">Hobbies</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-2 left-side">
        <div>
          <div className="cornerArt" id="divOne">
          </div>
          <div className="cornerArt" id="divTwo">
          </div>
          <div className="cornerArt" id="divFour">
          </div>
        </div>
        <h3>
          &gt;
        </h3>
      </div>
      <div className="col-8 major-section" id="top">
        <h2>
          Hello, my name is Eric S Bossler
        </h2>
        <p>
          Thank you for visiting.
        </p>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        <h3>
          &gt;
        </h3>
      </div>
      <div className="col-8 major-section">
        <h3>
          About Me
        </h3>
        <div className="contaiiner">
          <div className="row">
            <div className="col">
              <img src="assets/images/headshot.jpg" />
            </div>
            <div className="col">
              Married man in Seattle, WA. Excited uncle. Proud dog parent. Football coach.
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        <h3>
          &gt;
        </h3>
      </div>
      <div className="col-8 major-section">
        <h3>
          My story
        </h3>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2020
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2020" aria-expanded="false" aria-controls="multiCollapseExample2020">Coding Bootcamp</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2020">
              <div className="card card-body">
                I enrolled in a 24 week bootcamp through the University of Washington to learn the
                ins and outs of web development.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2019
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2019" aria-expanded="false" aria-controls="multiCollapseExample2019">Marriage</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2019">
              <div className="card card-body">
                Surrounded by our closest friends and family, my wife and I said our vows on May 4,
                2019.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2018
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2018" aria-expanded="false" aria-controls="multiCollapseExample2018">Seattle</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2018">
              <div className="card card-body">
                In March 2018, I drove with dog and dad across the country with a car load of stuff.
                Here's a picture of us at Mount Rushmore.
                <img id="rushmore" src="assets/images/mountrushmore.JPG" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2015
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2016" aria-expanded="false" aria-controls="multiCollapseExample2016">A new job</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2016">
              <div className="card card-body">
                I moved from working as a pricing specialist to a contracts specialist. Working in
                contracts was a natural transition for me as it required the financial acumen I
                developed as a pricinig specialist.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2013
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2013" aria-expanded="false" aria-controls="multiCollapseExample2013">Wichita State</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2013">
              <div className="card card-body">
                In 2013, I began working towards my second degree. A masters of international economics
                at Wichita State University. I went on to graduate in December 2015.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2012
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2012" aria-expanded="false" aria-controls="multiCollapseExample2012">Wichita</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2012">
              <div className="card card-body">
                After graduating college, I moved to Wichita to start working at Spirit AeroSystems as a
                pricing specialist. I also adopted a wonderful dog named Nico.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        2008
      </div>
      <div className="col-8 minor-section">
        <p>
          <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2008" aria-expanded="false" aria-controls="multiCollapseExample2008">Benedictine</button>
        </p>
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2008">
              <div className="card card-body">
                In the fall of 2008 I left my hometown of O'Fallon, IL and moved to Atchison, KS to
                start my four years at Benedictine College. Met some great folks, played football, and
                had a lot fun.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
        <h3>
          &gt;
        </h3>
      </div>
      <div className="col-8 major-section">
        <h3>
          Copyright
        </h3>
      </div>
      <div className="col-2">
      </div>
    </div>
    <div className="row">
      <div className="col-2 left-side">
      </div>
      <div className="col-8 minor-section">
        © 2020 by Eric S Bossler
      </div>
      <div className="col-2">
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default App;

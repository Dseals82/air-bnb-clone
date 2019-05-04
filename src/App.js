import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid ">
      <div className="container ">
        <div className="row">
          <div className="col-4">
          <div className="header-form card ;">
            <h1 className="h1-form">Earn money as an Airbnb host</h1>
            <p className="p-form">
              From saving for home repairs to
              taking a dream trip, hosts use extra
              income to fund thir passions
            </p>
            <button className="form-button btn btn-danger btn-lg">See How it Works</button>
          </div>
          </div>

          <div className="col-8">
          </div>

          </div>
          </div>
        </div>
        <div className="container">
        <h1 className="barcelona">What you could earn in <span id="barcelona">Barcelona</span></h1>
        <div className="row">
        <div className="col-8">
        <div className="row">
          <div className="col container-bottom">
          <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label className="form-check-label" for="exampleRadios1">
            Entire place
          </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label className="form-check-label" for="exampleRadios1">
            Private room
          </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label className="form-check-label" for="exampleRadios1">
            Shared room
          </label>
          </div>
          </div>
          <div className="col">
            <input id="top-input-one" className="form-control" type="text" placeholder="e.g San Fransisco"/>
            <select id="top-input-two" className="form-control">
              <option>1 Guest</option>
              <option>2 Guest</option>
              <option>3 Guest</option>
              <option>4 Guest</option>
            </select>
          </div>
        </div>
        </div>
        <div className="col-4">
          <button type="button" className=" big-ol-btn btn btn-info btn-lg"><h1><i class="fas fa-pound-sign"></i> 597</h1><p>weekly average <i class="far fa-question-circle"></i></p></button>
        </div>
        </div>
        </div>
        <div>
          <h1 className="h1-footer" align="center">How Hosting Works</h1>
        </div>

    </div>
  );
}

export default App;

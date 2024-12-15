import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container">
        <div className="p-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row p-3 mx-5">
          <div className="col-7">
            <h1 className="fs-4">
              Search for an answer or browse help topics to create a <br/>ticket
            </h1>
            <input placeholder="Eg. how do I activate F&O, why is my order getting rejected.." />
            <br />
            <a href="" className="mr-2">
              Track account opening
            </a>
            <a href="" className="m-2">
              Track segment activation
            </a>
            <a href="" className="m-2">
              Intraday margins
            </a>
            <br />
            <a href="">Kite user manual</a>
          </div>
          <div className="col-4">
            <h1 className="fs-4">Featured</h1>
            <ol>
              <li>
                <a href="">Surveillance measure on scrips - September 2024</a>
              </li>
              <li>
                <a href="">Rights Entitlements listing in September 2024</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

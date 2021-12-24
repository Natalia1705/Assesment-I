import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-2 py-6">
        <div className="row">
          <h1 className="display-6 fw-bolder text-center">About</h1>
          <div className="card border-0 text-center">
            <img
              src="https://avatars.githubusercontent.com/u/85592301?v=4"
              className="mx-auto d-block rounded-circle col-md-4 "
              alt="imagen"
            />
            <div className="card-body">
              <h5 className="card-title">Natalia Hernández Hernández</h5>
              <p className="card-text">Software Developer</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                I learned in this program: ECMAScript, React, React Hooks
              </li>
              <li className="list-group-item">
                email: lau.nat.her.her@gmail.com
              </li>
            </ul>
            <div className="card-body">
              <a href="https://github.com/Natalia1705" className="card-link">
                github.com/Natalia170
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

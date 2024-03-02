import React, { Component, useState } from "react";

export const Job = (props) => {
  const Wrapper = ({ children }) => {
    return <div className="jobwrapper">{children}</div>;
  };

  return (
    <body className="body">
      <Wrapper>
        <div>
          <div className="heading">
            <h1>JOB DESCRIPTION</h1>
          </div>
          <div>
            <desc className={"desc"} placeholder="job description" />
          </div>
          <h2>Your compatibility with this postion</h2>
          <div>
            <input
              className="compatibality"
              placeholder="score"
              value="score"
            />
          </div>

          <h2>Things to work on for this job</h2>
          <div>
            <input className="things" placeholder="skills" value="skills" />
          </div>
        </div>
      </Wrapper>
    </body>
  );
};

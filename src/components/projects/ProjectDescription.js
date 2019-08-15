import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const ProjectDescription = ({ mobile, description, responsibilities }) => (
  <div className="Projects-text">
    <h2 className="SingleProject-tagline">{description}</h2>
    <p>Responsible for:</p>
    <ul>
      {responsibilities.map((resp, idx) => (
        <li key={idx}>
          <p>{resp}</p>
        </li>
      ))}
    </ul>
    {!mobile && (
      <p>
        {`Play in the sandbox with `}
        {`email `}
        <strong>test@test.test</strong>
        {` and password `}
        <strong>test </strong>
        <span className="right-arrow">
          <FaAngleDoubleRight />
        </span>
      </p>
    )}
  </div>
);

export default ProjectDescription;

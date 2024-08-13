import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="justify-content-center pb-3">
      <h1 className="project-heading pb-4">
        My <strong className="txt-color">Code</strong> History
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <GitHubCalendar
          username="pavan1003"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          hideColorLegend
        />
      </div>
    </Row>
  );
}

export default Github;

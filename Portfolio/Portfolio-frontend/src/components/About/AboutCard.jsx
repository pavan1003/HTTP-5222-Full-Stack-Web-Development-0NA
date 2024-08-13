import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="blockquote mb-0 text-start">
          <p>
            Hello, everyone! My name is <span className="txt-color">Pavan Mistry </span>, and I'm
            from the vibrant city of <span className="txt-color">Vadodara in Gujarat, India.</span>
            Currently, I'm working as a Full Stack Developer at Pangeon. Apart from coding, some
            other activities that I love to do!
          </p>
          <p>
            Beyond the screen, I love travelling to new destinations as well as gliding around on my
            skates. These interests keep me inspired and balanced, both in my professional and
            personal life.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

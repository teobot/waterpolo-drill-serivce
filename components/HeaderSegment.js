import React from "react";

import { Image, Container } from "react-bootstrap";

export default function HeaderSegment({ title, subtitle }) {
  return (
    <Container className="text-center d-flex flex-column justify-content-center pt-5 mb-3 pb-3">
      <h1 className="mb-3">{title}</h1>
      <small style={{ fontSize: "65%" }} className="p-3">
        Manchester’s LGBTQ+ Water Polo Club
      </small>
      <div className="p-3 mb-3"></div>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <p style={{ fontSize: "100%" }} className="lead">
          {subtitle}
        </p>
      </div>
    </Container>
  );
}

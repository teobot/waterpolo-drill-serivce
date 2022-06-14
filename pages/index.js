import React from "react";

import DrillContainer from "../components/DrillContainer";

import { Container } from "react-bootstrap";

const randomNumber = (min, max) => {
  // generate a random number between min and max inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomDrill = () => {
  const tags = ["Swim", "Ball", "Warmup"];
  const titles = ["Self-Passing Tipping", "Basketball Court", "Shooting"];
  return {
    id: randomNumber(1, 999999999999999999999),
    title: titles[randomNumber(0, titles.length - 1)],
    tags: [
      tags[randomNumber(0, tags.length - 1)],
      tags[randomNumber(0, tags.length - 1)],
      tags[randomNumber(0, tags.length - 1)],
    ],
    stars: randomNumber(1, 5),
  };
};

export default function Home() {
  return (
    <>
      <Container fluid>
        <DrillContainer
          title="Warmup"
          drills={[randomDrill(), randomDrill(), randomDrill()]}
        />
        <DrillContainer
          title="Passing"
          drills={[randomDrill(), randomDrill(), randomDrill()]}
        />
        <DrillContainer
          title="Warmup"
          drills={[randomDrill(), randomDrill(), randomDrill()]}
        />
        <DrillContainer
          title="Passing"
          drills={[randomDrill(), randomDrill(), randomDrill()]}
        />
      </Container>
    </>
  );
}

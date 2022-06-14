import React from "react";

import DrillSegment from "./DrillSegment";

export default function DrillContainer({ title, drills }) {
  return (
    <div className="pb-4">
      <h1 className="font600" style={{fontSize: "2.3rem"}}>{title}</h1>
      <div
        className="d-flex flex-row w-100"
        style={{
          overflowX: "auto",
        }}
      >
        {drills.map((drill) => (
          <DrillSegment key={drill.id} {...drill} />
        ))}
      </div>
    </div>
  );
}

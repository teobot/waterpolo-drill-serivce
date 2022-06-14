import React from "react";

import { Badge } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

export default function DrillSegment({ title, tags, stars }) {
  const segHeight = 180;
  const segWidth = 300;
  const segDimFactor = 1;
  return (
    <div
      className="border border-1 d-flex flex-column justify-content-between pt-4 ps-3 pb-4 pr-3 bg-white mb-3 me-3"
      style={{
        minWidth: segWidth * segDimFactor,
        maxWidth: segWidth * segDimFactor,
        minHeight: segHeight * segDimFactor,
        maxHeight: segHeight * segDimFactor,
        borderRadius: 10,
      }}
    >
      <div className="w-100 d-flex align-items-center">
        <h2 className="m-0 p-0 bold">{title}</h2>
      </div>
      <div
        className="w-100 d-flex align-items-center"
        style={{ overflowX: "hidden" }}
      >
        {tags.map((tag, index) => (
          <h3 key={`${title}_${tag}_${index}`} className="m-0 p-0 me-3">
            <Badge bg="primary">{tag}</Badge>
          </h3>
        ))}
      </div>
      <div className="w-100 d-flex align-items-center">
        {[...Array(5)].map((_, index) =>
          index < stars ? (
            <AiFillStar color="gold" size={30} key={`${title}_star_${index}`} />
          ) : (
            <AiFillStar
              color="lightgrey"
              size={30}
              key={`${title}_star_${index}`}
            />
          )
        )}
      </div>
    </div>
  );
}

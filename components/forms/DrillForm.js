import React, { useState } from "react";

import { Form } from "react-bootstrap";

export default function DrillForm({ drill, editDrill }) {
  const [drillForm, setDrillForm] = useState(drill);
  return (
    <div className="mb-4 p-2 border border-2 bg-white">
      <Form key={drill.id}>
        <Form.Group controlId="drill-title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={drillForm.title}
            onChange={(e) => {
              setDrillForm({
                ...drillForm,
                title: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="drill-tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            name="tags"
            value={drillForm.tags}
            onChange={(e) => {
              setDrillForm({
                ...drillForm,
                tags: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="drill-stars">
          <Form.Label>Stars</Form.Label>
          <Form.Control
            type="number"
            name="stars"
            value={drillForm.stars}
            onChange={(e) => {
              setDrillForm({
                ...drillForm,
                stars: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="drill-instructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="instructions"
            value={drillForm.instructions}
            onChange={(e) => {
              setDrillForm({
                ...drillForm,
                instructions: e.target.value,
              });
            }}
          />
        </Form.Group>

        {/* save button */}
        <Form.Group controlId="drill-save">
          <Form.Control
            type="submit"
            value="Save"
            onClick={(e) => {
              e.preventDefault();
              editDrill(drillForm);
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

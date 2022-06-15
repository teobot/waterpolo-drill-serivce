import React from "react";

import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";

import { checkLoggedIn } from "../../../lib/checkUser";

import { Container } from "react-bootstrap";
import CategoryForm from "../../../components/forms/CategoryForm";

export default function New() {
  return (
    <>
      <Container>
        <CategoryForm
          formId="category-new-form"
          newCategory={true}
          categoryForm={{
            _id: "",
            title: "",
            drills: [],
          }}
        />
      </Container>
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = await checkLoggedIn(req, res);
  return { props: {} };
},
sessionOptions);

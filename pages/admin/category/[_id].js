import React from "react";

import { Container } from "react-bootstrap";

import dbConnect from "../../../lib/dbConnect";

import CategoryForm from "../../../components/forms/CategoryForm";

import Category from "../../../models/Category";

export default function Edit({ category }) {
  return (
    <>
      <Container>
        <CategoryForm
          formId="category-new-form"
          newCategory={false}
          categoryForm={category}
        />
      </Container>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();

    const category = await Category.findOne({ _id: params._id });

    if (!category) {
      return {
        props: {
          category: null,
          error: "category not found",
        },
      };
    }

    return {
      props: {
        category: JSON.parse(JSON.stringify(category)),
        error: null,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        category: null,
        error: error,
      },
    };
  }
}

import dbConnect from "../../../lib/dbConnect";

import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../../lib/session";

import { checkLoggedIn } from "../../../lib/checkUser";

import Category from "../../../models/Category";

export default withIronSessionApiRoute(async function userRoute(req, res) {
  const { method } = req;

  await dbConnect();

  const user = await checkLoggedIn(req, res);

  const { title, drills } = req.body;

  switch (method) {
    case "POST":
      try {
        if (!title || !drills) {
          return res.status(400).json({
            error: "Please provide all required fields",
          });
        }
        const category = new Category({
          title,
          drills,
        });
        await category.save();
        return res.send({ message: "category created successfully" });
      } catch (error) {
        return res.status(422).send(error.message);
      }
    case "PATCH":
      try {
        const categoryToUpdate = await Category.findById(req.body._id);
        if (!categoryToUpdate) {
          return res.status(404).json({
            error: "Category not found",
          });
        }

        // update the category
        categoryToUpdate.title = title;
        categoryToUpdate.drills = drills;

        await categoryToUpdate.save();

        return res.send({
          message: "Category updated successfully",
          blog: categoryToUpdate,
        });
      } catch (error) {
        return res.status(422).send(error.message);
      }
  }
}, sessionOptions);

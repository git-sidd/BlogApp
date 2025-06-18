import { Blog } from "../models/blog-model.js";

export const getBlogs = async (req, res) => {
  try {
    const category = req.query.category;

    const filter = category ? { category } : {}; // only filter if category exists
    const blogs = await Blog.find(filter);

    if (blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Blogs to Show!!"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blogs Fetched Successfully!!",
      data: blogs
    });
  } catch (error) {
    console.error("error:", error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong!!"
    });
  }
};

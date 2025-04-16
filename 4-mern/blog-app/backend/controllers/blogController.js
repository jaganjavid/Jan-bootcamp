

// Create, getBlog, getBlogByID, updateBlog, deleteBlog

import Blog from "../models/Blog.js";


export const getBlogs = async(req, res) => {

    const blogs = await Blog.find().populate("author", "name");

    res.json(blogs);


}

export const createBlog = async(req, res) => {

    const {title, description} = req.body;
    const image = req.file ? req.file.filename : "";

    // console.log(title, description, image);

    const blog = await Blog.create({title, description, image, author:req.user.id});

    res.json(blog);


}
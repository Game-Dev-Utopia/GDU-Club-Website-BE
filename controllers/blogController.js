import BlogModel from '../model/Blog.model.js';

export async function addBulkBlogs(req, res) {
    try {
        const { blogs } = req.body;
        if (!blogs || blogs.length === 0) {
            return res.status(400).json({ error: "No blogs provided" });
        }

        // Assuming you have a Blog model to save the blogs to the database
        const savedBlogs = await BlogModel.insertMany(blogs);
        return res.status(201).json({ message: "Blogs added successfully", data: savedBlogs });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
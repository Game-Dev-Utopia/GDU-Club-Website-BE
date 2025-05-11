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

export async function getAllBlogs(req, res) {
    try {
        const blogsRes = await fetch(`https://discord.com/api/v10/channels/${process.env.DISCORD_BLOG_CHANNEL_ID || "1369680725057601577"}/messages?limit=50`, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
            }
        });

        const blogsRaw = await blogsRes.json();

        console.log("BlogsRaw: ", blogsRaw);

        if(!blogsRaw || blogsRaw.length == 0) throw new Error("Failed to load Blogs or no blogs found!");
        const blogs = blogsRaw.map(blog => {
            let blogMetadata = blog?.content.split('\n');
            return {
                title: blogMetadata[0]?.split("Title: ")[1],
                authors: blogMetadata[1]?.split("Authors: ")[1],
                description: blogMetadata[2]?.split("Description: ")[1],
                blogUrl : blog?.attachments[0]?.url,
                createdAt: blog?.timestamp
            }
        })
        res.status(200).json(blogs);
    } catch (err){
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
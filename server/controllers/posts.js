import express from "express";
import PostMessage from "../models/postMessage.js";

const posts = [
    {
        "title": "q1",
        "description": "kmgm"
    },
    {
        "title": "q1",
        "description": "hdvcnhgfscjhd"
    },
    {
        "title": "q1",
        "description": "fcdhdh"
    },
    {
        "title": "q1",
        "description": "jg,mkj,"
    },
]
export const getAllPosts = async (req, res) => {
    try {
        // const posts = await PostMessage.find();

        res.status(200).json({ posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = {
        "title": "hello",
        "message": "byy"
    };
    const newPost = new PostMessage(post);
    console.log(post);
    try {
        await newPost.save();

        res.send(post.title)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
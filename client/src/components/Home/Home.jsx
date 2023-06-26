import React from 'react'
import "../../App.css"
import Post from './Post'
import CreatePost from './CreatePost'

const Main = () => {
    return (
        <div className="hideScroll basis-10/12 bg-[#889dd8] flex flex-col items-center py-4 overflow-scroll">
            <CreatePost />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Main

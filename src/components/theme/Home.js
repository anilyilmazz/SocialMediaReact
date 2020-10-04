import React from 'react'
import CreatePost from '../posts/CreatePost'
import UserSearch from '../users/UserSearch'

function Home() {
    return (
        <div>
            <UserSearch/>
            <CreatePost/>     
        </div>
    )
}

export default Home

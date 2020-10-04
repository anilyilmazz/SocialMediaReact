import React, {useEffect} from 'react'
import CreatePost from '../posts/CreatePost'

function Home() {
    useEffect(() => {
console.log(12312)
    })
    return (
        <div>
            <CreatePost/>     
        </div>
    )
}

export default Home

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PostsList() {

    const [tabActive, setTabActive] = useState('all');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPost();
    }, [tabActive])

    const getAllPost = () => {
        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Posts`)
            .then(response => response.json())
            .then(function (data) {
                console.log(data);
                setPosts(data);
            });
    }
    return (
        <div className='mt-2' style={{ marginLeft: "-15px" }}>
            <ul className="nav nav-tabs ">
                <li className="nav-item">
                    <Link onClick={() => setTabActive('all')} className={`nav-link` + (tabActive === 'all' ? ' active' : '')} to="/" >All</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setTabActive('follow')} className={`nav-link` + (tabActive === 'follow' ? ' active' : '')} to="/" >Follows</Link>
                </li>
            </ul>
            {
                posts.map(function (item, i) {
                    console.log(item);
                    return (
                        <div className="card mt-1" key={item.objectId}>
                            <div className="card-header text-left">
                                {item.userId}
                            </div>
                            <div className="card-body">
                            {item.text}
                        </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PostsList

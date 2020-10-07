import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '../../contexts/PostContext';
import uuid from 'react-uuid'
function PostsList() {

    const { setPostsList, poststate } = useContext(PostContext)
    const [tabActive, setTabActive] = useState('all');
    const [activePage, setActivePage] = useState(1)
    const [postsLength, setPostsLength] = useState([]);
    // const [postRender, setpostRender] = useState([]);

    useEffect(() => {
        setPostsLength([]);
        getAllPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabActive])

    const getAllPost = () => {
        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Posts`)
            .then(response => response.json())
            .then(function (data) {
                for (let index = 1; index <= Math.ceil(data.length / 5); index++) {
                    setPostsLength(postsLength => [...postsLength, <li className={`page-item`} key={uuid()}><button className="page-link" onClick={() => setActivePage(index)} >{index}</button></li>])
                }
                var sortedPostList = data.sort((a, b) => parseFloat(b.created) - parseFloat(a.created));
                setPostsList(sortedPostList);
            });
    }

    const handleDecreaseActivePage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1)
        }
    }
    const handleIncreamentActivePage = () => {
        if (activePage < Math.ceil(poststate.posts.length / 5)) {
            setActivePage(activePage + 1)
        }
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
                poststate.posts.slice(((activePage - 1) * 5), activePage * 5).map(function (item, i) {
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
            <nav className='mt-2'>
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={(e) => handleDecreaseActivePage()} key={uuid()}>Previous</button></li>
                    {
                        postsLength
                    }
                    <li className="page-item"><button className="page-link" onClick={() => handleIncreamentActivePage()} key={uuid()}>Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default PostsList

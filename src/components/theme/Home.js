import React from 'react'
import CreatePost from '../posts/CreatePost'
import RigthSideBar from './RigthSideBar'
import './Theme.css';
import {NotificationContainer} from 'react-notifications';


function Home() {
    return (
        <div>
            <NotificationContainer />
            <div className='col-10 mx-auto row mt-2'>
                <div className='col-8'>
                    <CreatePost />
                </div>
                <div className="vl"></div>
                <div className='col-3'>
                    <RigthSideBar />
                </div>

            </div>
        </div>
    )
}

export default Home

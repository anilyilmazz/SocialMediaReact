import React,{useState,useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import {NotificationManager} from 'react-notifications';

function CreatePost() {
    const [text, setText] = useState('')
    const { state } = useContext(AuthContext)

    const handleCreatePost = () => {
        
        let postObject = {
            userId: state.id,
            text: text
        } 
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(postObject)
        };
        console.log(requestOptions);

        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Posts`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                if(data.objectId){     
                    NotificationManager.success('Success', 'Post Created');   
                }else{
                    NotificationManager.error('Error', 'Post Could Not Created');   
                }
                setText('')
            });                 
        }

    return (
        <div className = 'row'>
             <input type="text" value = {text} className="form-control col-9 " placeholder="Something..." onChange={(e) => setText(e.target.value)}></input>
             <button className = ' btn btn-primary col-2 mx-auto' onClick = {() => handleCreatePost()} >Create</button>           
        </div>
    )
}

export default CreatePost

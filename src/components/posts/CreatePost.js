import React,{useState} from 'react'

function CreatePost() {
    const [text, setText] = useState('')
    return (
        <div className = 'row'>
             <input type="text" value = {text} className="form-control col-9 " placeholder="Something..." onChange={(e) => setText(e.target.value)}></input>
             <button className = ' btn btn-primary col-2 mx-auto' onClick = {() => console.log(text)} >Create</button>
        </div>
    )
}

export default CreatePost

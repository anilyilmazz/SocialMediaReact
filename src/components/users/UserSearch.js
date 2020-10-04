import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function UserSearch() {
    const [options, setOptions] = useState([]);
    const [selectuser, setSelectUser] = useState('')
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getUsers = () => {
        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Accounts`)
            .then(response => response.json())
            .then(function (data) {
                var userList = []
                data.forEach(user => {
                    userList.push({ value: user.Email, label: user.Email });
                });
                setOptions(userList)
            });
    }

    const handleSelect = (value) =>{
        setSelectUser(value)
    }
    return (
        <div><Select onChange={(e) => handleSelect(e.value)} options={options}/>
            {selectuser ? 
            <div className="card mt-2">
            <div className="card-body">
              <h5 className="card-title">{selectuser}</h5>
              <button className="card-subtitle mb-2 text-muted btn btn-success w-100">Takip Et</button>
              <p className="card-text">Last Post</p>
            </div>
          </div>:
          <div></div>}
            </div>
            
    )
}

export default UserSearch

import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function UserSearch() {
    const [options, setOptions] = useState([]);
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
                    userList.push({ value: user.Email , label: user.Email });
                });
                setOptions(userList)
            });
    }
    return (
        <div>
            <Select options={options} />
        </div>
    )
}

export default UserSearch

import React from 'react'

export const UserInfo = (props) => {
    console.log("user info", props)
    const id = props ? props.id : null;
    return (
        <div>
            <h2>User Info</h2>
            <h2>{id}</h2>
        </div>
    )
}

export default UserInfo;
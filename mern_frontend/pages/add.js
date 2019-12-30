import axios from "axios"
import React, { useState, useEffect } from 'react'
import UsersCreateForm from "../components/users/UsersCreateForm"
function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(result => {
                setUsers(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    const cbCreate = data => {
        axios.post("http://localhost:3000/users", data)
            .then(result => {
                setUsers([...users, result.data])
            })
            .catch(err => console.log(err))
    }
    return (
<div>
 <h1 style={{ textAlign: "center" }}>users</h1>
       <UsersCreateForm cbCreate={cbCreate} />
 </div>
    )
}
export default Users
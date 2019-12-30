import axios from "axios"
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import UsersCards from "../components/users/UsersCards"
import Mock from "../components/users/mock"
import Page from "../components/users/pagination"
function Home() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(result => {
                setUsers(result.data)
            })
            .catch(err => console.log(err))
    }, [])


    const cbDelete = id => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(result => {
                console.log(result)
                setUsers(users.filter(util => util._id != id))
            })
            .catch(err => console.log(err))

    }
    return (
        <Container style={{ padding: 50 }}>
                <br/>
                <center><Mock setTotal={setTotal} total={total} users={users} setUsers={setUsers} /></center>
                <br></br>
                <Page total={total} current={page} setPage={setPage} />
                <UsersCards users={users} cbDelete={cbDelete}/>
          </Container>
    )
}

export default Home

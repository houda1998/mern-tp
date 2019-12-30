import React from 'react'
import Button from "react-bootstrap/Button"
import axios from "axios"
function Mock({users=[],setUsers, total,setTotal}) {
    const nbrToFetch = 100 - total
    const cbFetchUsers = () => {
        nbrToFetch >0 &&
        axios.get(`https://randomuser.me/api?results=${nbrToFetch}`)
        .then(result => {
            console.log(result)
            const newUsers = result.data.results.map(user => ({
                username:user.login.username,
                gender:user.gender,
                dob:user.dob.date,
                news:false,
                email:user.email,
                photo:user.picture.thumbnail
            }))
            console.log(newUsers)
            newUsers.map(user => {
                axios.post("http://localhost:3000/users",user)
                .then(res=>{
                    setUsers(users=> users.length < 10 ? [...users,res.data]:users)
                })
                .catch(err => console.log(err))
            })
            setTotal(100)
            console.log(users)
        })
        .catch(err =>{

        })
    }
    return (
         <Button onClick={cbFetchUsers} variant="primary" disabled={nbrToFetch < 100}>
            mock : {nbrToFetch> 0 ?nbrToFetch:0 }
         </Button>   
    )
}

export default Mock
import React, { useState, useEffect }  from 'react'
import axios from "axios"
import { Form, Button,Col } from "react-bootstrap"
import { useParams, useHistory } from "react-router-dom"
import moment from "moment"
function UsersForm() {
  const { id } = useParams()
  const history = useHistory()
  console.log(id)
  const [user, setUser] = useState({})
  useEffect(() => {
      axios.get(`http://localhost:3000/users/${id}`)
          .then(result => {
              setUser(result.data)
          })
          .catch(err => {
              console.log(err)
              history.goBack()
          })
  }, [id])
  const UpdateUser = () => {
    axios.put(`http://localhost:3000/users/${id}`, user)
        .then(result => {
          history.goBack()
        })
        .catch(err => {
            console.log(err)
            history.goBack()
        })

}
    return (
      <div style={{ margin: 20, width: "600px" }} >
      <h3>Creation Form</h3>
      <Form>
<Form.Row>
<Form.Group as={Col} controlId="formGridusername">
<Form.Label>username</Form.Label>
<Form.Control placeholder="username"  value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})}/>
</Form.Group>

<Form.Group as={Col} controlId="formGridgenre">
<Form.Label>gender</Form.Label>
<Form.Control as="select" value={user.gender} onChange={(e)=> setUser({...user,gender:e.target.value})}>
<option >choose</option>
  <option value="male" >male</option>
  <option value="female">female</option>
</Form.Control>
</Form.Group>
</Form.Row>

<Form.Group as={Col} controlId="formGridEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Enter email" value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
</Form.Group>
<Form.Row>
<Form.Group as={Col} controlId="formGridnews">
<Form.Label>news</Form.Label>
<Form.Control as="select" value={user.news} onChange={(e)=> setUser({...user,news:e.target.value})}>
  <option value={true}>true</option>
  <option value={false} >false</option>
</Form.Control>
</Form.Group>

<Form.Group controlId="formGriddob">
<Form.Label>date</Form.Label>
<Form.Control type="date" placeholder="date of birth"  value={moment(user.dob).format("YYYY-MM-DD")} onChange={(e)=> setUser({...user,dob:e.target.value})}  />
</Form.Group>
</Form.Row>
<Button variant="primary" onClick={UpdateUser}>update</Button>
</Form>
  </div>
)

}
export default UsersForm

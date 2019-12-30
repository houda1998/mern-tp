import React, { useState} from 'react'
import { Form, Button,Col} from "react-bootstrap"
import moment from 'moment'
import { Redirect, useHistory} from "react-router-dom"

function UsersForm({ cbCreate }) {
    const [newUser, setNewUser] = useState({})
    const history = useHistory()
    const createUser = () => {
        cbCreate(newUser);
        setTimeout(() => {
         history.goBack() 
        }, 1000);
    }


    return (<div style={{ margin: 20, width: "600px" }} >
            <h3>Creation Form</h3>
            <Form>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridusername">
      <Form.Label>username</Form.Label>
      <Form.Control placeholder="username" value={newUser.username} onChange={(e)=> setNewUser({...newUser,username:e.target.value})}required/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridgenre">
      <Form.Label>gender</Form.Label>
      <Form.Control as="select" value={newUser.gender} onChange={(e)=> setNewUser({...newUser,gender:e.target.value})} required>
      <option>choose</option>
        <option  value="male">male</option>
        <option  value="female">female</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={newUser.email} onChange={(e)=> setNewUser({...newUser,email:e.target.value})}required/>
    </Form.Group>
 <Form.Row>
    <Form.Group as={Col} controlId="formGridnews">
    <Form.Label>news</Form.Label>
      <Form.Control as="select" value={newUser.news} onChange={(e)=> setNewUser({...newUser,news:e.target.value})}>
        <option value={true} >true</option>
        <option value={false} >false</option>
      </Form.Control>
    </Form.Group>

  <Form.Group controlId="formGriddob">
    <Form.Label>date</Form.Label>
    <Form.Control type="date" placeholder="date of birth" value={moment(newUser.dob).format("YYYY-MM-DD")} onChange={(e)=> setNewUser({...newUser,dob:e.target.value})} required  />
  </Form.Group>
</Form.Row>
<Button variant="primary" onClick={createUser}>Add</Button>
</Form>
        </div>
    )
}
export default UsersForm

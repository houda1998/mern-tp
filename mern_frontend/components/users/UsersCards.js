import React from 'react'
import {Card,CardDeck,Button} from "react-bootstrap"
import { GridList } from '@material-ui/core';
import {useHistory} from "react-router-dom"
import moment from 'moment'
function UsersCards({users,cbDelete})
{
    const history = useHistory()
    
return (
<div> 
<CardDeck>
{
users.map((user, i) => (
<GridList cols={2} style={{height: '550px'}}>
<Card style={{height:'550px'}} key={i}>
<Card.Body >
<Card.Img variant="top" src={user.photo} />
    <Card.Title>{user.username}</Card.Title>
    <Card.Text>
    gender:{user.gender}<br/>
    date of birth : {moment(user.dob).format("YYYY-DD-MM")}<br/>
    email: {user.email}<br/>
    news: {user.news?"subscribed" : "not subscribed"}<br/>
    </Card.Text> 
  </Card.Body> 
   <Button variant="danger" onClick={()=> cbDelete(user._id)}>delete</Button>
  <Button variant="warning" onClick={() => history.push(`/update/${user._id}`)}>update</Button>
</Card> 
</GridList>))}
</CardDeck>
</div>
)
    }

export default UsersCards
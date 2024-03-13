import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../constants/URL';
import {useNavigate} from 'react-router-dom';

function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
      
    const updateUser = async () => {
       await axios.put(API_URL + id, {
        firstName,
        lastName,
        checked
       }); 
       navigate('/read');
    }
    
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
    }, [])
  return (
    <div>
        <h2>Update Operation</h2>
        <Form className="form">
        <Form.Field>
        <label>First Name</label>
        <input value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="Enter First Name"  />
        </Form.Field><br/>
        <Form.Field>
        <label>Last Name</label>
        <input value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Enter Last Name"  />
        </Form.Field><br/>
        <Form.Field>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} label="Agree the Terms & conditions"  />
        </Form.Field><br/>
        <Button onClick={updateUser}>Update</Button>
        </Form>
    </div>
  )
}

export default Update
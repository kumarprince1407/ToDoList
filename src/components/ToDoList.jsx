// ToDoList.jsx
import React, { useEffect, useState } from 'react';
import './styles.css';
import { Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setUserInput] = useState({
    userid: '',
    id: '',
    title: '',
    completed: false,
  });

  const navigate = useNavigate();

  //change
 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('http://localhost:3001/todolist/',{
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput),

      });
        if(response.ok){
          console.log('Data sent successfully');
          navigate('/home'); // Navigate after successful submission

        }else{
          console.error('Failed to send data:', response.status);
        }

    }catch(error){
      console.error('Error sending data:', error);
    }


    setUserInput({
      userid: '',
      id: '',
      title: '',
      completed: false,
    });

  };

 //Fetch data function

 const fetchData = async () =>{

  try{
    const response = await fetch('http://localhost:3001/todolist');
    const data = await response.json();
    setToDoList(data);
    //console.log("Log data:"+ data);
  }catch(error){
    //console.error('Error fetching data:', error);
  }
 };

 
 //useEffect to fetch data initially
 useEffect(()=>{
  fetchData();
 }, []);

 const handleButtonClick = () => {
  navigate('/home');
 }

  return (
    <React.Fragment>
      <div className="fragment1">
        <div className="headingContainer">
          <h2 id="heading1">ToDoList</h2>
          <Button variant="contained" color="success" id="button" onClick={handleButtonClick}>
            Homepage
          </Button>
        </div>
        {/* Form to add new ToDo */}
        <div className="mainContainer">
          <div className="inputForm">
            <h3 id="heading2">Enter details</h3>

            <form onSubmit={handleFormSubmit}>
              <label htmlFor="textarea1">
                
                <br />
                <TextField
                  label="User ID"
                  className="inputfield"
                  type="text"
                  name="userid"
                  value={userInput.userid}
                  onChange={handleInputChange}
                  sx={{ width: '150%' }}

                  
                />
              </label>
              <br />
              <label htmlFor="textarea2">
                
                <br />
                <TextField
                  label="ID:"
                  className="inputfield"
                  type="text"
                  name="id"
                  value={userInput.id}
                  onChange={handleInputChange}
                  sx={{ width: '150%' }}

                />
              </label>
              <br />
              <label htmlFor="textarea3">
                
                <br />
                <TextField
                label="Title:"
                  className="inputfield"
                  type="text"
                  name="title"
                  value={userInput.title}
                  onChange={handleInputChange}
                  sx={{ width: '150%' }}

                />
              </label>
              <br /><br/>
              <label htmlFor="checkbox">
                <span>Completed:</span>
                <Checkbox
                label="Completed:"
                  type="checkbox"
                  name="completed"
                  value={userInput.completed}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <div className="buttonContainer">
                <Button variant="contained" color="success" id="button1" type="submit" >
                  Add To List
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default ToDoList;
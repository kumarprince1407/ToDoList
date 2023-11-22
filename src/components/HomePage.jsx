// HomePage.jsx
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [toDoList, setToDoList] = useState([]);

  //Change
const navigate = useNavigate();



  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch('http://localhost:3001/todolist');//Updated URL
        const data = await response.json();
        setToDoList(data);
      }catch(error){
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);



  return (
    <React.Fragment>
      <div className="fragment1">
        <div className="headingContainer">
          <h2 id="heading1">Home</h2>
          <Button variant="contained" color="success" id="button2" onClick={() => navigate('/')}>
            Add New
          </Button>
        </div>
        {/* Form to add new ToDo */}
        <div className="mainContainer">
          <div className="displayContents">
            <table className="table">
              <thead>
                <tr>
                  
                  <th>Username</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>CompletedStatus</th>
                </tr>
              </thead>
              <br/>
              <tbody>
                {/* Data entered will be displayed here */}
                {toDoList.map((listContent, index)=>(
                  <tr key = {index}>
                    <td>{listContent.userid}</td>
                    <td>{listContent.id}</td>
                    <td>{listContent.title}</td>
                    <td>{listContent.completed ? 'Yes' : 'No'}</td>
                  </tr>
                  
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default HomePage;

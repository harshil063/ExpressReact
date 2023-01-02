import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";
import axios from "axios";
function App() {

  const[students,setStudents] = useState([])

  useEffect(()=>{
    async function getAllStudent(){
      try{
        const students = await axios.get("/api/student")
        console.log(students.data);
        setStudents(students.data);
      }catch(error){
        console.log(error)
      } 
    }
    getAllStudent()
  },[])


  return (
    <div className="App">
      <h1>Connect ReactJs to ExpressJS</h1>
      {
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        {
          students.map((student,i)=>{
            return(
              <React.Fragment>
                <tr>
                  <td>{student.stuname}</td>
                  <td>{student.email}</td>
                </tr>
                {/* <h2 key={i} >{student.stuname} {student.email}</h2> */}
              </React.Fragment>
            )
          })
        }
          
        </table>
      }
    </div>
  );
}

export default App;

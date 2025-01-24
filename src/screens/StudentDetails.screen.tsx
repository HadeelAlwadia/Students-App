import {  useParams } from 'react-router-dom';
import Student from '../components/student/student.component'
import { IStudent } from '../types';
import {  useContext, useEffect } from 'react';
import { AppContext } from '../store';


const StudentDetails = () => {
   const { id } = useParams();
   const currentStudent=useContext(AppContext).state.studentsList.find(std=>std.id===id);



  return (
    <div className="std-detail-screen">
      <h2>Student Details: {currentStudent?.name}</h2>
      {
        currentStudent && (
          <Student
            mode='details'
            id={currentStudent.id}
            name={currentStudent.name}
            age={currentStudent.age}
            absents={currentStudent.absents}
            isGraduated={currentStudent.isGraduated}
            coursesList={currentStudent.coursesList}
          />
        )
      }
    </div>

  )
}

export default StudentDetails;
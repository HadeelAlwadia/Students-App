import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store';
import Student from '../components/student/student.component';
import { useSearchParams } from 'react-router-dom';
import { IStudent } from '../types';


const COURSES_FILTERS = ['Math', 'HTML', 'CSS', 'OOP'];

const Main = () => {
  const {studentsList,totalAbsents}=useContext(AppContext).state;
const {dispatch}=useContext(AppContext)
const [params, setParams] = useSearchParams();
const [filteredList, setFilteredList] = useState<IStudent[]>(studentsList);


const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

  const query = event.target.value;
  if (query.length) {
    params.set('q', query);
  } else {
    params.delete('q');
  }
  setParams(params);
}



const handleGardFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const v = event.target.value;
  if (v === 'all') {
    params.delete('graduated');
  } else {
    params.set('graduated', v);
  }
  setParams(params);
}
const handleCourseFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  const course = event.target.value;
  const checked = event.target.checked;
  if (checked) {
    params.append('courses', course);
  } else {
    params.delete('courses', course);
  }
  setParams(params);
}





useEffect(() => {
  const query = params.get('q') || '';
  const graduated = params.get('graduated');
  const courses = params.getAll('courses');

  if (query) {
    setFilteredList(studentsList.filter(std => std.name.toLowerCase().includes(query.toLowerCase())));
  } else {
    setFilteredList(studentsList);
  }

  if (graduated === 'grad') {
    setFilteredList(oldState => (oldState.filter(std => std.isGraduated)));
  } else if (graduated === 'non-grad') {
    setFilteredList(oldState => (oldState.filter(std => std.isGraduated == false)));
  }


  if (courses.length) {
    // OR
    // setFilteredList(oldState => (oldState.filter(std => std.coursesList.some(c => (courses.includes(c))))));

    // AND
    setFilteredList(oldState => (oldState.filter(std => courses.every(cours => (std.coursesList.includes(cours))))));
  }

}, [params, studentsList]);


  return (
   <div className="main-screen">
      <h2>Students List</h2>

      <div className="stats">
        <button onClick={() => dispatch({type:"REMOVE_FIRST"})}>POP Student</button>
        <b style={{ fontSize: '12px', fontWeight: 100, color: 'gray' }}>Total Absents {totalAbsents}</b>
      </div>
      <div className="filter">
        <input type="search" placeholder="Search" onChange={handleSearch} value={params.get('q') || ''} />
        <select value={params.get('graduated') || 'all'} onChange={handleGardFilter}>
          <option value="all">All</option>
          <option value="grad">Graduated</option>
          <option value="non-grad">Not Graduated</option>
        </select>

        </div>

        <div>
          {
            COURSES_FILTERS.map(cours => (
              <React.Fragment key={cours}>
                <input
                  id={cours}
                  type="checkbox"
                  value={cours}
                  onChange={handleCourseFilter}
                  checked={params.getAll('courses').includes(cours)}
                />
                <label htmlFor={cours}>{cours}</label>&nbsp;&nbsp;
              </React.Fragment>
            ))
          }
        </div>

             {
         filteredList.length?studentsList.map(std=><Student key={std.id} mode={"list"} {...std}/>):<div>ho have student </div>
       }
    </div>
  )
}

export default Main;

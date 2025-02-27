import './student.css';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import Absents from '../absents/absents.component';

interface IProps extends IStudent {
  mode: 'details' | 'list';
}

const Student = (props: IProps) => {
  console.log(props)
  return (
    <div className="std-wrapper">
      <div className="data-field">
        <b>Student:</b>
        {
          props.mode === 'list'
            ? <a href={`/student/${props.id}`}>{props.name.toUpperCase()}</a>
            : props.name.toUpperCase()
        }
        
      </div>
      <div className="data-field">
        <b>Age:</b> {props.age}
      </div>
      <div className="data-field" style={{ color: props.isGraduated ? 'green' : 'orange' }}>
        <b>Is Graduated:</b> {props.isGraduated ? 'Yes' : 'No'}
      </div>
      <div className="data-field">
        <b>Courses List:</b>
        <CoursesList list={props.coursesList} />
      </div>
      {
        props.mode === 'list' && <Absents {...props} />
      }
    </div>
  )
}

export default Student;


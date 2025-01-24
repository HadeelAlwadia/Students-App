import { useContext } from "react";
import AddForm from "../components/add-form/add-form.component";
import { AppContext } from "../store";

const AddStudent = () => {
  const { dispatch } = useContext(AppContext);
  const {studentsList,totalAbsents}=useContext(AppContext).state

  
  return (
    <div className="add-screen">
      <h2>Add New Student</h2>
      <AddForm className="addForm"
       onSubmit={newStudent =>{
        dispatch({ type: "ADD_STUDENT", payload: newStudent })

       }}
          />

    </div>
  )
}


export default AddStudent;

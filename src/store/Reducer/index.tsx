import { Iaction,  Istate, Istudent } from "../../@types"

const reducer = (state: Istate, action: Iaction) => {

    switch (action.type) {
  
      case 'ADD_STUDENT': {
        state.studentsList.push(action.payload as Istudent)
         localStorage.setItem('students-info',JSON.stringify({studentsList:[...state.studentsList],totalAbsents:0}))
        return { ...state }

         
      }
      case 'REMOVE_FIRST': {
              state.studentsList.shift()
              localStorage.setItem('students-info',JSON.stringify({studentsList:[...state.studentsList],totalAbsents:0}))

        return {...state}
      }
      

      default:
        {
            return state
        }

    }}
    
    export default reducer;



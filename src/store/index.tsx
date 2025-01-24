import  { createContext, ReactElement, useEffect, useReducer } from 'react';
import { Iaction, IappState, Istate, Istudent } from '../@types';
import reducer from './Reducer';



 const userInfo= localStorage.getItem('user-info')? JSON.parse(localStorage.getItem('user-info')||''):{}
 const studentInfo=localStorage.getItem('user-info')?  JSON.parse(localStorage.getItem('students-info')||''):{}


export const initialState:IappState= {


  state:localStorage.getItem('user-info')?{
      userInfo,
      ...studentInfo
  }:{
  userInfo:null,
 totalAbsents:0,
 studentsList:[]
  },
  
    dispatch:(action:Iaction)=>{
        
    }
};



export const AppContext = createContext(initialState);



  const AppProvider = ({children}:{children:ReactElement}) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);



  return (
     <AppContext.Provider value={{state,dispatch}}>
       {children}
     </AppContext.Provider>
  );
};



export default AppProvider;




interface Istudent{
    id:string
    name:string
    age:number
    
    absents:number
    isGraduated:boolean
    coursesList:string[]
}
interface Iaction{
    type:string,
    payload?:string|Istudent|Iapsent
}
interface Iapsent{
    id: string
    change: number 
}


interface Istate{
    studentsList:Istudent[],
    totalAbsents:number,
    userInfo:{userName:string,role:string}
}
interface IappState{
state:Istate,
dispatch:(action:Iaction)=>void
}



export type{
Iaction,Istudent,IappState,Istate
}
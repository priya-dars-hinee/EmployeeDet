
import './App.css'
// import { Employes } from './Employes'/
import Listemp from './Listemp'
import Emp from './Data/Emp'
import { useState } from 'react'

function App() {
  const [employee,setEmp] = useState(Emp)
  console.log(employee)

  return (
    <>
     <h1>Employee Details</h1>
     <h3>{employee.length}Employee Details</h3>
   <Listemp employee={employee} />

   <button type='button' className='responsive-button' onClick={() => setEmp([])}>
Clear All
   </button>
    </>
  )
}

export default App

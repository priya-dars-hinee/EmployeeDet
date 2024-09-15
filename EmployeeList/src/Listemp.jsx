import React from 'react'
import  Employes  from './Employes'

const Listemp = ({employee}) => {
  return (
   <>
   <section>
{employee.map((emp)=>{
  return <Employes key={emp.id} {...emp}/>
})}
   </section>
   </>
  )
}

export default Listemp

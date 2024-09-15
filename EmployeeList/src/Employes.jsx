import React from 'react'

 const Employes = ({name,age,image}) => {
  return (
<>
<article className="employee">
  <img src={image} alt={name} className='img responsive-emp' />
  <div>
    <h4>
      {name}
      <p>{age} </p>
    </h4>
  </div>
</article>
</>
  )
}

export default Employes
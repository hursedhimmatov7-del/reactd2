import React from 'react'
import Settings from './Settings'

const Card = (props) => {
  let {
nameClass ,
students ,
data ,
branch ,
days ,
schedule 
  } = props
  return (
    <div className='card'>
      <div className='nameDiv'>
        <div className='name'>
          <div className='sphere'></div>
          <h3>{nameClass}</h3>
          <p>{data}</p>
          <h4>{branch}</h4>
        </div>
        <div className='stu'>
          <p>{students}</p>
          <p>students</p>
        </div>
      </div>
      <div className='infoDiv'>
        <div className='stud'>
          <p>{students}</p>
          <p>qualifiers</p>
        </div>
        <div className='sched'>
          <h3>{days}</h3>
          <p>{schedule}</p>
        </div>
      </div>
      <Settings/>
    </div>
  )
}

export default Card

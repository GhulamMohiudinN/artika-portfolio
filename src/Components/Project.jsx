import { useState } from 'react'
import Api from './Api'
import "./Artika.css"
import Card from './Card';
const Project = () => {
    const [manu, setManu] = useState(Api);
  return (
    <>
   <Card manu={manu}/>
    </>
  )
}

export default Project
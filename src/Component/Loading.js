import React from 'react'
import { Spinner} from 'react-bootstrap';

function Loading() {
  return (
    <Spinner style={{marginTop:"12px",color:"white"}} animation="border" />
  )
}

export default Loading
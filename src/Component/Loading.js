import React from 'react'
import { Spinner} from 'react-bootstrap';

function Loading() {
  return (
    <Spinner style={{marginTop:"12px"}} animation="border" />
  )
}

export default Loading
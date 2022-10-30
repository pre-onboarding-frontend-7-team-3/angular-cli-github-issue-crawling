import React from 'react'
import { useLocation } from 'react-router-dom';

const Error = () => {
  const {state} = useLocation()
  return (
    <div>{state.status} || {state.message}</div>
  )
}

export default Error
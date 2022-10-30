import React from 'react'
import ReactMarkdown from "react-markdown";

const DetailBody = ({body}) => {
  return (
    <ReactMarkdown>{body}</ReactMarkdown>
  )
}

export default DetailBody
import React from "react"

const Title = ({ title, isH1 }) => {
  return (
    <div className="section-title">
      {isH1 ? (
        <h1>{title || "default title"}</h1>
      ) : (
        <h2>{title || "default title"}</h2>
      )}
      <div className="underline"></div>
    </div>
  )
}

export default Title

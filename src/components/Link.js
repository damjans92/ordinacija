import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Link = ({ text, url, id, icon, isService }) => {
  if (isService) {
    return (
      <AniLink
        activeClassName="active"
        cover
        bg="#2caeba"
        duration={0.9}
        to={url}
        key={id}
      >
        {icon}
        {text}
      </AniLink>
    )
  }
  return (
    <AniLink
      activeClassName="active"
      cover
      bg="#2caeba"
      duration={0.9}
      to={url}
    >
      {text}
    </AniLink>
  )
}
export default Link

import { Link } from 'gatsby'
import React from 'react'

export const Footer = ({ menu }) => {
  return (
    <div>
      <nav>
        {menu.menuItems.nodes.map(node => (
          <Link to={node.path} key={node.id}>
            {node.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

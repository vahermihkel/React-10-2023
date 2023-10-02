import React from 'react'
import { Link } from 'react-router-dom';

function Ostukorv() {
  return (
    <div>
      <span>Ostukorv on tühi</span>
      <Link to="/avaleht">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv
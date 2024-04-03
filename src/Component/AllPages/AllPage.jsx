import React from 'react'
import { Link } from 'react-router-dom'
import Style from "../AllPages/AllPage.module.css"
const AllPage = () => {
  return (
    <>
    <div className={Style.allpage} >
      1.Project1<Link to="/watch">Clock</Link><br /><br />
      2.Project2<Link to="/bingo">BingoGame</Link>
      </div>
    </>
  )
}

export default AllPage

import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
      <nav className=" mt-5 flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-white font-bold" href={"/"}>
          To Do List Coding
        </Link>
        <Link className="bg-white p-2" href={"/addTopic"}>
          Add Topic
        </Link>
      </nav>
  );
}

export default NavBar
import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-400 flex-wrap bg-teal p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-joystick mr-2"
          viewBox="0 0 16 16"
        >
          <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
          <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Boarding Game
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="/game"
            className="block mt-4 lg:inline-block lg:mt-0
            text-teal-lighter hover:text-white mr-4"
          >
            Start New Game
          </a>
          <a
            href="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Log In
          </a>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
          >
            About This Game
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header

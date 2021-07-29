import React, { useEffect, useState } from 'react'

const RelaxGame = () => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(show)
  }

  useEffect(() => {
    toggle()
  }, [show])

  const square = new Array(5000).fill(null).map((it) => {
    return (
      <div
        className={`square w-4 h-4 0 m-0.5 shadow transition duration-100 ease-in ${
          show ? 'bg-pink-700' : 'bg-gray-700'
        }`}
        key={`it_${it}`}
        onMouseEnter={toggle}
      />
    );
  });

  return (
    <div className="board flex items-center justify-center flex-wrap h-screen overflow-hidden">
      {square}
    </div>
  )
}

export default RelaxGame

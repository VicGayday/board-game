import React from 'react'

const RelaxGame = () => {
  const square = new Array(5000).fill(null).map((it) => {
    return (
      <div
        className="square w-16 h-16 bg-gray-700 m-1 shadow transition duration-100 ease-in"
        key={`it_${it}`}
      />
    );
  })

  return (
    <div className="board flex items-center justify-center flex-wrap">
      {square}
    </div>
  )
}
export default RelaxGame

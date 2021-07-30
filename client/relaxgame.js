import React, { useState } from 'react'

const RelaxGame = () => {
  const [gameField] = useState(
    new Array(500).fill(null).map((it, index) => {
      return {
        id: index,
        state: 'free',
      };
    })
  );

  return (
    <div className="flex items-center justify-center max-h-96 max-w-lg flex-wrap">
      {gameField.map((it) => {
        const classes = `
            ${it.state === 'free' ? 'bg-gray-700' : 'bg-pink-700'}
            `;
        return (
          <div
            className={`w-4 h-4 0 m-0.5 hover:bg-red-500 shadow transform transition duration-500 ease-out ${classes}`}
            key={it.id}
            // onMouseEnter={() => {
            //   it.state !== 'free'
            // }}
          />
        )
      })}
    </div>
  );
}

export default RelaxGame

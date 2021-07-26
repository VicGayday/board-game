import React, { useState, useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
import './game.scss'

const Game = ({ height = 5, width = 5 }) => {
  const [gameField, setGameField] = useState(
    new Array(height * width).fill(null).map((it, index) => {
      return {
        id: index,
        state: 'free'
      }
    })
  )

  // const getUserScore = () => {
  //   const score = gameField.filter((it) => it.state === 'user')
  //   return score.length
  // }

  const getRandomField = () => {
    const gameFieldFree = gameField.filter((it) => it.state === 'free')
    return gameFieldFree[Math.floor(Math.random() * gameFieldFree.length)].id
  }

  const [selected, setSelected] = useState(getRandomField())
  const [tid, setTid] = useState(null)
  const [computerScore, setComputerScore] = useState('')
  const [userScore, setUserScore] = useState('')

  const updateState = (id, state) => {
    setGameField(
      gameField.map((it) => {
        return {
          ...it,
          state: it.id === id ? state : it.state
        }
      })
    )
    setSelected(getRandomField())
    clearTimeout(tid)
  }

  const chooseNextRound = (selected2) => {
    const timeoutId = setTimeout(() => {
      updateState(selected2, 'computer')
    }, 1000)
    setTid(timeoutId)
  }

  useEffect(() => {
    const computerFields = gameField.filter((it) => it.state === 'computer')
    setComputerScore(computerFields.length)
    const userFields = gameField.filter((it) => it.state === 'user')
    setUserScore(userFields.length)
    if (computerFields.length > (width * height) / 2) {
      setSelected(null)
      alert('Computer wins')
    }
    if (userFields.length > (width * height) / 2) {
      setSelected(null)
      alert('Congrats! You win!')
    }
    if (computerFields.length < (width * height) / 2 && userFields.length <= (width * height) / 2) {
      chooseNextRound(selected)
    }
  }, [selected])

  return (
    <div>
      <div className="flex items-center justify-center p-6">
        <div
          className="flex flex-wrap"
          style={{ flexBasis: `${width * 48}px` }}
        >
          {gameField.map((it) => {
            const classes = `
            ${it.state === 'free' ? 'bg-gray-200' : ''}
            ${it.id === selected ? 'bg-yellow-200' : ''}
            ${it.state === 'user' ? 'bg-green-200' : ''}
            ${it.state === 'computer' ? 'bg-red-200' : ''}
            `;
            return (
              <button
                className={`box border-gray-500 border-2 ${classes}`}
                key={it.id}
                aria-label="click"
                type="button"
                onClick={() => {
                  if (it.id === selected) {
                    updateState(it.id, 'user');
                  }
                }}
              />
            );
          })}
        </div>
        <div>
          Your score:
          {userScore}
          Computer score:
          {computerScore}
        </div>
      </div>
    </div>
  );
}

export default Game

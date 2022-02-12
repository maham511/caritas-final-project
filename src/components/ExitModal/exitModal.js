import React, { useState, useEffect } from 'react'
import Modal from './modal'
import IdleTimer from 'react-idle-timer'

export const useMousePosition = () => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    const setFromEvent = (e) => {
      console.log(e)
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', setFromEvent)

    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  return position
}

const ExitModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [hasFired, setHasFired] = useState(false)

  const handleClose = () => {
    setShowModal(false)
    setHasFired(true)
    console.log('closeModal', showModal)
  }

  const position = useMousePosition()

  useEffect(() => {
    console.log('position', position)
    if (position.y <= 50 && !hasFired) {
      console.log('less than 50')
      setShowModal(true)
    }
  }, [position])

  return (
    <>
      <IdleTimer
        timeout={25000}
        onIdle={() => {
          setShowModal(true)
        }}
      />
      {showModal && !hasFired ? <Modal handleClose={handleClose} /> : null}
    </>
  )
}

export default ExitModal

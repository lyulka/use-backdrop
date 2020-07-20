import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const BackdropContext = createContext()

export function useBackdrop() {
  return useContext(BackdropContext)
}

export function BackdropProvider({
  children,
  zIndex,
  disableDarken,
  backdropSurface
}) {
  const backdropSurfaceStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: disableDarken ? 'initial' : 'rgba(0, 0, 0, 0.5)',
    zIndex: zIndex
  }

  const [backdrop, setBackdrop] = useState({
    open: false,
    render: null
  })

  const closeBackdrop = () => {
    setBackdrop({
      open: false,
      render: null
    })
    document.body.style.overflow = 'initial'
  }

  const displayBackdrop = (nextBackdrop) => {
    setBackdrop({
      open: true,
      render: nextBackdrop
    })
    document.body.style.overflow = 'hidden'
  }

  return (
    <BackdropContext.Provider
      value={{
        closeBackdrop,
        displayBackdrop
      }}
    >
      {children}
      {backdrop.open &&
        (backdropSurface ? (
          backdropSurface(backdrop.render(closeBackdrop))
        ) : (
          <div style={backdropSurfaceStyle}>
            {backdrop.render(closeBackdrop)}
          </div>
        ))}
    </BackdropContext.Provider>
  )
}

BackdropContext.propTypes = {
  children: PropTypes.element,
  disableDarken: PropTypes.bool,
  zIndex: PropTypes.number,
  backdropSurface: PropTypes.func
}

BackdropContext.defaultProps = {
  children: null,
  disableBackdrop: false,
  zIndex: 10,
  backdropSurface: null
}

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
  const defaultBackdropSurface = {
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

  const displayBackdrop = (nextBackdrop) => {
    setBackdrop({
      open: true,
      render: nextBackdrop
    })
  }

  const closeBackdrop = () => {
    setBackdrop({
      open: false,
      render: null
    })
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
          <div style={defaultBackdropSurface}>
            {backdrop.render(closeBackdrop)}
          </div>
        ))}
    </BackdropContext.Provider>
  )
}

BackdropProvider.propTypes = {
  children: PropTypes.element,

  // zIndex of the backdrop surface. Unused if backdropSurface is overridden.
  zIndex: PropTypes.number,

  // If true, backdrop background is transparent.
  disableDarken: PropTypes.bool,

  // A render function that returns a Component that overrides (takes the
  // place of) the default darkened div background.
  //
  // See /example/src/ExampleApp.jsx for proper use.
  backdropSurface: PropTypes.func
}

BackdropProvider.defaultProps = {
  children: null,
  disableBackdrop: false,
  zIndex: 10,
  backdropSurface: null
}

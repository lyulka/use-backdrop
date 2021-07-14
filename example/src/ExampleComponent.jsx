import React from 'react';
import { useBackdrop } from 'use-backdrop';

export default function ExampleComponent() {
  const { displayBackdrop } = useBackdrop();

  const Modal = (closeBackdrop) => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}>
      <div style={{
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'white',
      }}>
        <p>Ten ten yo!</p>
        <button onClick={closeBackdrop}>Close</button>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={() => displayBackdrop(Modal)}>
        Open backdrop
      </button>
    </div>
  )
}
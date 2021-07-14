import React from 'react';
import { useBackdrop } from 'use-backdrop';

export default function ExampleComponent() {
  const { displayBackdrop } = useBackdrop();

  const ModalBackdrop = (closeBackdrop) => (
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
      <button onClick={() => displayBackdrop(ModalBackdrop)}>
        Open backdrop
      </button>
    </div>
  )
}
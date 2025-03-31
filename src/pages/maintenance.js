import React from 'react'

const Maintenance = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      style={{
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '24px',
      }}
    >
      <h1>Site kısa bir süreliğine bakımdadır.</h1>
      <span> - </span>
      <p>The site is under maintenance for a short period of time.</p>
    </div>
  )
}

export default Maintenance

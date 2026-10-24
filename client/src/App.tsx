import { useState } from 'react'
import FormPopup from './Formpopup/FormPopup'
import Button from './components/Button/Button'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button variant="create" onClick={() => setIsPopupOpen(true)}>
        Create
      </Button>

      {isPopupOpen && (
        <FormPopup onClose={() => setIsPopupOpen(false)} />
      )}
    </>
  )
}

export default App

import { useState } from 'react'
import { Button } from './components/Button/Button'
import { FormPopup } from './components/FormPopup/FormPopup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button variant="create" onClick={() => setIsPopupOpen(true)}>
        Create
      </Button>

      {isPopupOpen && (
        <FormPopup
          title="Add Product"
          onClose={() => setIsPopupOpen(false)}
        >
          <label className="form-field">
            <span>Product name</span>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
            />
          </label>

          <label className="form-field">
            <span>Units</span>
            <input type="number" name="units" min="0" placeholder="0" />
          </label>

          <label className="form-field">
            <span>Price</span>
            <input
              type="number"
              name="price"
              min="0"
              step="0.01"
              placeholder="0.00"
            />
          </label>

          <fieldset className="form-field availability">
            <legend>Currently available</legend>
            <label className="radio-option">
              <input type="radio" name="available" value="yes" defaultChecked />
              Yes
            </label>
            <label className="radio-option">
              <input type="radio" name="available" value="no" />
              No
            </label>
          </fieldset>
        </FormPopup>
      )}
    </>
  )
}

export default App

import Button from '../components/Button/Button'
import './FormPopup.css'

type FormPopupProps = {
  onClose: () => void
}

function FormPopup({ onClose }: FormPopupProps) {
  return (
    <div className="form-popup-overlay">
      <div className="form-popup" role="dialog" aria-labelledby="form-popup-title">
        <h2 id="form-popup-title">Add Product</h2>

        <form className="form-popup-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-field">
            <span>Product name</span>
            <input type="text" name="productName" placeholder="Enter product name" />
          </label>

          <label className="form-field">
            <span>Units</span>
            <input type="number" name="units" min="0" placeholder="0" />
          </label>

          <label className="form-field">
            <span>Price</span>
            <input type="number" name="price" min="0" step="0.01" placeholder="0.00" />
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

          <div className="form-actions">
            <Button variant="cancel" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="save">Save</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormPopup

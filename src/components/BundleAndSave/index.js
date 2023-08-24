import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import './index.css'

const BundleAndSave = () => (
  <div className="bg_container">
    <div className="heading_container">
      <hr className="horizontal_line" />
      <h1 className="heading">Bundle & Save</h1>
      <hr className="horizontal_line" />
    </div>
    <ul className="ul_container">
      <li className="pair_container">
        <input type="radio" value="1 pair" className="radio_btn" />
        <div className="desc_container">
          <div className="pair_dkk_container">
            <p className="pair_name">1 Pair</p>
            <p className="dkk">DKK 195.00</p>
          </div>
          <p className="offer">50% OFF</p>
        </div>
      </li>

      <li className="pair_container">
        <input type="radio" value="3 pair" className="radio_btn" />
        <div className="desc_container">
          <div className="pair_dkk_container">
            <p className="pair_name">3 Pair</p>
            <p className="dkk">DKK 528.00</p>
          </div>
          <p className="offer">60% OFF</p>
        </div>
      </li>
    </ul>
    <div className="shipping_details_container">
      <p className="shipping">Free 2 Day Shipping</p>
      <p className="total">
        Total : <span className="dkk_value">DKK 360.00</span>{' '}
      </p>
    </div>
    <button type="submit" className="add_to_cart_btn">
      +Add To Cart
    </button>
    <div className="footer_container">
      <AiOutlineCopyrightCircle />
      <p className="powered_by_pumper">Powered By Pumper</p>
    </div>
  </div>
)

export default BundleAndSave

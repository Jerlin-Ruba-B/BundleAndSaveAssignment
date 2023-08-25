import {Component} from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import './index.css'

class BundleAndSave extends Component {
  state = {dkk: 0}

  updateDkk = event => {
    this.setState({dkk: event.target.value})
  }

  addToCart = event => {
    event.preventDefault()
  }

  render() {
    const {dkk} = this.state

    return (
      <form className="bg_container" onSubmit={this.addToCart}>
        <div className="heading_container">
          <hr className="horizontal_line" />
          <h1 className="heading">Bundle & Save</h1>
          <hr className="horizontal_line" />
        </div>
        <ul className="ul_container">
          <li className="pair_container" htmlFor="pair_1">
            <button className="radio_container_btn" type="button">
              <input
                type="radio"
                value="195.00"
                name="pairs"
                className="radio_btn"
                onChange={this.updateDkk}
                id="pair_1"
                checked
              />
              <div className="desc_container">
                <div className="pair_dkk_container">
                  <p className="pair_name">1 Pair</p>
                  <p className="dkk">DKK 195.00</p>
                </div>
                <p className="offer">50% OFF</p>
              </div>
            </button>
          </li>

          <li className="pair_container" htmlFor="pair_2">
            <button className="radio_container_btn_second_pair" type="button">
              <div className="second_mini_pair_container">
                <input
                  type="radio"
                  value="345.00"
                  name="pairs"
                  className="radio_btn"
                  onChange={this.updateDkk}
                  id="pair_2"
                />
                <div className="desc_container">
                  <div className="pair_dkk_container">
                    <p className="pair_name">2 Pair</p>
                    <p className="dkk">DKK 345.00</p>
                  </div>
                  <div className="popular_container">
                    <p className="popular_desc">Most Popular</p>
                    <p className="offer_2">50% OFF</p>
                  </div>
                </div>
              </div>
              <div className="sub_division_container">
                <p className="sub_headings">Size</p>
                <p className="sub_headings">Color</p>
              </div>
              <div className="sub_division_container">
                <p className="desc_1">#1</p>
                <select className="select_option">
                  <option>S</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <select className="select_option">
                  <option>Color</option>
                </select>
              </div>
              <div className="sub_division_container">
                <p className="desc_1">#2</p>
                <select className="select_option">
                  <option>S</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <select className="select_option">
                  <option>Color</option>
                </select>
              </div>
            </button>
          </li>

          <li className="pair_container" htmlFor="pair_3">
            <button className="radio_container_btn" type="button">
              <input
                type="radio"
                value="528.00"
                className="radio_btn"
                name="pairs"
                onChange={this.updateDkk}
                id="pair_3"
              />
              <div className="desc_container">
                <div className="pair_dkk_container">
                  <p className="pair_name">3 Pair</p>
                  <p className="dkk">DKK 528.00</p>
                </div>
                <p className="offer">60% OFF</p>
              </div>
            </button>
          </li>
        </ul>
        <div className="shipping_details_container">
          <p className="shipping">Free 2 Day Shipping</p>
          <p className="total">
            Total : <span className="dkk_value">{`DKK :${dkk}`}</span>{' '}
          </p>
        </div>
        <button type="submit" className="add_to_cart_btn">
          +Add To Cart
        </button>
        <div className="footer_container">
          <AiOutlineCopyrightCircle />
          <p className="powered_by_pumper">Powered By Pumper</p>
        </div>
      </form>
    )
  }
}

export default BundleAndSave

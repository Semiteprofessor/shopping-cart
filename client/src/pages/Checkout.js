import './Checkout.css'
  
  const Checkout = () => {


    return (

        <div className="app-container">
          <div className="row">
            <div className="col">
              <div className="item-container">
                <div className="item-image">
                    <img src="https://i.postimg.cc/g0Ht4FYg/1-red-women-bag-png-image.png"/>
                    <div className="item-details">
                    <h3 className="item-name"> Instax Mini 90 Neo Classic </h3>
                    <h2 className="item-price"> &#8358; 1440.99 </h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="col no-gutters">
                <div className="checkout">
                <div className="checkout-container">
                    <h3 className="heading-3">Credit card checkout</h3>
                    <div className="input">
                        <label>Cardholder's Name</label>
                        <div className="input-field">
                            <input type="text" name="name" />
                            <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                        </div>
                    </div>
                    <div className="input">
                        <label>Card Number</label>
                        <div className="input-field">
                            <input type="number" name="card_number" />
                            <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="input">
                        <label>Expiration Date</label>
                        <div className="input-field">
                            <input type="month" name="exp_date" />
                            <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input">
                        <label>CVV</label>
                        <div className="input-field">
                            <input type="number" name="cvv" />
                            <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <button className="checkout-btn" type="button">Place order</button>
                </div>
                </div>
                
            </div>
          </div>
         </div>
  )};
export default Checkout
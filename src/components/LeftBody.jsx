import React from 'react'

const LeftBody = () => {
  return (
    <div className='leftBody-container'>
        <h4>Filters By:</h4>

        <div className="options-container">
            <div className="option-top-container">
                <h4>Gender</h4>
                <img src="icons/arrow-down.svg" alt="more" />
            </div>
            <div className="option-bottom-container">
                <div className="checkbox-container">
                    <input type="checkbox" name="men" id="men" />
                    <label htmlFor="men">Men</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="women" id="women" />
                    <label htmlFor="men">Women</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="children" id="children" />
                    <label htmlFor="men">Children</label>
                </div>
            </div>
        </div>

        <div className="options-container">
            <div className="option-top-container">
                <h4>Category</h4>
                <img src="icons/arrow-down.svg" alt="more" />
            </div>
            <div className="option-bottom-container">
                <div className="checkbox-container">
                    <input type="checkbox" name="shirt" id="shirt" />
                    <label htmlFor="shirt">Shirt</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="pantTrousers" id="pantTrousers" />
                    <label htmlFor="pantTrousers">Pant Trousers</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="hoodie" id="hoodie" />
                    <label htmlFor="hoodie">Hoodie</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="hat" id="hat" />
                    <label htmlFor="hat">Hat</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="sweatshirt" id="sweatshirt" />
                    <label htmlFor="sweatshirt">Sweatshirt</label>
                </div>
                <div className="checkbox-container">
                    <input type="checkbox" name="jacket" id="jacket" />
                    <label htmlFor="jacket">Jacket</label>
                </div>
            </div>
        </div>

        <div className="options-container">
            <div className="option-top-container">
                <h4>Size</h4>
                <img src="icons/arrow-down.svg" alt="more" />
            </div>
            <div className="option-bottom-container size-option-container">
                <p className='size-option'>XXS</p>
                <p className='size-option'>XS</p>
                <p className='size-option'>S</p>
                <p className='size-option'>M</p>
                <p className='size-option'>L</p>
                <p className='size-option size-option-active'>XL</p>
                <p className='size-option'>XXL</p>
            </div>
        </div>

        <div className="options-container">
            <div className="option-top-container">
                <h4>Colour</h4>
                <img src="icons/arrow-down.svg" alt="more" />
            </div>
            <div className="option-bottom-container">
                <div className="colour-container">
                    <div className="colour colour01"></div>
                    <div className="colour colour02"></div>
                    <div className="colour colour03"></div>
                    <div className="colour colour04"></div>
                    <div className="colour colour05"></div>
                    <div className="colour colour06 colour-active01 colour-active02"></div>
                </div>
            </div>
        </div>

        <div className="options-container">
            <div className="option-top-container">
                <h4>Price</h4>
                <img src="icons/arrow-down.svg" alt="more" />
            </div>
            <div className="option-bottom-container price-slider">
                <div className="fromTo-container">
                    <div className="from-container">
                        <p>From</p>
                        <input type="text" name="from" id="from" placeholder='$50'/>
                    </div>

                    <img src="icons/hori-line.svg" alt="divider" />

                    <div className="to-container">
                        <p>To</p>
                        <input type="text" name="to" id="to" placeholder='$2000'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="options-container">

        </div>
    </div>
  )
}

export default LeftBody
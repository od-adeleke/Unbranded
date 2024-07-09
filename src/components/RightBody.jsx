import React from "react";
// import Card from './Card';
import "../styles/rightBody.css";

const RightBody = () => {
  const shelfData = [
    {
      title: "Unbranded Puffer Jacket High Quality",
      price: 300,
      like: "icons/heart02.svg",
      photoName: "images/Image-1.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#CCCCCC",
      colour06: "#272727",
    },
    {
      title: "Unbranded Summer Jacket Hoodie",
      price: 235,
      like: "icons/heart.svg",
      photoName: "images/image 2.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Turtle-Neck",
      price: 97,
      like: "icons/heart02.svg",
      photoName: "images/image 3.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#000",
      colour06: "#AA9F99",
    },
    {
      title: "Unbranded Shaffy Jacket with Hoodie",
      price: 123,
      like: "icons/heart02.svg",
      photoName: "images/image 4.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Summer Jacket Hoodie",
      price: 235,
      like: "icons/heart02.svg",
      photoName: "images/image 5.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Puffer Jacket with Hoodie",
      price: 200,
      like: "icons/heart02.svg",
      photoName: "images/image 6.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#000",
      colour06: "#AA9F99",
    },
    {
      title: "Unbranded Threadmill Jacket Comfy",
      price: 112,
      like: "icons/heart02.svg",
      photoName: "images/image 7.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#CCCCCC",
      colour06: "#272727",
    },
    {
      title: "Unbranded Zip Up Texture Style",
      price: 99,
      like: "icons/heart02.svg",
      photoName: "images/image 8.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#CCCCCC",
      colour06: "#272727",
    },
    {
      title: "Unbranded Orange Zip Down Flat Style",
      price: 99,
      like: "icons/heart02.svg",
      photoName: "images/image 9.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded x Zara Collab Full Kit Coat",
      price: 766,
      like: "icons/heart02.svg",
      photoName: "images/image 10.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#6E767E",
    },
    {
      title: "Unbranded Open Neck Comfy Jacket",
      price: 237,
      like: "icons/heart.svg",
      photoName: "images/image 11.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#AA9F99",
      colour05: "#000",
      colour06: "#000",
    },
    {
      title: "Unbranded Puffer Jacket High Quality",
      price: 300,
      like: "icons/heart.svg",
      photoName: "images/image 12.png",
      colour01: "#2196F3",
      colour02: "#E88A00",
      colour03: "#fff",
      colour04: "#868686",
      colour05: "#CCCCCC",
      colour06: "#272727",
    },
  ]
  // const shelf = shelfData.length
  return (
    <div className="rightBody-container">
      <section className="cards-container">
        <div className="card-container">
          <div className="card">
            <img src="images/Image-1.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[0].title}</p>
                <p>${shelfData[0].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 2.png" alt="product 02" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[1].title}</p>
                <p>${shelfData[1].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 3.png" alt="product 03" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[2].title}</p>
                <p>${shelfData[2].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 4.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[3].title}</p>
                <p>${shelfData[3].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 5.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[4].title}</p>
                <p>${shelfData[4].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 6.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[5].title}</p>
                <p>${shelfData[5].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 7.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[6].title}</p>
                <p>${shelfData[6].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 8.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[7].title}</p>
                <p>${shelfData[7].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 9.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[8].title}</p>
                <p>${shelfData[8].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 10.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[9].title}</p>
                <p>${shelfData[9].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 11.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[10].title}</p>
                <p>${shelfData[10].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="images/Image 12.png" alt="product 01" />
            <div className="card-info-container">
              <div className="card-info">
                <p>{shelfData[11].title}</p>
                <p>${shelfData[11].price}</p>
              </div>
              <div className="card-colour">
                <div className="color colour01"></div>
                <div className="color colour02"></div>
                <div className="color colour03"></div>
                <div className="color colour04"></div>
                <div className="color colour05"></div>
                <div className="color colour06"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="navbar-container">
        <p className="goto-page1">
          Go to Page 1
        </p>

        <img src="icons/arrow-left.svg" alt="back" />

        <div className="next-page">
          <p>Next Page</p>
          <img src="icons/arrow-right.svg" alt="next" />
        </div>

        <div className="page-container">
          <div className="page">
            <p>Page</p>
            <input type="text" name="page" id="page" placeholder="20" />
          </div>

          <p>of 100</p>
        </div>
      </section>

      <div className="page-help">
        <p>Can't find what you are looking for? Use our filter option</p>
      </div>
    </div>
  );
};

export default RightBody;

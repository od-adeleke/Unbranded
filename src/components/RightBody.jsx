import React from "react";
import Card from './Card';
import '../styles/rightBody.css'

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
      ];
      const shelf = shelfData.length
  return (
    
    <div className='rightBody-container'>
        <section className="cards-container">
        {shelf > 0 ? (
            <ul className="card-list">
              {shelfData.map((cardObj) => (
                <Card cardObj={cardObj} key={cardObj.title} />
              ))}
            </ul>
        ) : null}
        </section>
    </div>
  )
}

export default RightBody
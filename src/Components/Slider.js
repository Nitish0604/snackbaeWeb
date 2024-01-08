import React, { useEffect, useState } from "react";
import rectbig from "../assets/rect1.png";
import rect3 from "../assets/rect3.png";
const Slider = () => {
  const items = [
    {
      image: `${rectbig}`,
    },
    {
      image: `${rectbig}`,
    },
    {
      image: `${rectbig}`,
    },
    {
      image: `${rectbig}`,
    },
    {
      image: `${rectbig}`,
    },
    {
      image: `${rectbig}`,
    },
  ];

  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };

    document.getElementById("next").addEventListener("click", handleNextClick);
    document.getElementById("prev").addEventListener("click", handlePrevClick);

    return () => {
      document
        .getElementById("next")
        .removeEventListener("click", handleNextClick);
      document
        .getElementById("prev")
        .removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className=" flex mx-auto items-center  justify-evenly container1 w-[98.9vw] transform translate-x-[0.002%] translate-y-[-40%] h-[85vh] mt-36 ">
      <div id="slide">
        {/* Your item components go here */}
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rect3})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rectbig})` }}>
          <div className="content">
            <div className="name">EXPLORE</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${rect3})` }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button id="prev">prev</button>
        <button id="next">next</button>
      </div>
    </div>


  );
};

export default Slider;
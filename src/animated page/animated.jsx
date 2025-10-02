import React from "react";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.jpg";
import image4 from "../images/images 4.jpg";
import image5 from "../images/image 5.jpg";
import image6 from "../images/image 6.png";
import image7 from "../images/image 7.png";
import image8 from "../images/image 8.jpg";
import image9 from "../images/image 9.png";
import image10 from "../images/image 10.png";

function AnimatedPage(){
    return(
    <>
        <div className="banner">
            <div className="slider" style={{ "--quantity": 10 }}>
                <div className="items" style={{ "--position": 2 }}><img src={image1} alt=""/></div>
                <div className="items" style={{ "--position": 3 }}><img src={image2} alt=""/></div>
                <div className="items" style={{ "--position": 1 }}><img src={image3} alt=""/></div>
                <div className="items" style={{ "--position": 4 }}><img src={image4} alt=""/></div>
                <div className="items" style={{ "--position": 5 }}><img src={image5} alt=""/></div>
                <div className="items" style={{ "--position": 6 }}><img src={image6} alt=""/></div>
                <div className="items" style={{ "--position": 7 }}><img src={image7} alt=""/></div>
                <div className="items" style={{ "--position": 8 }}><img src={image8} alt=""/></div>
                <div className="items" style={{ "--position": 9 }}><img src={image9} alt=""/></div>
                <div className="items" style={{ "--position": 10 }}><img src={image10} alt=""/></div>
            </div>
            <div className="content" data-content="CSS ONLY">
                <h1>
                    CSS ONLY
                </h1>
                <div className="author">
                    <h2>Harshit</h2>
                    <p><b>Web Design</b></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora provident dignissimos tenetur? Nisi, alias?</p>
                </div>
                <div className="model"></div>
            </div>
        </div>
    </>)
}

export default AnimatedPage;
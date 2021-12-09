import React from "react";
import "./Card.css";
import imagem from "../../assets/perfil.jpg";
const Card = () => {
    console.log("Ola ");
    return (
        <div className="container">
            <div className="slide-container">
                <div className="slide">
                    <i className="fas fa-quote-right icon"></i>
                    <div className="user">
                        <img src={imagem} alt="" />
                        <div className="user-info">
                            <h3>Gustavo Lucas</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p className="text">
                        Lorem Lorem ea excepteur anim adipisicing duis non
                        voluptate eu irure aliqua et minim mollit. Laboris
                        laborum ad consequat labore cillum quis veniam anim
                        eiusmod. Fugiat ea dolore aute fugiat cupidatat Lorem id
                        amet mollit eu aute. Culpa magna ad qui ut mollit. Sunt
                        consequat aute occaecat ea esse dolor sunt. Nostrud eu
                        eu id do do duis ad ipsum cupidatat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;

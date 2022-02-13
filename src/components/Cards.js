import React from "react";
import reactDom from "react-dom";

function Cards(props){
    return(
        <div className="container_cards">
            <section className="card title_1">
                <section>
                <h1>{props.titleCard}</h1>
                <p className="abstract">{props.abstract}</p>
                </section>
            </section>
            <section className="card">
            <figure><img src={props.img1}/></figure>
            </section>
            <section className="card">
            <figure><img src={props.img2}/></figure>
            </section>
            <section className="card">
            <figure><img src={props.img3}/></figure>
            </section>
        </div>


    )
}
export default Cards;
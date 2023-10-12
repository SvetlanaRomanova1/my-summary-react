import React from "react";
import "./style.css";
import Experience from "../experience";
import Courses from "../courses";
import About from "../about";

function Information() {
    return (
        <div className="info">
            <h2 className="info-title">Романова Светлана Николаевна</h2>
            <h3 className="info-subtitle">FRONTEND-РАЗРАБОТЧИК</h3>
            <ul className="info-links">
                <li className="info-link">Москва</li>
                <li className="info-link">Возраст: 27 лет</li>
                <li className="info-link">Гражданство: РФ</li>
                <li className="info-link">Метро: Автозаводская, Кожуховская, Коломенская</li>
            </ul>
            <Experience/>
            <Courses />
            <About/>
        </div>
    )
}

export default Information;

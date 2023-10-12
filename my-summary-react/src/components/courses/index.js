import React from "react";
import "./style.css";
import logoCourses from "../../image/course.png";
import imageDiploma from "../../image/d.png";




function Courses() {
    return (
        <>
            <div className="courses">
                <h3 className="courses-prof">Онлайн курсы</h3>
                <span className="courses-line"/>
                <span>
                  <img className="courses-icon" src={logoCourses} alt=""/>
            </span>
            </div>
            <div className="courses-wrapper">
                09.2022<br/>
                12.2022
                <div>
                    <h3 className="courses-title">Курс по Тестированию ПО, Яндекс Практикум. </h3>
                    <p className="courses-subtitle">Диплом:</p>
                    <a
                        href="https://drive.google.com/file/d/1nw0ljcw7T777WF3kom9qawwurD1CL0_K/view?usp=share_link"
                        target="_blank"
                    >
                        <img className="course-diploma-image" src={imageDiploma} alt="Мой диплом"/>
                    </a>
                </div>
            </div>
            <div className="courses-wrapper">
                03.2023<br/>
                по н.в
                    <h3 className="courses-title"> Курс Веб-разработчик, Яндекс Практикум.</h3>
            </div>
            <div className="courses-wrapper">
                01.2023<br/>
                03.2023
                <h3 className="courses-title">Udemy, Курс JavaScript.</h3>
            </div>
        </>

    )
}

export default Courses;
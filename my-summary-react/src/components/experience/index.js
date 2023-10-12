import React from "react";
import "./style.css";
import logoExperience from "../../image/business.svg";

const experienceDetails = [
    "Создание и поддержка тест-кейсов",
    "Выполнение ручного тестирования",
    "Регистрация багов в баг-трекере Jira",
    "Тестирование в VMware на Windows",
    "Взаимодействие с командой разработки"
];

function Experience(){
    return(
        <>
            <div className='experience'>
                <h3 className="experience-work">Опыт работы</h3>
                <span className="experience-line"/>
                <span className="experience-icon">
                        <img src={logoExperience} alt="Чемоданчик"/>
                </span>
            </div>
            <div className="experience-wrapper">
                09.2022<br/>
                12.2022
                <h3 className="experience-title">Младший тестировщик, компания: ИнфоТеКС Москва</h3>
            </div>
            <h3 className="experience-subtitle">Работа на проекте ЭДО электронная подпись.</h3>
            <ul className="experience-links">
                {experienceDetails.map((detail, index)=>(
                    <li key={index} className="experience-link">
                        {detail}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Experience;
import React from "react";
import imageAvatar from '../../image/фото.jpeg';
import './style.css';
import mailIcon from "../../image/mail.svg"
import phoneIcon from "../../image/phone.svg"
import telegramIcon from "../../image/telegram.svg"
import ImageZoom from "../image-zoom";

const skills = ["HTML", "CSS", "JavaScript", "Flexbox-верстка", "Grid-верстка", "Медиазапросы", "Модули", "React"];

function Profile() {
    return (
        <div className="profile">
            <div className="profile-avatar-container">

                <ImageZoom src={imageAvatar} alt="фото"/>
            </div>
            <div className="profile-contacts">
                <h2 className="profile-title">Контакты</h2>
                <ul className="profile-links">
                    <li className="profile-link">
                        <img className="profile-icon" src={phoneIcon} alt="phone"/>
                        8-903-505-66-29
                    </li>
                    <li className="profile-link">
                        <img className="profile-icon" src={mailIcon} alt="mail"/>
                        romanova.sveta1996@mail.ru
                    </li>
                    <li className="profile-link">
                        <img className="profile-icon" src={telegramIcon} alt="telegram"/>
                        @Sve4ta
                    </li>
                </ul>
                <h2 className="profile-title">Навыки</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index} className="profile-link-skills">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profile;

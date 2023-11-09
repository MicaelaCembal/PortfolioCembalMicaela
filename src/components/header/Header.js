import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { useFavorites } from "../../context/FavoritesContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  blogSection,
  talkSection,
  openSource,
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const { favoriteCount } = useFavorites();
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Aptitudes</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#proyectosDestacados">Proyectos Destacados</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#creaciones">Mis creaciones</a>
            </li>
          )}
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#favorites">
              <span className="badge">{favoriteCount}</span>
            </a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

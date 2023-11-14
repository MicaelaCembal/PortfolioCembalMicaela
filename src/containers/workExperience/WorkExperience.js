import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useFavorites } from "../../context/FavoritesContext";
import { useProyecto } from "../../context/ProyectosContext"; 

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { proyectos } = useProyecto();  

  const isExperienceInFavorites = (experience) => {
    return favorites.some((item) => item.company === experience.company);
  };

  return (
    <div id="creaciones">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Mis creaciones</h1>
            <div className="experience-cards-div">
              {proyectos.map((card, i) => { 
                const isFavorite = isExperienceInFavorites(card);

                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      id: card.id,
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                    }}
                  >
                    <div className="favorite-icon">
                      {isFavorite ? (
                        <span
                          className="material-icons"
                          onClick={() => removeFromFavorites(card)}
                        >
                          favorite
                        </span>
                      ) : (
                        <span
                          className="material-icons"
                          onClick={() => addToFavorites(card)}
                        >
                          favorite_border
                        </span>
                      )}
                    </div>
                  </ExperienceCard>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

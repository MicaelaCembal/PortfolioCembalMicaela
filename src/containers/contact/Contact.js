import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  // Crea la función onSubmit
  const onSubmit = (data) => {
    // Procesar los datos del formulario
  };

  // Registra los campos del formulario
  const { register, handleSubmit } = useForm();

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
          </div>
          <div className="contact-form-container">
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", { required: true })}
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                />
                <textarea
                  placeholder="Mensaje"
                  {...register("message", { required: true })}
                />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
import React from "react";
import GenericButton from "../components/Button";
import title from "../assets/Minecraft-java-logo.png";

const subButtons = ["Lang", "Options...", "Quit Game", "Skin"];

const Start = () => {
  const mainButtons = ["Singleplayer", "Multiplayer", "Minecraft Realms"];

  return (
    <>
      <img src={title} alt="logo" />
      <div>
        <MainButtons buttons={mainButtons} />
      </div>
      <div>
        <SubButtons buttons={subButtons} />
      </div>
    </>
  );
};

const MainButtons = ({ buttons }) =>
  buttons.map((item) => (
    <div key={`${item}BTN`}>
      <GenericButton onClick={switchScene} text={item}  />
    </div>
  ));

const SubButtons = ({ buttons }) =>
  buttons.map((item) => (
    <GenericButton onClick={switchScene} text={item} key={`${item}BTN`} />
  ));

const switchScene = () => {
  console.log("switching scene");
};

export default Start;

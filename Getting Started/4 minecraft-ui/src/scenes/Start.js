import React, { useContext } from "react";
import { LargeButton, SmallButton } from "../components/Button";
import title from "../assets/Minecraft-java-logo.png";
import { SceneContext } from "../contexts/SceneContext";

const Start = () => {
  const mainButtons = ["Singleplayer", "Multiplayer", "Minecraft Realms"];
  const subButtons = ["Lang", "Options...", "Quit Game", "Skin"];

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

const MainButtons = (props) => {
  const context = useContext(SceneContext);

  return props.buttons.map((item) => (
    <div key={`${item}BTN`}>
      <LargeButton onClick={() => context.setScene(`${item}`)} text={item} />
    </div>
  ));
};

const SubButtons = (props) => {
  const context = useContext(SceneContext);

  return props.buttons.map((item) => (
    <LargeButton
      onClick={() => context.setScene(`${item}`)}
      text={item}
      key={`${item}BTN`}
    />
  ));
};

export default Start;

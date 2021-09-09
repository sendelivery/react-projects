import React, { useContext } from "react";
import { LargeButton, SmallButton } from "../components/Button";
import title from "../assets/Minecraft-java-logo.png";
import { SceneContext } from "../contexts/SceneContext";

const Start = () => {
  // Destructuring from a function that gives other functions and arrays makes the whole syntax a bit weird.
  // Below works, but I can't figure out how to ignore currScene and setScene.
  // Alternatively I can just use: const c = useContext(SceneContext); and access everything through c.
  const {
    currScene,
    setScene,
    sceneList: { ...sceneList },
  } = useContext(SceneContext);

  const mainButtons = [
    { text: "Singleplayer", scene: sceneList.SINGLEPLAYER },
    { text: "Multiplayer", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Minecraft Realms", scene: sceneList.NOT_IMPLEMENTED },
  ];
  const subButtons = [
    { text: "Lang", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Options...", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Quit Game", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Skin", scene: sceneList.NOT_IMPLEMENTED },
  ];

  return (
    <>
      {/*<img src={title} alt="logo" />*/}
      <div>
        <MainButtons buttons={mainButtons} />
      </div>
      <div>
        <SubButtons buttons={subButtons} />
      </div>
    </>
  );
};

const MainButtons = ({ buttons }) => {
  const {
    currScene,
    setScene,
    sceneList: { ...sceneList },
  } = useContext(SceneContext);

  return buttons.map((item) => (
    <div key={`${item.text}`}>
      <LargeButton onClick={() => setScene(item.scene)} text={item.text} />
    </div>
  ));
};

const SubButtons = ({ buttons }) => {
  const {
    currScene,
    setScene,
    sceneList: { ...sceneList },
  } = useContext(SceneContext);

  return buttons.map((item) => (
    <LargeButton
      onClick={() => setScene(item.scene)}
      text={item.text}
      key={`${item.text}`}
    />
  ));
};

export default Start;

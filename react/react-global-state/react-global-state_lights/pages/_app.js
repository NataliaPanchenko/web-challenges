import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { uid } from "uid";
import { useState } from "react";

const initialLights = [
  {
    name: "Living Room",
    isOn: false,
    id: uid(),
  },
  {
    name: "Kitchen",
    isOn: false,
    id: uid(),
  },
  {
    name: "Bedroom",
    isOn: false,
    id: uid(),
  },
  {
    name: "Bathroom",
    isOn: false,
    id: uid(),
  },
  {
    name: "Garage",
    isOn: false,
    id: uid(),
  },
  {
    name: "Porch",
    isOn: false,
    id: uid(),
  },
  {
    name: "Garden",
    isOn: false,
    id: uid(),
  },
  {
    name: "Office",
    isOn: false,
    id: uid(),
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function toggleLight(id) {
    const updatedLights = lights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      }
      return light;
    });
    setLights(updatedLights);
  }

  const litRooms = lights.filter((light) => light.isOn).length;
  const isDimmed = lights.every((light) => !light.isOn);

  function handleSetAllLights(isOn) {
    const updatedLights = lights.map((light) => ({
      ...light,
      isOn: isOn,
    }));
    setLights(updatedLights);
  }

  function setAllLightsToOn() {
    handleSetAllLights(true);
  }

  function setAllLightsToOff() {
    handleSetAllLights(false);
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={toggleLight}
        litRooms={litRooms}
        onAllOn={setAllLightsToOn}
        onAllOff={setAllLightsToOff}
      />
    </Layout>
  );
}

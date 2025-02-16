import { useState } from "react";
import "./App.css";

const palettes = [
  {
    id: 1,
    background: "#ffffff",
    main: "#17191f",
    theme: "",
    light: "#e3e7eb",
    text: "#737373",
    tags: ["jasny", "delikatny", "monochromatyczny"],
  },
  {
    id: 2,
    background: "#000000",
    main: "#f2f3f4",
    theme: "",
    light: "#4b4b4b",
    text: "#d1d1d1",
    tags: ["ciemny", "intensywny", "monochromatyczny"],
  },
  {
    id: 3,
    background: "#EDF4F2",
    main: "#31473A",
    theme: "",
    light: "#B7C7BE",
    text: "#506A5B",
    tags: ["naturalny", "stonowany", "zielony"],
  },
  {
    id: 4,
    background: "#fdfcfa",
    main: "#212529",
    theme: "#ac8e68",
    light: "#f5ece3",
    text: "#595959",
    tags: ["klasyczny", "literacki", "papierowa tekstura"],
  },
  {
    id: 5,
    background: "#fbfaf5",
    main: "#151515",
    theme: "#a76b45",
    light: "#dcc5b4",
    text: "#6b6b6b",
    tags: ["retro", "vintage", "stara książka"],
  },
  {
    id: 6,
    background: "#FBEAEB",
    main: "#2F3C7E",
    theme: "",
    light: "#D8D5E3",
    text: "#55556B",
    tags: ["elegancki", "nowoczesny", "niebieski"],
  },
  {
    id: 7,
    background: "#E7E8D1",
    main: "#B85042",
    theme: "#A7BEAE",
    light: "#F4F4EC",
    text: "#6B423A",
    tags: ["ciepły", "przyjazny", "subtelne kontrasty"],
  },
  {
    id: 8,
    background: "#1E1E1E",
    main: "#D4C7BE",
    theme: "",
    light: "#8A817C",
    text: "#B3A8A0",
    tags: ["subtelny", "ciepły", "monochromatyczny"],
  },
  {
    id: 9,
    background: "#0D1321",
    main: "#E09F3E",
    theme: "#1F4172",
    light: "#1F4172",
    text: "#B2C8DF",
    tags: ["nowoczesny", "kontrastowy", "niebiesko-pomarańczowy"],
  },
];

export default function App() {
  const [flipped, setFlipped] = useState("");
  function handleToggleFlipped(id) {
    setFlipped((prevId) => (prevId === id ? "" : id));
  }

  return (
    <section className="app">
      {palettes.map((palette) => (
        <Preview
          palette={palette}
          flipped={flipped}
          handleToggleFlipped={handleToggleFlipped}
        />
      ))}
    </section>
  );
}

function Preview({ palette, flipped, handleToggleFlipped }) {
  if (flipped === palette.id)
    return (
      <div className="hex-grid" onClick={() => handleToggleFlipped(palette.id)}>
        <div className="color" style={{ background: palette.background }}>
          <p>{palette.background}</p>
        </div>
        <div className="color" style={{ background: palette.main }}>
          <p>{palette.main}</p>
        </div>
        {palette.theme && (
          <div className="color" style={{ background: palette.theme }}>
            <p>{palette.theme}</p>
          </div>
        )}
        <div className="color" style={{ background: palette.light }}>
          <p>{palette.light}</p>
        </div>
        <div className="color" style={{ background: palette.text }}>
          <p>{palette.text}</p>
        </div>
      </div>
    );

  return (
    <div
      className="preview"
      style={{ background: palette.background }}
      onClick={() => handleToggleFlipped(palette.id)}
    >
      <h2 style={{ color: palette.main }}>Paleta #{palette.id}</h2>
      <p style={{ color: palette.text }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        ante purus, sit amet porta nunc egestas sit amet. Cras non luctus lacus.
        Sed sodales justo id lacus consequat, non elementum urna egestas. Sed
        tortor odio, varius sed odio a, lacinia efficitur tortor. Donec dictum
        iaculis sapien, eget porttitor mi.
      </p>
      <div className="btn-wrapper">
        <button
          className="btn"
          style={{
            background: palette.theme || palette.main,
            color: palette.background,
          }}
        >
          Primary
        </button>
        <button
          className="btn secondary"
          style={{ borderColor: palette.light, color: palette.text }}
        >
          Secondary
        </button>
      </div>
    </div>
  );
}

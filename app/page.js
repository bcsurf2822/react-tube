import Image from "next/image";
import styles from "./page.module.css";
import { SearchBar } from "./components/searchBar";
import Apple from "./components/random";
import { RealFruit, FruitStand } from "./components/random";
//Role: The Page component will be the topmost (parent) component that renders all other components.
//State: It will contain the main state object, including a list of videos and the selectedVideo (the currently displayed main video).

export default function Home() {
  return (
    <div>
      <h1>Default Function</h1>
      <Apple />
      <br />
      <br />
      <h1>Named Functions</h1>
      <RealFruit />
      <FruitStand />
    </div>
  );
}

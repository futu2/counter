import logo from "./logo.svg";
import { createSignal } from "solid-js";
import generateIkeaLikeName from "ikea-chinesename-generator";
import { getName } from "random_chinese_fantasy_names";

const [charInfo, setCharInfo] = createSignal({});
const ikeaName = generateIkeaLikeName();
const gg = getName(1, { isFemale: true, style: "double", familyName: " " });

export default () => {
  return (
    <>
      <button class="btn btn-primary">
        Learn Solid {ikeaName} {gg}
      </button>
    </>
  );
};

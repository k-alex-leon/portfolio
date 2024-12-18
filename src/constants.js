import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// using in navcontact
export const CONTACT_ICONS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/kevin-león-242891217/",
    icon: FaLinkedin(),
  },
  {
    name: "Github",
    link: "https://github.com/k-alex-leon",
    icon: FaGithubSquare(),
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/k-alex-leon/",
    icon: SiLeetcode(),
  },
];

// using in tools
export const MODELS = [
  {
    name: "Blender",
    scale: 0.001,
    position: [3, -2, -1],
    rotation: [0, 0.5, -0.3],
    source: "./models/blender.glb",
  },
  {
    name: "CSS",
    scale: 0.003,
    position: [2, 0, 2],
    rotation: [0, 0, 0.4],
    source: "./models/css.glb",
  },
  {
    name: "THREE JS",
    scale: 0.6,
    position: [-2.5, 1, 0],
    rotation: [0.3, 0, 0],
    source: "./models/cube.glb",
  },
  {
    name: "Html",
    scale: 0.003,
    position: [-1.7, -1.5, 1.8],
    rotation: [0, 0.5, 0],
    source: "./models/html.glb",
  },
  {
    name: "Javascript",
    scale: 0.13,
    rotation: [-Math.PI / 2, -0.5, Math.PI],
    position: [0, 2.5, 1],
    source: "./models/javascript.glb",
  },
  {
    name: "React",
    scale: 0.2,
    position: [0, -2.8, 0.5],
    rotation: [-0.2, 0.1, 0.3],
    source: "./models/react.glb",
  },
];

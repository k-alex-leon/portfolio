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

// using in projects
export const PROJECTS_MODELS = [
  {
    source: "./rubik.glb",
    scale: 6,
    name: "Play Rubik's Cube",
    position: [2.3, 0.2, 0],
    rotation: [0.4, 1, 0],
    link: "https://k-alex-leon.github.io/3d-react-rubikcube/",
  },
  {
    source: "./tetris.glb",
    scale: 12,
    name: "Play Tetris",
    position: [2, 2, 0],
    rotation: [1.3, 0, 0],
    link: "https://k-alex-leon.github.io/tetris-react-project/",
  },
  {
    source: "./plane.glb",
    scale: 1.5,
    name: "Fly a Plane",
    position: [2, -2, 0],
    rotation: [0, 0.4, 0],
    link: "https://k-alex-leon.github.io/plane-game-react-project/",
  },
];

// using in <Information />
export const INFO = [
  {
    title: "Tools",
    description: `Although I use these tools most of the time, I am always willing to learn new things. As you can see, I
        really like interactive pages.`,
  },
  {
    title: "Projects",
    description: `These are some of my favorite projects. As a hobby I like to develop minigames, squeezing different development tools.`,
  },
  {
    title: "Info",
    description: `If you want to know more about me, you can contact me through my social networks. I will be happy to answer your questions.`,
  },
];

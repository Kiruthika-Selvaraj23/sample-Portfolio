import { motion } from "framer-motion";
import HTMLImg from '../accets/HTML.png'
import CSSImg from '../accets/CSS.png'
import JavaScriptImg from '../accets/Javascript.png'
import ReactImg from '../accets/React.png'
import Tailwind from '../accets/Tailwind.png'
import Bootstrap from '../accets/Bootstrap.png'
import Node from '../accets/Node.png'
import Database from "../accets/Database.png"
import Express from "../accets/Express.png"


export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, title, hueA, hueB], i) => (
                <Card
                    i={i}
                    emoji={emoji}
                    title={title}
                    hueA={hueA}
                    hueB={hueB}
                    key={`${title}-${i}`}
                />
            ))}
        </div>
    );
}

function Card({ emoji, title, hueA, hueB, i }) {
    const background = "linear-gradient(135deg, #EFF6FF, #2563EB)"; 
    return (
        <motion.div
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants}>
                <img src={emoji} alt={title} style={{ width: 100, marginBottom: 10 }} />
                <h3 style={{ margin: 0, fontSize: 20, fontWeight:"bold", color: "#262AA3"}}>{title}</h3>
            </motion.div>
        </motion.div>
    );
}
// const cardVariants = {
//     offscreen: { y: 300 },
//     onscreen: { y: 50, rotate: -10, transition: { type: "spring", bounce: 0.4, duration: 0.8 } },
// };

const cardVariants = {
    offscreen: { y: 120 },   // smaller entry distance
    onscreen: {
        y: 0,                // remove extra downward push
        rotate: -10,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    },
};

// const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = { margin: "100px auto", maxWidth: 500, paddingBottom: 100, width: "100%" };

const cardContainer = { overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", paddingTop: 20, marginBottom: -120 };
const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: "scaleX(0.8)",   // 👈 shrinks width only
    transformOrigin: "center",
    clipPath: "polygon(0% 66%, 100% 48%, 100% 100%, 0% 100%)"
}; const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const card = {
    fontSize: isMobile ? 100 : 164,
    width: isMobile ? 220 : 300,
    height: isMobile ? 300 : 430,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#FCFCFC",
};
const food = [
    [HTMLImg, "HTML", 340, 10],
    [CSSImg, "CSS", 20, 40],
    [JavaScriptImg, "JavaScript", 60, 90],
    [ReactImg, "React", 80, 120],
    [Tailwind, "Tailwind", 100, 140],
    [Bootstrap, "Bootstrap", 205, 245],
    [Node, "Node.js", 260, 290],
    [Database, "MongoDB", 290, 320],
    [Express, "Express JS", 310, 340]
];
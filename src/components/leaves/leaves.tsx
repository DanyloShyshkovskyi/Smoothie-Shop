// @ts-ignore
import Parallax from "parallax-js";
import leaf01 from "../../assets/img/leaf/leaf01.png"
import leaf02 from "../../assets/img/leaf/leaf02.png"
import leaf03 from "../../assets/img/leaf/leaf03.png"
import leaf04 from "../../assets/img/leaf/leaf04.png"
import leaf05 from "../../assets/img/leaf/leaf05.png"
import {LeavesScene, LeavesStyle} from "./leaves.style";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const leaf = [
    {
        src: leaf01,
        alt: "leaf01",
        className: 'leaf leaf--01',
        dataDepth: 0.7
    },
    {
        src: leaf02,
        alt: "leaf02",
        className: 'leaf leaf--02',
        dataDepth: 0.4
    },
    {
        src: leaf03,
        alt: "leaf03",
        className: 'leaf leaf--03',
        dataDepth: 0.7
    },
    {
        src: leaf04,
        alt: "leaf04",
        className: 'leaf leaf--04',
        dataDepth: 0.1
    },
    {
        src: leaf05,
        alt: "leaf05",
        className: 'leaf leaf--05',
        dataDepth: 0.1
    },
]

type ILeaf = {
    loaded: boolean
}

export const Leaves = ({loaded}: ILeaf) => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        new Parallax(sceneRef.current);
    }, []);

    useEffect(() => {
        if (loaded) return
        gsap.fromTo(sceneRef.current,
            {
                y: -1000,
                duration: 0.5
            },
            {
                y: 0,
                duration: 0.5,
                ease: 'expo',
                delay: 0.5
            }
        )
    }, [loaded])

    return (
        <LeavesScene ref={sceneRef}>
            {leaf.map((leaf, index) =>
                <LeavesStyle
                    key={index}
                    data-depth={leaf.dataDepth}
                    className={leaf.className}
                    src={leaf.src}
                    alt={leaf.alt}/>
            )}
        </LeavesScene>
    )
}
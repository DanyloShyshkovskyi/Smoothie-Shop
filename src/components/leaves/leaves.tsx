// @ts-ignore
import Parallax from "parallax-js";
import {leaf01, leaf02, leaf03, leaf04, leaf05} from "@assets/img/"
import {LeavesScene, LeavesStyle} from "./leaves.style";
import {useEffect, useRef} from "react";
import useLeavesAnimation from "@animation/leaves.animation";

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
    // Refs
    const sceneRef = useRef<HTMLDivElement>(null);

    useLeavesAnimation({sceneRef}, loaded)

    // Parallax
    useEffect(() => {
        new Parallax(sceneRef.current);
    }, []);

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
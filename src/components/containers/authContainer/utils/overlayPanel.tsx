import React from 'react';

interface IOverlayPanel {
    h1: string,
    p: string,
    bText: string
    onClick: () => void
}

const OverlayPanel = (props: IOverlayPanel) => {
    return (
        <>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <button onClick={props.onClick}>{props.bText}</button>
        </>
    );
};

export default OverlayPanel;
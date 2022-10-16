import React, {useEffect, useRef, useState} from 'react';
import {CheckmarkStyle, CrossStyle, ProgressButtonStyle, ProgressCircleStyle} from "./customSubmit.style";
import {IProgressButtonStyle} from "../../../types/style.types";

interface CustomSubmitProps {
    handling?: IProgressButtonStyle
    onClick?: () => void
}

const CustomSubmit = ({handling, onClick}: CustomSubmitProps) => {
    const circleRef = useRef<SVGPathElement | null>(null);
    const checkmarkRef = useRef<SVGPathElement | null>(null);
    const crossRef = useRef<SVGPathElement | null>(null);
    const [pathCircle, setPathCircle] = useState<number | undefined>(0);
    const [pathCheckmark, setPathCheckmark] = useState<number | undefined>(0);
    const [pathCross, setPathCross] = useState<number | undefined>(0);
    const [status, setStatus] = useState<IProgressButtonStyle>({
        loading: false,
        error: false,
        success: false
    })

    useEffect(() => {
        if (circleRef.current) {
            setPathCircle(circleRef.current.getTotalLength());
        }
    }, [circleRef]);

    useEffect(() => {
        if (checkmarkRef.current) {
            setPathCheckmark(checkmarkRef.current.getTotalLength());
        }
    }, [checkmarkRef]);

    useEffect(() => {
        if (crossRef.current) {
            setPathCross(crossRef.current.getTotalLength());
        }
    }, [crossRef]);

    useEffect(() => {
        if (handling?.loading)
            setStatus(prevState => ({...prevState, loading: true}))

        if (handling?.error)
            setStatus(prevState => ({...prevState, error: true}))

        if (handling?.success)
            setStatus(prevState => ({...prevState, success: true}))

    }, [handling]);

    const intervalFunc = () => {
        var timer = setInterval(function () {
            if (handling?.error || handling?.success) {
                setStatus(prevState => ({...prevState, loading: false}))
                clearInterval(timer);
            }
            console.log('Wait for request'); //this will still run after clearing
        }, 300);
    }

    const resetStatus = () => setTimeout(() => {
        setStatus({
            loading: false,
            error: false,
            success: false
        })
    }, 300)

    return (
        <ProgressButtonStyle
            pathCircle={pathCircle}
            pathCheckmark={pathCheckmark}
            pathCross={pathCross}
            onClick={onClick}
            loading={status.loading}
            error={!status.loading && status.error}
            success={!status.loading && status.success}
            id="progress-button"
        >
            <button disabled={handling?.loading}><span>Submit</span></button>

            {/*svg circle for progress indication*/}
            <ProgressCircleStyle onAnimationEnd={intervalFunc} width="70" height="70">
                <path ref={circleRef}
                      d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
            </ProgressCircleStyle>

            {/*checkmark to show on success*/}
            <CheckmarkStyle onAnimationEnd={resetStatus} className="checkmark" width="70" height="70">
                <path ref={checkmarkRef} d="m31.5,46.5l15.3,-23.2"/>
                <path d="m31.5,46.5l-8.5,-7.1"/>
            </CheckmarkStyle>

            {/*cross to show on error */}
            <CrossStyle onAnimationEnd={resetStatus} className="cross" width="70" height="70">
                <path ref={crossRef} d="m35,35l-9.3,-9.3"/>
                <path d="m35,35l9.3,9.3"/>
                <path d="m35,35l-9.3,9.3"/>
                <path d="m35,35l9.3,-9.3"/>
            </CrossStyle>

        </ProgressButtonStyle>
    );
};

export default CustomSubmit;
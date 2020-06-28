import React, { useState, useEffect, useRef } from 'react';
import { p1, p2, p3, p4, p5, p6 } from '../../constants/bg1points';
import { lerpPoint } from '../../utils/math';

// Hook
function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

function Background(props) {
    const canvasRef = useRef(null);
    const size = useWindowSize();
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        setStartTime(Date.now());
    }, []);

    const lerpLine = (p, t) => {
        return lerpPoint(p.start, p.end, t);
    };

    const draw = () => {
        const canvas = canvasRef.current;
        canvas.width = size.width;
        canvas.height = size.height;

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d', { alpha: false });

            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, size.width, size.height);
            ctx.fillStyle = '#cffaff';

            let t = (Date.now() - startTime) / 2500;

            if (t > 1) { t = 1; }
            t = (--t) * t * t + 1;
            ctx.beginPath();
            const lerpedP1 = lerpLine(p1, t);
            ctx.moveTo(size.width * lerpedP1.x, size.height * lerpedP1.y);

            const lerpedP2 = lerpLine(p2, t);
            ctx.lineTo(size.width * lerpedP2.x, size.height * lerpedP2.y);

            const lerpedP3 = lerpLine(p3, t);
            ctx.lineTo(size.width * lerpedP3.x, size.height * lerpedP3.y);

            const lerpedP4 = lerpLine(p4, t);
            const lerpedP4C1 = lerpLine(p4.c1, t);
            const lerpedP4C2 = lerpLine(p4.c2, t);
            ctx.bezierCurveTo(
                size.width * (lerpedP4C1.x + (Math.sin(Date.now() / 1400) * 0.05)),
                size.height * lerpedP4C1.y,
                size.width * (lerpedP4C2.x + (Math.sin(Date.now() / 2000) * 0.02)),
                size.height * lerpedP4C2.y,
                size.width * (lerpedP4.x + (Math.sin(Date.now() / 2000) * 0.02)),
                size.height * (lerpedP4.y + (Math.cos(Date.now() / 2000) * 0.02)));

            const lerpedP5 = lerpLine(p5, t);
            const lerpedP5C1 = lerpLine(p5.c1, t);
            const lerpedP5C2 = lerpLine(p5.c2, t);
            ctx.bezierCurveTo(
                size.width * (lerpedP5C1.x + (Math.sin(Date.now() / 2000) * 0.02)),
                size.height * lerpedP5C1.y,
                size.width * (lerpedP5C2.x + (Math.sin(Date.now() / 1200) * 0.04)),
                size.height * lerpedP5C2.y,
                size.width * lerpedP5.x,
                size.height * lerpedP5.y);

            const lerpedP6 = lerpLine(p6, t);
            const lerpedP6C = lerpLine(p6.c, t);
            ctx.quadraticCurveTo(
                size.width * lerpedP6C.x,
                size.height * lerpedP6C.y,
                size.width * lerpedP6.x,
                size.height * lerpedP6.y);
            ctx.fill();
            if (t < 1) {
                window.requestAnimationFrame(draw);
            } else {
                setTimeout(draw, 100);
            }
        }
    };

    useEffect(() => {
        window.requestAnimationFrame(draw);
    });

    return (
        <canvas ref={canvasRef} width={640} height={425} />
    )
}
export default Background;
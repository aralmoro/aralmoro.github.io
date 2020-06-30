import React, { useState, useEffect, useRef } from 'react';
import { p1, p2, p3, p4, p5, p6 } from '../../constants/bg1points';
import { lerpPoint } from '../../utils/math';

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
    let startTime;

    useEffect(() => {
        startTime = Date.now();
        animate();
    }, []);

    useEffect(() => {
        resizeCanvas();
        draw();
    }, [size]);

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        canvas.height = canvas.width = Math.min(size.height, size.width);
    };

    const lerpVertex = (p, t) => {
        return lerpPoint(p.start, p.end, t);
    };

    const getT = () => {
        let t = (Date.now() - startTime) / 2500;

        if (t > 1) { t = 1; }
        t = (--t) * t * t + 1;
        return t;
    }

    const animate = () => {
        draw();
        const t = getT();
        if (t < 1) {
            window.requestAnimationFrame(animate);
        } else {
            setTimeout(animate, 100);
        }
    };

    const draw = () => {
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            const width = canvas.width;
            const height = canvas.height;

            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#f7b93b';

            const t = getT();

            ctx.beginPath();
            const lerpedP1 = lerpVertex(p1, t);
            ctx.moveTo(width * lerpedP1.x, height * lerpedP1.y);

            const lerpedP2 = lerpVertex(p2, t);
            ctx.lineTo(width * lerpedP2.x, height * lerpedP2.y);

            const lerpedP3 = lerpVertex(p3, t);
            ctx.lineTo(width * lerpedP3.x, height * lerpedP3.y);

            const lerpedP4 = lerpVertex(p4, t);
            const lerpedP4C1 = lerpVertex(p4.c1, t);
            const lerpedP4C2 = lerpVertex(p4.c2, t);
            ctx.bezierCurveTo(
                width * (lerpedP4C1.x + (Math.sin(Date.now() / 1400) * 0.05)),
                height * lerpedP4C1.y,
                width * (lerpedP4C2.x + (Math.sin(Date.now() / 2000) * 0.02)),
                height * lerpedP4C2.y,
                width * (lerpedP4.x + (Math.sin(Date.now() / 2000) * 0.02)),
                height * (lerpedP4.y + (Math.cos(Date.now() / 2000) * 0.02)));

            const lerpedP5 = lerpVertex(p5, t);
            const lerpedP5C1 = lerpVertex(p5.c1, t);
            const lerpedP5C2 = lerpVertex(p5.c2, t);
            ctx.bezierCurveTo(
                width * (lerpedP5C1.x + (Math.sin(Date.now() / 2000) * 0.02)),
                height * lerpedP5C1.y,
                width * (lerpedP5C2.x + (Math.sin(Date.now() / 1200) * 0.04)),
                height * lerpedP5C2.y,
                width * lerpedP5.x,
                height * lerpedP5.y);

            const lerpedP6 = lerpVertex(p6, t);
            const lerpedP6C = lerpVertex(p6.c, t);
            ctx.quadraticCurveTo(
                width * (lerpedP6C.x + (Math.sin(Date.now() / 1000) * 0.01)),
                height * (lerpedP6C.y + (Math.cos(Date.now() / 1500) * 0.01)),
                width * lerpedP6.x,
                height * lerpedP6.y);
            ctx.fill();
        }
    };

    return (
        <canvas ref={canvasRef} className="canvas" width={100} height={100} />
    )
}
export default Background;
const lerp = (v1, v2, t) => {
    return (1 - t) * v1 + t * v2;
};

const lerpPoint = (p1, p2, t) => {
    return {
        x: lerp(p1.x, p2.x, t),
        y: lerp(p1.y, p2.y, t)
    }
};

export {
    lerp,
    lerpPoint
}
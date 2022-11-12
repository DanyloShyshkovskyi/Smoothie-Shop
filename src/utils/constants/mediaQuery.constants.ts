const mediaSize = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = (Object.keys(mediaSize) as Array<keyof typeof mediaSize>).reduce(
    (acc, key) => {
        acc[key] = (style: String) =>
            `@media (max-width: ${mediaSize[key]}) { ${style} }`;
        return acc;
    },
    {} as { [index: string]: Function }
);
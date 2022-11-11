import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        --font-family-1: 'Ubuntu', sans-serif;

        --color-black: #101010;
        --color-white: #F9FCFF;
        --color-primary: #0077ff;
        --color-red: #f70707;

        --color-grey-1: #3d3d3d;
        --color-grey-2: #797979;
        --color-grey-3: #bababa;

        --toastify-color-info: #0077ff;
        --toastify-color-error: #f70707;
    }

    body {
        font-family: var(--font-family-1);  
        background-color: var(--color-primary);
        min-width: 300px;
    }
`;

export default GlobalStyle;

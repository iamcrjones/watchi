import { createGlobalStyle } from "styled-components";

const pallet= {
    pallet1: "#2A99DE",
    pallet2: "#52A3FF",
    pallet3: "#3BC9F5"
}

export const lightTheme = {
    body: "#fff",
    color: "#000"
}

export const darkTheme = {
    body: "#000",
    color: "#fff"
}

const fonts = {
    exo: "'Exo', sans-serif;",
    bangers: "'Bangers', cursive;"

}
export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.color};
        font-family: ${fonts.exo};
    }
    h1 {
        color: ${pallet.pallet1};
    }

    .navLogo {
        width: 250px;
        height: 100px;
    }
`
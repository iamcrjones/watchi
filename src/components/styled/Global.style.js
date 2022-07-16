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

    // Navigation Styling Starts here

    .MuiAppBar-root {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
    }
    .navLogo {
        width: 150px;
        height: 75px;
        align-self: center;
    }
    .navList {
        font-family: ${fonts.bangers}
        display: flex;
        padding-right: 20px;
        position: absolute;
        align-items: center;
        height: 83px;
    }
    .navList a {
        padding: 2px;
    }
    // Set this up once better colours of app sorted :)
    // .MuiSvgIcon-root {
    //     color: ${(props) => props.theme.color};
    // }
    .menu {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: fixed;
        width: 24px;
        height: 24px;
        margin: 0;
        padding-right: 20px;
    }
`
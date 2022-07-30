import { createGlobalStyle } from "styled-components";

const pallet= {
    pallet1: "#3BC9F5",
    pallet2: "#52A3FF",
    pallet3: "#2A99DE "
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
    bangers: "'Bangers', cursive;",
    test: "'Cormorant SC', serif;"

}
export const GlobalStyles = createGlobalStyle`

div {
    border: 1px solid red;
    

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.color};
        font-family: ${fonts.exo};
        margin: 0;
        padding: 0;
    }
    h1 {
        color: ${pallet.pallet1};
        font-family: ${fonts.bangers};
    }

    h2 {
        color: ${pallet.pallet1};
        font-family: ${fonts.bangers};
        font-size: 2rem;
    }

    h3 {
        color: ${pallet.pallet1};
        font-family: ${fonts.bangers};
        font-size: 0.5rem;
    }

    h4 {
        font-family: ${fonts.Exo};
    }

    p {
        font-family: ${fonts.Exo};
    }

    // Navigation Styling Starts here

    .MuiAppBar-root {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: full;
        position: sticky;
        top: 0;
    }
    .navLogo {
        width: 150px;
        height: 75px;
        align-self: center;
    }
    .navList {
        font-family: ${fonts.bangers};
        font-size: 20px;
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
        position: absolute;
        width: 24px;
        height: 24px;
        margin: 0;
        padding-right: 20px;
    }

    // Calendar styling starts here

    .calendar {
        justify-content: center;
        margin: 0 auto 0 auto;
        text-align: center;
    }

    .calendarTitle {
        font-size: 20px;
    }

    .dayBox {
        width: 24px;
        height: 24px;
        background-color: ${(props) => props.theme.body};
        border: 2px solid ${pallet.pallet2};
        margin: 0 auto 0 auto;
    }
    .weekBoxes {
        display: flex;
        justify-content: space-between;
        padding: 24px;

    }

    //About Content

    .aboutContainer {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 0 auto 0 auto;
        

    }

    .aboutPic {
        width: 80%;
        height: auto;
        margin-left: 10%;
    }

    .signUpPic {
        width: 80%;
        height: auto;
        margin-left: 10%;
    }
    .signInPic {
        width: 80%;
        height: auto;
        margin-left: 10%;
    }


    //Shows & Top 10 styling starts here

   

    .shows {
        display: flex;
        spaceBetween: 4;
        margin: 4rem auto 4rem auto;
        spacing: 4;
        maxColumns: 3

    }


    .top10 {
        display: flex;
        justify-content: space-between;
        align-content: space-around;
        border: 1px solid red;
        padding: 2rem;
        height: 100%;
    }

    .show-button {
        display: flex;
        border: none;
        padding: 2px 20px;
        text-align: center;
        display: inline-block;
        margin: 4px 2px;
        border-radius: 16px;
        font-size: 10px
    }

    .delete-outline {
        display: flex;
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: right;
    }

        .add-to-watchlist {
            display: flex;
            justify-content: space-around;
        }



    `;
import styled from "styled-components"

export const FiltersWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap:10px;
    width:100%;
    section {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        gap:5px;
        .text, .title, .title__wrapper, .text__wrapper {
            height: 100%;
            min-height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--specialColor1);
            border:1px solid var(--specialColor1);
            width: 100%;
            height: 100%;
            max-width: 200px;
            padding: 5px;
            color: white;
            text-align: center;
        }
        .controllers__wrapper {
            display:flex;
            flex-direction: row;
            width:100%;
            select,
            button,
            .text,
            input {
                padding: 5px 10px;
                outline: none;
                background-color: white;
                min-height: 35px;
                height: 100%;
                width: 100%;
                cursor: pointer;
                display: flex;
                justify-content: start;
                align-items: center;
                gap:5px;
                text-align: start;
                border:1px solid var(--specialColor1);
                svg {
                    width: 14px;
                    height: 14px;
                }
            }
            .text {
                cursor: default;
                width:100%;
                color:black;
                min-width: 100%;
                user-select: none;
            }
            .contentCenter {
                text-align: center;
                display: flex;
                justify-content:center;
                align-content:center;
            }
            .rightBorderRadius {
                border-bottom-right-radius: 5px;
                border-top-right-radius: 5px;
            }
            .leftBorderRadius {
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;
            }
            button:hover, select:hover, input:hover, button:focus, select:focus, .active {
                background-color: var(--specialColorHover1);
                color:white;
                svg path {
                    fill:white;
                }
            }
            input[type='text'], input[type='text']:hover {
                cursor: text;
                text-align:start;
                background-color: white;
                color:black;
                
            }
        }
    
    
    }
    section:last-child .controllers__wrapper {
        gap:5px;
        display:flex;
        justify-content: space-between;
        button {
            border-radius: 5px;
            justify-content: center;
            #ChangedCountWrapper {
                background:red;
                color:white;
                font-size: var(--fontSize12);
                border-radius:50%;
                padding:1px;
                width:20px;
                height:20px;
                display:flex;
                justify-content: center;
                align-items:center;
            }
        }
    }
`;
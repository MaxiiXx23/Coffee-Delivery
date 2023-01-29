import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        
        background-color: ${({ theme }) => theme.colors['white-100']};
    }

    button,a {
        &:focus {
            box-shadow: none;
        }
    }

`

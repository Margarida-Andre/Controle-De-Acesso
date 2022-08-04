import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }
    html,
    body {
      min-height: 100%;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: #13131F;
        color: #8257E6;
        font-size: 1.2rem;
    }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
      ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    /* color: #ffffff; */
    overflow: hidden;
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 50vh 0;
    overflow: auto;
  }
`;

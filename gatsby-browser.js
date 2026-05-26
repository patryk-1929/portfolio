// gatsby-browser.js
import "./src/styles/global.css"

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="google-fonts-preconnect-1"
      rel="preconnect"
      href="https://fonts.googleapis.com/"
    />,
    <link
      key="google-fonts-preconnect-2"
      rel="preconnect"
      href="https://fonts.gstatic.com/"
      crossOrigin="anonymous"
    />,
    <link
      key="google-fonts-stylesheet"
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />,
  ])
}
﻿

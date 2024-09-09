import "./styles.css";

import { createHeader, createMainContent, createFooter } from './loadingPage.js';


const contentDiv = document.getElementById("content");

createHeader(contentDiv);
createMainContent(contentDiv);
createFooter(contentDiv);


//about button

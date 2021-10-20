import "./styles.css"
import {initSidebar} from "./modules/sidebar.js"
import {initMainContent} from "./modules/mainContent.js"

function initMainBody(){
    initSidebar()
    initMainContent()
}

initMainBody()
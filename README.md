# vmatusevychwebsite

Notes:

package.json has library's I need: version in json format
scripts are commands i can run

npm run "start" -> "react-scripts start"
"build" -> "react-scripts build"
"test" -> "react-scripts test"
"eject" -> "react-scripts eject"

npm install searches for package.json and install any dependancies to node_modules folder
cd MyApp->go into my app
ls into my folder
npm run start -> to run

Public is used for images in my case
if press TAB will import {whatever} ->autocomplete

a href="/About">ABOUT can use this but use "Link" because adds extra things for help

react-router-dom is used for -> library that
Bootstrap is used for -> open-source front-end CSS framework

html, body, #root {
height: 100%;
}

Body and HTML go hand in hand

nothing -> tag

# -> ID

. -> class

margin-> outside of element
padding-> indide

Col md={6} ->how much of the page it takes up, whole width of page is 12

Index.html -> loads the first

Ctrl+Shift+P ->save without formatting

location === "/About" ? "Dot":"" -> === means equals to 100%, ? -> if :-> else
if (location === "/About") {
return "Dot"
}
return ""

function dotNavigation(matchingLocation) {
if (location.pathname === matchingLocation) {
return "Dot"
}
return ""
}

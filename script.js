var isSidepanelOpen = false;

/* Set the width of the sidebar to 250px (show it) */
function showSidepanel() {
    document.getElementById("mySidepanel").style.width = "250px";
    isSidepanelOpen = true;
}
  
/* Set the width of the sidebar to 0 (hide it) */
function hideSidepanel() {
    document.getElementById("mySidepanel").style.width = "0";
    isSidepanelOpen = false;
}

function toggleSidepanel() {
    isSidepanelOpen ? hideSidepanel() : showSidepanel();
}
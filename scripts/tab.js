function openTab(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "white";
    }
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
function displayNoti(){
    let notification = document.getElementById("notification");
    notification.style.display = "block";
}
function closeNoti() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
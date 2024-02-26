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

function showChoice() {
  var playerOneColor = document.querySelector('input[name="playerOneColor"]:checked').value;
  var playerTwoColor = document.getElementById("playerTwoColor").value;
  var resultText = "Player One's hat color: " + playerOneColor + ", Player Two's hat color: " + playerTwoColor;
  document.getElementById("choiceResult").innerText = resultText;
}

function addTodo() {
  var input = document.getElementById("newTodo");
  var newTodo = input.value.trim();
  if (newTodo !== "") {
      var ul = document.getElementById("todoList");
      var li = document.createElement("li");
      li.innerHTML = '<span onclick="toggleTodo(this)">' + newTodo + '</span><span class="close" onclick="removeTodo(this)">×</span>';
      ul.appendChild(li);
      input.value = ""; 
  }
}

function toggleTodo(el) {
  el.classList.toggle('checked');
}

function removeTodo(el) {
  var li = el.parentElement;
  li.remove();
}

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
  }
}, false);


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
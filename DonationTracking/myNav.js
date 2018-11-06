$(document).ready(() => {
  var height = $(".topbar").css("height")
  $("#map").css("margin-top", "" + height);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

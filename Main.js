
function myFunction(){
    document.getElementById("dropdown").classList.toggle("show")
    }

  // Close the dropdown menu if the user clicks outside of it
window=onclick = function(event){
    if (!event.target.matches('.dropbtn')) {
        var dropdown = GetElementByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (opendropdowns.classlist.contains('show')) {
                opendropdowns.classlist.remove('show');
            }
        }
    }
}
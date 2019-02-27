// code orginally from: https://www.w3schools.com/w3css/w3css_tabulators.asp
// modified by danieljampen
function openTab(evt, tabName) {
    var i, x, tablinks;

    var container = evt.currentTarget.parentNode;
    while(container.tagName != "TABLE") { container = container.parentNode; }

    x = container.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = container.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    container.getElementsByClassName(tabName)[0].style.display = "block";
    evt.currentTarget.className += " active";
}

function collapse(e) {
    var classnames = e.className.split(" ");
    delete classnames[classnames.length -1]
    childs = document.getElementsByClassName(classnames.join(" "));

    displayStyle = "";
    if(childs[1].style.display == "none") {
        displayStyle = "";
    } else {
        displayStyle = "none";
    }

    for(var i in childs) {
        if(childs[i] != e) {
            childs[i].style.display = displayStyle;
        }
    }
}
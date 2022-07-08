function changeTab(tabName) {
    var content = document.getElementsByClassName("tab-content");
    for (var i = 0; i < content.length; i++) {
      content[i].classList.remove("active-content");
    }

    document.getElementById(tabName).classList.add("active-content");

  }

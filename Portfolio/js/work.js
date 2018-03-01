/*=======================================PANEL DIMENSION=========================================*/
var list_panel = document.getElementsByClassName('li-panel');
var panel = document.getElementsByClassName('panels')[0];
var panel_contents = document.getElementsByClassName('panel-content');
var n = 0;

function panelcur(m) {
  n = m;
  //remove class active on all list_panel
  for (var i = 0; i < list_panel.length; i++) {
    if (list_panel[i].classList.contains('active')) {
      list_panel[i].classList.remove('active');
    }
    //also remove all class active for panel_contents
    if (panel_contents[i].classList.contains('active')) {
      panel_contents[i].classList.remove('active');
    }
  }
  //add class active to the list_panel which clicked (n)
  list_panel[n].classList.add('active'); console.log(n);
  panel_contents[n].classList.add('active');
}

/*=======================================TOPIC ACTIVE=============================*/
var topics = document.getElementsByClassName('topic');
var assignments = document.getElementsByClassName('assignments');

function topic(m) {
  n = m;
  //remove class active on all topics
  for (var i = 0; i < topics.length; i++) {
    if (topics[i].classList.contains('active')) {
      topics[i].classList.remove('active');
    }
  }
  //also remove class acrive for assignments div
  for (var i = 0; i < assignments.length; i++) {
    if (assignments[i].classList.contains('active')) {
      assignments[i].classList.remove('active');
    }
  }
  //add class active to topics (n)
  topics[n].classList.add('active');
  assignments[n].classList.add('active');
}

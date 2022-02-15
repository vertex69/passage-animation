window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function svgTest() {
  var donutContent = '<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg"> <g> <title>Layer 1</title> <circle class="outer-gray grays" r="70.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="middle-gray grays" r="50.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="inner-gray grays" r="30.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="outer-green main-circles" r="70.85699" cy="81" cx="81" stroke-width="8" stroke="#23e8a1" fill="none"/> <circle class="middle-yellow main-circles" r="50.85699" cy="81" cx="81" stroke-width="8" stroke="#fbc059" fill="none"/> <circle class="inner-red main-circles" r="30.85699" cy="81" cx="81" stroke-width="8" stroke="#ff3452" fill="none"/> </g> </svg>';
  var barContent = '<ul class="absolute sixteen height-100 z2 flex justify-around align-bottom"> <li class="bars green half radius-tops-only height-100">&nbsp;</li><li class="bars yellow half radius-tops-only height-60 ">&nbsp;</li><li class="bars red half radius-tops-only height-70">&nbsp;</li><li class="bars green half radius-tops-only height-80 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-50 ">&nbsp;</li><li class="bars red half radius-tops-only height-40 ">&nbsp;</li><li class="bars green half radius-tops-only height-50 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-30 ">&nbsp;</li><li class="bars red half radius-tops-only height-40 ">&nbsp;</li><li class="bars green half radius-tops-only height-70 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-20 ">&nbsp;</li><li class="bars red half radius-tops-only height-30 ">&nbsp;</li><li class="bars green half radius-tops-only height-40 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-20 ">&nbsp;</li><li class="bars red half radius-tops-only height-10 ">&nbsp;</li></ul> <ul id="stats-axes" class="flex column justify-between absolute sixteen height-100"> <li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li></ul>'

  var circleGraph = document.querySelector("#donut-graph");
  var barGraph = document.querySelector("#bar-graph")

  circleGraph.innerHTML += donutContent;
  barGraph.innerHTML += barContent;
}

svgTest();
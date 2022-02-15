window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function svgTest() {
  var donutContent =
    '<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg"> <g> <title>Layer 1</title> <circle class="outer-gray grays" r="70.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="middle-gray grays" r="50.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="inner-gray grays" r="30.85699" cy="81" cx="81" stroke-width="8" stroke="#263241" fill="none"/> <circle class="outer-green main-circles" r="70.85699" cy="81" cx="81" stroke-width="8" stroke="#23e8a1" fill="none"/> <circle class="middle-yellow main-circles" r="50.85699" cy="81" cx="81" stroke-width="8" stroke="#fbc059" fill="none"/> <circle class="inner-red main-circles" r="30.85699" cy="81" cx="81" stroke-width="8" stroke="#ff3452" fill="none"/> </g> </svg>';
  var barContent =
    '<ul class="absolute sixteen height-100 z2 flex justify-around align-bottom"> <li class="bars green half radius-tops-only height-100">&nbsp;</li><li class="bars yellow half radius-tops-only height-60 ">&nbsp;</li><li class="bars red half radius-tops-only height-70">&nbsp;</li><li class="bars green half radius-tops-only height-80 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-50 ">&nbsp;</li><li class="bars red half radius-tops-only height-40 ">&nbsp;</li><li class="bars green half radius-tops-only height-50 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-30 ">&nbsp;</li><li class="bars red half radius-tops-only height-40 ">&nbsp;</li><li class="bars green half radius-tops-only height-70 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-20 ">&nbsp;</li><li class="bars red half radius-tops-only height-30 ">&nbsp;</li><li class="bars green half radius-tops-only height-40 ">&nbsp;</li><li class="bars yellow half radius-tops-only height-20 ">&nbsp;</li><li class="bars red half radius-tops-only height-10 ">&nbsp;</li></ul> <ul id="stats-axes" class="flex column justify-between absolute sixteen height-100"> <li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li><li class="lines">&nbsp;</li></ul>';
  var labelContent =
    '<div class="labels flex super-centered five"> <p>Permitted</p><div class="flex"> <span class="material-icons text-green"> trending_up </span> <div class="green radius10 plr5 ptb0"> <p>62%</p></div></div></div><div class="labels flex super-centered five"> <p>Monitoring</p><div class="flex"> <span class="material-icons text-red"> trending_down </span> <div class="red radius10 plr5 ptb0"> <p>25%</p></div></div></div><div class="labels flex super-centered five"> <p>Unregistered</p><div class="flex"> <span class="material-icons text-red"> trending_down </span> <div class="red radius10 plr5 ptb0"> <p>13%</p></div></div></div>';
  var ourTableItsBroken =
    '<table class="w3-table w3-bordered"> <tr> <th>SHIP NAME</th> <th>COUNTRY</th> <th>MMSI</th> <th>STATUS</th> <th>ACTION</th> </tr><tr> <td>GAN</td><td>USA</td><td>45646</td><td>in review</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>KAYN</td><td>PH</td><td>12315</td><td>denied</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>GONN</td><td>JPN</td><td>86451</td><td>approved</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>LAYAG</td><td>PH</td><td>646556</td><td>denied</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>SHIF</td><td>JPN</td><td>65498</td><td>in review</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>Adam</td><td>USA</td><td>86451</td><td>approved</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>MARINA</td><td>USA</td><td>646556</td><td>approved</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr><tr> <td>DORFIN</td><td>PH</td><td>646556</td><td>in review</td><td> <span class="material-icons text-green"> call </span> <span class="material-icons text-yellow"> email </span> </td></tr></table>';

  var circleGraph = document.querySelector("#donut-graph");
  var barGraph = document.querySelector("#bar-graph");
  var statsLabel = document.querySelector("#stats-label");
  var listContent = document.querySelector("#list-content");

  circleGraph.innerHTML += donutContent;
  barGraph.innerHTML += barContent;
  statsLabel.innerHTML += labelContent;
  listContent.innerHTML += ourTableItsBroken;
}

svgTest();

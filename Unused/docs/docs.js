"use strict";

var
  allTypes = null,
  allProcs = null;

// ---

function focusTypeProcs(typeName, obj)
{
  var objIsActive = false;
  if (obj.className.match(/\bactive\b/) === null) {
    objIsActive = true;
    obj.className += " active";
    document.getElementById("content").className += " hidden-inactive";
  }
  else {
    obj.className = obj.className.replace(/\s*\bactive\b\s*/, "");
    content.className = content.className.replace(/\s*\bhidden-inactive\b\s*/, "");
  }
  
  var procs = allProcs.getElementsByTagName("div");
  for (var i = 0; i != procs.length; ++i)
  {
    var proc = procs[i];
    if (proc.dataset.params === undefined) continue;
    
    var params = procs[i].dataset.params.split(';');
    for (var p = 0; p != params.length; ++p) {
      if (params[p] == typeName || params[p] == "typedesc["+typeName+"]"/*XXX:make match eventually*/) {
        if (objIsActive === true)
          proc.className += " active";
        else
          proc.className = proc.className.replace(/\s*\bactive\b\s*/, "");
        break;
      }
    }
  }
}

// ---

function toggleMenu()
{
  var toggle = document.getElementById("menu-toggle");
  if (toggle.className === "active") {
    document.getElementById("outline").className = "hidden";
    document.getElementById("content").className = "full";
    document.getElementById("controls").className = "full";
    document.getElementById("types-menu").className = "";
    document.getElementById("procs-menu").className = "";
    toggle.className = "";
  }
  else {
    document.getElementById("outline").className = "";
    document.getElementById("content").className = "";
    document.getElementById("controls").className = "";
    document.getElementById("types-menu").className = "hidden";
    document.getElementById("procs-menu").className = "hidden";
    var content = document.getElementById("content");
    toggle.className = "active";
  }
}

// ---

window.onload = function() {
  allTypes = document.getElementById("types");
  allProcs = document.getElementById("procs");
};
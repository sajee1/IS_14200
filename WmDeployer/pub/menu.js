/*
 * Copyright (c) 2000, webMethods Inc.  All Rights Reserved.
 */

var previousMenuImage;

function adapterMenuClick(url, help){
  moveArrow(url);
  document.forms["urlsaver"].helpURL.value = help;
  return false;
}

function tdClick(thisTD, id)
{
  alert(thisTD.all);
  thisTD.all[id].click();
}

function menuClick(url, target) {


  switch (target) {
    case "rightFrame":
  	  parent[target].window.location.href= url;
	  break;
    default:   
          window.open(url, target, "directories=no,location=yes,menubar=yes,scrollbars=yes,status=yes,toolbar=yes,resizable=yes");
	  break;
  }

  menuMove(url, target);

  return false;
}


function menuMove(url, target) {

  if (target=="rightFrame")
  	moveArrow(url);

}

function IE() {
	if (navigator.appName == "Microsoft Internet Explorer")
		return true;
	return false;

}
function menuMouseOver(object, id) {
	object.style.background='#FFFFFF';
	window.status= id;
}
function menuMouseOut(object) {
	object.style.background='#F0ECDA';
	window.status='';

}
function moveArrow(item)
{
  if(previousMenuImage != null) previousMenuImage.src="images/blank.gif";
  var temp = previousMenuImage;
  previousMenuImage=document.images[item];
  if(previousMenuImage == null) previousMenuImage = temp;
  previousMenuImage.src="images/selectedarrow.gif";
}


function initMenu(firstImage)
{
	previousMenuImage = document.images[firstImage];
	previousMenuImage.src="images/selectedarrow.gif";
	return true;
}

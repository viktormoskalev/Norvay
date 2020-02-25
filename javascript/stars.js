
try {
  var inputstars = document.getElementsByClassName("input-stars");
  var labelstars = document.getElementsByClassName("label-stars");
  var rate = document.getElementsByClassName("rate");
  
  
//Имена импутам
  
  for (var u = 0; u < rate.length; u++) {
    for (var j = 0; j < rate[u].children.length; j++) {

      if (rate[u].children[j].tagName == "INPUT") {
        rate[u].children[j].setAttribute("name", "starname" + u);
      }
    }
  }


//  айдишники инпутам и форы лейблам
  for (var i = 0; i < inputstars.length; i++) {
    inputstars[i].setAttribute("id", "stars" + i);
    labelstars[i].setAttribute("for", "stars" + i);
  }

} catch (err) {
  console.log(inputstars.length + "  количество инпутов");
  console.log(labelstars.length + "   количество лейблов");
  console.log(err);
}

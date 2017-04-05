//no, it isn't documented yet.

var base
var locs
var infop


function setup() {
  locs = selectAll("area")
  locs[0].mouseOver(delta)
  locs[1].mouseOver(sea)
  locs[2].mouseOver(border)
  locs[3].mouseOver(jordan)
  locs[4].mouseOver(sinai)
  for (var i = 0; i < locs.length; i++) {
    locs[i].mouseOut(out)
  }
  infoP = createP("When imposed on the map of egypt the exodus story makes some interesting mapping. Mouse over an area for more information.")
}

function delta() {
  infoP.html("This is the Nile delta, home of the city of Pi-Ramesses, thought by many scholars to be the city built by the Jews during their enslavement. The delta is also considered to be a likely home of the Reed Sea, the correct translation of the red sea. It has been proposed that the Jews actually crossed over a muddy river in the Nile delta, not the large body of water to the south. This theory also proposes that the Egyptians were held back by their chariots in the mud, rather than divine intervention.");
}

function sea() {
  infoP.html("This is the real red sea. One will notice that it is far south of the shortest path to Israel, and that it is not on the way to the Sinai Peninsula. Fortunately the Torah never says Bnei Yisrael crossed over the Red sea, it says that they crossed the Reed Sea, located further to the north, in the Nile delta.");
}

function border() {
  infoP.html("The southern border of Israel. This is where one would expect Bnei Yisrael to have entered, especially since it is just north of Sinai. Yet the Tanach says the invasion started further north, from the Jordan River.");
}

function jordan() {
  infoP.html("This the Jordan river, home to Yehoshua’s invasion of the land of Israel. Only one problem, the best way to get to it is to go through Aretz Yisrael. That route passes by Sinai too.");
}

function sinai() {
  infoP.html("Welcome to the Sinai Peninsula. This might be one of the few places in the exodus story that actually makes sense cartographically. The peninsula, home to the Eponymous mountain, is conveniently located right between Egypt and Israel. Only one problem, As god decides to take them out of Egypt he does tell them to avoid sea, so much for short paths.")
}

function out() {
  infoP.html("When imposed on the map of egypt the exodus story makes some interesting mapping. Mouse over an area for more information.")
}
function poke(){
    var ret = document.getElementsByTagName('a');
    for (var i=0;i<ret.length;i++) { if (ret[i].text == "Pokeを返す") ret[i].click()}
}

setInterval(poke, 1000);

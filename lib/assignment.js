function Reverser() {

  this.reverse = function(text) {
   
    return text.split("").reverse().join("");
  }

}

module.exports = Reverser;

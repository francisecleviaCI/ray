const Ray = function() {
  return {
    length: 0,
    push: function(value){
    this.length = this.length + 1;
    },

    pop: function(){
    this.length = this.length - 1;    
    },

    includes: function(){

    },

    indexOf: function(){

    },

    shift: function(){
    this.length = this.length - 1;
    },

    unshift: function(){
    this.length = this.length + 1;
    
    },














  }
}


module.exports = Ray

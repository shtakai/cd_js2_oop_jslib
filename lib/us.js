
module.exports._  = {
  map: function(arr, callback){
    if(!Array.isArray(arr) || typeof(callback) != "function"){
      throw new TypeError("arr is Array, callback is Function");
    }
    var returnArr_ = [];
    for(var idx = 0; idx < arr.length; idx++){
      returnArr_.push(callback(arr[idx]));
    }
    return returnArr_;
  },

  reduce: function(arr, callback, init){
    if(!Array.isArray(arr) || typeof(callback) != "function"){
      throw new TypeError("arr is Array, callback is Function");
    }
    init = init || 0;
    var memo_ = init;
    // e.reduce(init){|memo, elem| calc}
    for(var idx = 0; idx < arr.length; idx++){
      memo_ = callback(memo_, arr[idx]);
    }
    return memo_;
  },

  find: function(arr, callback){
    if(!Array.isArray(arr) || typeof(callback) != "function"){
      throw new TypeError("arr is Array, callback is Function");
    }
    for(var idx = 0; idx < arr.length; idx++){
      if(callback(arr[idx])){
        return arr[idx];
      }
    }
    return null;
  },

  filter: function(arr, callback){
    if(!Array.isArray(arr) || typeof(callback) != "function"){
      throw new TypeError("arr is Array, callback is Function");
    }
    var returnArr_ = []
    for(var idx = 0; idx < arr.length; idx++){
      if(callback(arr[idx])){
         returnArr_.push(arr[idx]);
      }
    }
    return returnArr_;
  },

  reject: function(arr, callback){
    if(!Array.isArray(arr) || typeof(callback) != "function"){
      throw new TypeError("arr is Array, callback is Function");
    }
    var returnArr_ = [];
    for(var idx = 0; idx < arr.length; idx++){
      if(!callback(arr[idx])){
        returnArr_.push(arr[idx]);
      }
    }
    return returnArr_;
  }

}


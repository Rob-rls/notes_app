(function(exports){
  function List(Note){
   this._list = [];
  }

  List.prototype.addNote = function(text){
    var noteItem = new Note(text);
    this._list.push(noteItem);
  };

  List.prototype.printNotes = function(){
    return this._list;
  };

  exports.List = List;
})(this);

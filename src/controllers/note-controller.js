(function(exports){

  function NoteController(noteList) {
    this.noteListView = new ListView(noteList);

  };

  NoteController.prototype.showFullNoteById = function() {
    var noteId = location.hash.split("#")[1];
    var appDiv = noteController._getAppDiv();
    var noteArray = noteController.noteListView.noteList.listArr;
    var note = noteArray.find(function(elem) {
      if (elem.noteID == noteId) {  // use == to comeare string number to number
        return elem;
      };
    });
    var singleNote = new NoteView(note);
    appDiv.innerHTML = singleNote.printNoteHTML();
  };

  NoteController.prototype._getAppDiv = function() {
    return document.getElementById('app');
  };

  NoteController.prototype.insertHTML = function(){
    this._getAppDiv().innerHTML = this.noteListView.printListHTML();
  };

  exports.NoteController = NoteController;

})(this);

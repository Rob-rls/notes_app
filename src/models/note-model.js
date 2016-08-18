(function(exports) {

  function Note(text, noteID) {
    this.noteText = text;
    this.noteID = noteID;
  }

  Note.prototype.getNoteText = function () {
    return this.noteText;
  };

  exports.Note = Note;
})(this);

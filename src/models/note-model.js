(function(exports) {

  function Note(text, noteID) {
    this.save_note = text;
    this.noteID = noteID;
  }

  Note.prototype.showNote = function () {
    return this.save_note;
  };

  exports.Note = Note;
})(this);

(function(exports) {

  function NoteView(note) {
    this._note = note;
  };

  NoteView.prototype.printNoteHTML = function () {
    return "<div>" + this._note.getNoteText() + "</div>";
  };

  exports.NoteView = NoteView;
})(this);

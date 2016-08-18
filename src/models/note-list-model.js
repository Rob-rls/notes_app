(function(exports) {
  function NoteList() {
      this.listArr = [];
      this.noteIDCounter = 0;
    }

    NoteList.prototype.store = function (note) {
      var noteID = this.noteIDCounter;
      this.listArr.push(new Note(note, noteID));
      this.noteIDCounter ++;
    }

    NoteList.prototype.list = function () {
      return this.listArr;
    }

    exports.NoteList = NoteList;

})(this);

(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.displayList = function () {
    var listOfNotes = this.noteList.list();
    return this.createUnorderedList(listOfNotes);
  };

  ListView.prototype.createUnorderedList = function(list) {
    return "<ul>" + this.createListItems(list) + "</ul>";
  };

  ListView.prototype.createListItems = function(list) {
    return list.map(function(note) {
      return '<li><a href="#' + note.noteID + '" id="' + note.noteID + '"><div>' + truncateNoteText(note) + '</div></a></li>';
    }).join('');
  };

  truncateNoteText = function(note) {
    return note.getNoteText().substring(0, 20);
  };

  exports.ListView = ListView;

})(this);

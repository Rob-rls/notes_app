(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    html = "<ul>";
    this.noteList.list().forEach(function(note){
      var shortNote = note.showNote().substring(0, 20);
      html += '<li><a href="#' + note.noteID + '" id="' + note.noteID + '"><div>' + shortNote + '</div></a></li>';
    });
    html += "</ul>";
    return html;
  };

  exports.ListView = ListView;
})(this);

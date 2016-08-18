var noteList = new NoteList();
noteList.store("Favourite drink: seltzer");
noteList.store("Favourite drink: cherryade");
var noteController = new NoteController(noteList);
noteController.insertHTML();

window.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var val = document.getElementById('text').value;
  console.log(val);
});
window.addEventListener('hashchange', noteController.showFullNoteById);

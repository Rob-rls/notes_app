var noteList = new NoteList();
noteList.store("Favourite drink: seltzer");
noteList.store("Favourite drink: cherryade");
var noteController = new NoteController(noteList);
noteController.insertHTML();

window.addEventListener('hashchange', noteController.showFullNoteById);

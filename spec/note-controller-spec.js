it('NoteController can modify HTML on document', function(){
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: seltzer");
  var newView = new ListView(noteList);
  var noteController = new NoteController(noteList);
  var element = document.createElement('div', {id: 'app'});
  noteController._getAppDiv = function () {
    return element;
  };
  noteController.insertHTML();
  isTrue(noteController._getAppDiv().innerHTML === newView.displayList());

});

it('NoteController can return content for a single note', function() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: seltzer");
  var newView = new ListView(noteList);
  var noteController = new NoteController(noteList);
  noteController.insertHTML();
  var noteElement = document.getElementById('0');
  noteController.showFullNoteById();
  var appDivContent = document.getElementById('app');
  console.log("test appDivContent: " + appDivContent.innerHTML);
  isTrue(appDivContent.innerHTML === '<div>Favourite drink: seltzer</div>')
});

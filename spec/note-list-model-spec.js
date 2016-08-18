
it('NoteList stores notes', function() {
  var notelist = new NoteList();
  var noteOne = "I love ruby";
  var noteTwo = "I hate Javascript";

  notelist.createNote(noteOne);
  notelist.createNote(noteTwo);

  var testList = notelist.list()
  var validateFirstNote = (testList[0].getNoteText() === noteOne)
  var validateSecondNote = (testList[1].getNoteText() === noteTwo)
  isTrue(validateFirstNote === validateSecondNote);
});

it('NoteList give each new Note a uniquie ID', function() {
  var notelist = new NoteList();
  var noteOne = "I love ruby";
  var noteTwo = "I hate Javascript";

  notelist.createNote(noteOne);
  notelist.createNote(noteTwo);

  var noteListArray = notelist.list();

  var validateUniqueNoteIDs = noteListArray[0].noteID !== noteListArray[1].noteID;
  isTrue(validateUniqueNoteIDs);
});

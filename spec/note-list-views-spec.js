it('ListView empty list is legal', function listIsEmpty() {
  var testList = new NoteList();
  var listView = new ListView(testList);
  var html = "<ul></ul>"
  isTrue(listView.printListHTML() === html);
});

it('ListView shows one note', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = '<ul><li><a href="#0" id="0"><div>Hello</div></a></li></ul>'
  isTrue(listView.printListHTML() === html);
});

it('ListView shows Many Notes', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  var noteTwo = "Howdy";
  testList.store(noteOne);
  testList.store(noteTwo);
  var listView = new ListView(testList);
  var html = '<ul><li><a href="#0" id="0"><div>Hello</div></a></li><li><a href="#1" id="1"><div>Howdy</div></a></li></ul>'
  isTrue(listView.printListHTML() === html);
});

it('ListView only shows 20 chars per note', function() {
  var testList = new NoteList();
  var noteOne = "This is a string that never ends";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = '<ul><li><a href="#0" id="0"><div>This is a string tha</div></a></li></ul>'
  isTrue(listView.printListHTML() === html);
});

it('ListView creates a unique link for each note', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  var noteTwo = "Howdy";
  testList.store(noteOne);
  testList.store(noteTwo);
  var listView = new ListView(testList);
  var html = '<ul><li><a href="#0" id="0"><div>Hello</div></a></li><li><a href="#1" id="1"><div>Howdy</div></a></li></ul>'
  isTrue(listView.printListHTML() === html);
});

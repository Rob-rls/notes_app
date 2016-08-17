function canCreateAlistOfNotes(){
  var noteOne = "I love Ruby";
  var noteTwo = "I don't love Javascript";

  var list = new List(Note);

  list.addNote(noteOne);
  list.addNote(noteTwo);
  var testList = list.printNotes();
  isTrue(testList[0].showNote() === noteOne);

}
console.log("canCreateAlistOfNotes");
canCreateAlistOfNotes();

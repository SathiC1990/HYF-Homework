const notes = [];

function saveNote(content, id) {
    const note = {
        content: content,
        id: id
    };
    notes.push(note);
}

function getNote(id) {
    // Check if id is not specified or is not a number
    if (id === undefined || typeof id !== 'number') {
        console.log("Error: Invalid id");
        return;
    }

    // Iterate through the notes array to find the note with the specified id
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }

    // If no note is found with the specified id, log an error message
    console.log(`Error: Note with id ${id} not found`);
}

// Test the saveNote and getNote functions
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Complete homework", 3);
saveNote("Go for a run", 4);

const firstNote = getNote(1);
console.log(firstNote); // Output: {content: 'Pick up groceries', id: 1}

const secondNote = getNote(2);
console.log(secondNote); // Output: {content: 'Do laundry', id: 2}

const invalidNote = getNote(3);
console.log(invalidNote); // Output: Error: Note with id 3 not found

const noIdNote = getNote();
console.log(noIdNote); // Output: Error: Invalid id

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`);
    }
}

    
  
  logOutNotesFormatted(2); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry



//To read out even ID notes first
  function logOutNotesFormatted() {
    // First log notes with even IDs
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id % 2 === 0) {
            console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`);
        }
    }

    // Then log notes with odd IDs
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id % 2 !== 0) {
            console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}"`);
        }
    }
}






const fs = require('fs');
const chalk = require('chalk');


const getNotes = () => {
    return 'Your Notes....';
}

// event handlers
const addNote = (title, body) => {
    const notes = loadNotes();
    const dupNotes = notes.filter(note => note.title === title);
    if (!dupNotes || dupNotes.length === 0) {
        notes.push({
            title: title,
            body
        })
        console.log('New note will be added', notes);
        saveNotes(notes);
    }
    else {
        console.log('Note title allready in use');
    }
};

const removeNote = noteTitle => {
    const notes = loadNotes();
    // const indexToRemove = notes.findIndex(note => note.title === noteTitle);
    // if(indexToRemove >= 0) {
    //     notes.splice(indexToRemove, 1);
    //     saveNotes(notes);
    //     console.log(chalk.bgGreen('Success'));

    // }else{
    //         console.log(chalk.bgRed('No such note'));
    // }
    const notesToKeep = notes.filter(note => note.title !== noteTitle
    );
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Success'));
        saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.bgRed('No such note'));
    }

}

// helpers
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
    console.log('Data saved');
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (error) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote,
    removeNote
};
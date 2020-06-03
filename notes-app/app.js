const yargs = require('yargs')
const notes = require('./notes');

// customize yargs versions
yargs.version('1.1.0')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title to Remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        console.log('Listting out all notes');
    }
})

//Create message command
yargs.command({
    command: 'message',
    describe: 'Message a note',
    handler() {
        console.log('Message note');
    }
})

yargs.parse();
//console.log(yargs.argv);



const yargs = require('yargs')
const pkgJson = require('./package.json')
const { addNote, getNotes } = require('./notes.controller')

yargs.version(pkgJson.version)

yargs.command({
  command: 'add',
  describe: 'Add new note list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title)
  },
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  handler() {
    const notes = getNotes()
    console.log(notes)
  },
})

yargs.parse()

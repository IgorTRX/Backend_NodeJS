const yargs = require('yargs')
// const pkgJson = require('./package.json')
// yargs.version(pkgJson.version)

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
    console.log('Add command:', title)
  },
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  handler() {
    console.log('List command')
  },
})

yargs.parse()

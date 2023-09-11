const fsPro = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

const getContent = () => `${process.argv[2] ?? ''}\n`

async function createFolder() {
  try {
    if (fsSync.existsSync(base)) {
      await fsPro.appendFile(path.join(base, 'logs.txt'), getContent())
      const logs = await fsPro.readFile(path.join(base, 'logs.txt'), {
        encoding: 'utf-8',
      })
      console.log(logs)
    } else {
      await fsPro.mkdir(base)
      await fsPro.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
    }
  } catch (error) {
    console.log('err', err)
  }
}
createFolder()

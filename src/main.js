const { prompt } = require('inquirer')

let activePrompt
let loopId

function output(msg) {
  console.log(`\n${msg}`)
}

function showPrompt(config) {
  if (activePrompt) {
    output('Active prompt found - closing...')
    activePrompt.ui.close()
  } else {
    output('No active prompt!')
  }
  activePrompt = prompt(config)
  return activePrompt
}

function main() {
  const show = () => showPrompt({
    name: 'my-prompt',
    type: 'confirm'
  })

  loopId = setInterval(() => show(), 500)
}

main()

# Inquirer.js memory leak repro

    npm i
    npm start

Every 0.5 seconds it will close the active prompt and prompt again. After about 9 prompts you will get this warning:

    (node:95580) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 keypress listeners added. Use emitter.setMaxListeners() to increase limit

Tested in Nodejs 10.15.3 in OS X iterm2

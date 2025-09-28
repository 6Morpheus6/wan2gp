module.exports = async (kernel) => {
  let port = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          env: {
            SERVER_NAME: "127.0.0.1",
            SERVER_PORT: port
          },
          path: "app",                // Edit this to customize the path to start the shell from
          message: [
            "python wgp.py --multiple-images {{args.compile ? '--compile' : ''}}"
            //"python wgp.py --multiple-images --profile {{args.profile}} {{args.mode ? args.mode : ''}} {{args.compile ? '--compile' : ''}} {{args.attention ? args.attention : ''}}",    // Edit with your custom commands
            //"python gradio_server.py --multiple-images --profile {{args.profile}} {{args.mode ? args.mode : ''}} {{args.compile ? '--compile' : ''}} {{args.attention ? args.attention : ''}}",    // Edit with your custom commands
          ],
          on: [{
            "event": "/http:\/\/[0-9.:]+/",   
            "done": true
          }]
        }
      },
      {
        // This step sets the local variable 'url'.
        // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
        method: "local.set",
        params: {
          // the input.event is the regular expression match object from the previous step
          url: "{{input.event[0]}}"
        }
      }
    ]
  }
}

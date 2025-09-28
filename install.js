module.exports = {
  run: [
    {
      when: "{{gpu === 'amd' || platform === 'darwin'}}",
      method: "notify",
      params: {
        html: "This app requires an NVIDIA GPU. Not compatible with AMD GPUs and macOS."
      },
      next: null
    },
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/deepbeepmeep/Wan2GP app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
//    {
//      method: "shell.run",
//      params: {
//        venv: "env",                // Edit this to customize the venv folder path
//        path: "app",                // Edit this to customize the path to start the shell from
//        message: [
//          "uv pip install numpy==1.24.4"
//        ]
//      }
//    },
    {
      method: 'input',
      params: {
        title: 'Installation completed',
        description: 'Click "Start" on the left sidebar to get started'
      }
    },

//    {
//      method: "fs.link",
//      params: {
//        venv: "app/env"
//      }
//    },
  ]
}

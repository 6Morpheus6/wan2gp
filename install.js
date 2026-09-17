module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [{
      when: "{{platform!== 'darwin' && vram < 6}}",
      method: "input",
      params: {
        title: "Your system does not meet the minimum requirements for Wan2GP",
        description: "You need a dedicated GPU with at least 6 GB VRAM and at least 16 GB System RAM to run Wan2GP." 
      },
      next: null
    },
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/deepbeepmeep/Wan2GP app"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv_python: "3.11",
          venv: "env",
          path: "app",
          xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt --index-strategy unsafe-best-match",
          "uv pip install hf-xet pip comtypes"
        ]
      }
    },
    {
      when: "{{platform === 'win32' && gpu === 'amd'}}",
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: "uv pip install numpy==1.26.4"
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation completed"
      }
    }
  ]
}

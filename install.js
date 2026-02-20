module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/deepbeepmeep/Wan2GP app",
        ]
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
          "uv pip install hf-xet pip"
        ]
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

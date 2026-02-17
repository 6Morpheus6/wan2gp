module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "fs.rm",
    params: {
      path: "app/env"
    }
  }, {
    method: "script.start",
    params: {
        uri: "install.js"
    }
  }]
}
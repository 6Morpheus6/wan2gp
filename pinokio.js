const path = require('path')
module.exports = {
  version: "3.7",
  title: "Wan2GP",
  description: "Super Optimized Gradio UI for AI video creation for GPU poor machines (6GB+ VRAM). Supports Wan 2.1/2.2, Qwen, Hunyuan Video, LTX Video and Flux. https://github.com/deepbeepmeep/Wan2GP",
  icon: "icon.jpg",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-power-off",
          text: "Advanced",
          menu: [{
            icon: "fa-solid fa-power-off",
            text: "Compiled (Faster but may not work)",
            href: "start.js",
            params: {
              compile: true
            }
          }]
        }, {
          icon: "fa-regular fa-folder-open",
          text: "T2V Loras (save lora files here)",
          href: "app/loras",
          fs: true
        }, {
          icon: "fa-regular fa-folder-open",
          text: "I2V Loras (save lora files here)",
          href: "app/loras_i2v",
          fs: true
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
/*
        return [{
          icon: "fa-solid fa-power-off",
          text: "<div>VACE</div>",
          href: "start.js",
          params: {
            profile: 4,
            mode: "--vace"
          }
        }, {
          icon: "fa-solid fa-power-off",
          text: "<div>Text-to-Video</div>",
          menu: [{
            icon: "fa-solid fa-power-off",
            text: "14B Model",
            href: "start.js",
            params: {
              profile: 4,
              mode: "--t2v-14B"
            }
          }, {
            icon: "fa-solid fa-power-off",
            text: "1.3B Model",
            href: "start.js",
            params: {
              profile: 4,
              mode: "--t2v-1-3B"
            }
          }]
        }, {
          icon: "fa-solid fa-power-off",
          text: "<div>Image-to-Video</div>",
          menu: [{
            icon: "fa-solid fa-power-off",
            text: "14B Model",
            href: "start.js",
            params: {
              profile: 4,
              mode: "--i2v-14B",
            }
          }, {
            icon: "fa-solid fa-power-off",
            text: "1.3B Model",
            href: "start.js",
            params: {
              profile: 4,
              mode: "--i2v-1-3B"
            }
          }]
        }, {
          icon: "fa-solid fa-power-off",
          text: "Advanced",
          menu: [{
            icon: "fa-solid fa-power-off",
            text: "Compiled (Faster but may not work)",
            menu: [{
              icon: "fa-solid fa-power-off",
              text: "Text-to-Video",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "14B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--t2v-14B",
                  compile: true
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "1.3B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--t2v-1-3B",
                  compile: true
                }
              }]
            }, {
              icon: "fa-solid fa-power-off",
              text: "Image-to-Video",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "14B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--i2v-14B",
                  compile: true
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "1.3B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--i2v-1-3B",
                  compile: true
                }
              }]
            }]
          }, {
            icon: "fa-solid fa-power-off",
            text: "SDPA (Try if you get blank videos)",
            menu: [{
              icon: "fa-solid fa-power-off",
              text: "Text-to-Video",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "14B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--t2v-14B",
                  attention: "--attention sdpa",
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "1.3B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--t2v-1-3B",
                  attention: "--attention sdpa",
                }
              }]
            }, {
              icon: "fa-solid fa-power-off",
              text: "Image-to-Video",
              menu: [{
                icon: "fa-solid fa-power-off",
                text: "14B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--i2v-14B",
                  attention: "--attention sdpa",
                }
              }, {
                icon: "fa-solid fa-power-off",
                text: "1.3B Model",
                href: "start.js",
                params: {
                  profile: 4,
                  mode: "--i2v-1-3B",
                  attention: "--attention sdpa",
                }
              }]
            }]
          }]
        }, {
          icon: "fa-regular fa-folder-open",
          text: "T2V Loras (save lora files here)",
          href: "app/loras",
          fs: true
        }, {
          icon: "fa-regular fa-folder-open",
          text: "I2V Loras (save lora files here)",
          href: "app/loras_i2v",
          fs: true
//        }, {
//          icon: "fa-solid fa-compact-disc",
//          text: "1-Click LoRA Download",
//          menu: [{
//            icon: "fa-solid fa-question",
//            text: "How to use these LoRAs",
//            href: "https://huggingface.co/collections/Remade-AI/wan21-14b-480p-i2v-loras-67d0e26f08092436b585919b",
//            popout: true
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Squish",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Squish/resolve/main/squish_18.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Rotate",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Rotate/resolve/main/rotate_20_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Inflate",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Inflate/resolve/main/inflate_20_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Cakeify",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Cakeify/resolve/main/cakeify_16_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Deflate",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Deflate/resolve/main/deflate_20_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Crush",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Crush/resolve/main/crush_20_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Gun-Shooting",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Gun-Shooting/resolve/main/gun_20_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }, {
//            icon: "fa-solid fa-compact-disc",
//            text: "Muscle",
//            href: "mix/Remade-AI/download.json",
//            params: {
//              uri: "https://huggingface.co/Remade-AI/Muscle/resolve/main/muscle_18_epochs.safetensors",
//              path: "../../app/loras_i2v"
//            }
//          }]
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
*/

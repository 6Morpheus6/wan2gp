module.exports = {
  run: [
    // windows GTX10 / GTX16
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia' && kernel.gpu_model && / (10|16)\\d+/.test(kernel.gpu_model)}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu128 --force-reinstall --no-deps"
        ]
      },
      "next": null
    },
    // windows RTX20
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia' && kernel.gpu_model && / 20.+/.test(kernel.gpu_model)}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall --no-deps",
          "uv pip install -U triton-windows",
          "uv pip install sageattention==1.0.6"
        ]
      },
      "next": null
    },
    // windows RTX50
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia' && kernel.gpu_model && / 50.+/.test(kernel.gpu_model)}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall --no-deps",
          "uv pip install -U triton-windows",
          "uv pip install https://github.com/woct0rdho/SageAttention/releases/download/v2.2.0-windows.post4/sageattention-2.2.0+cu130torch2.9.0andhigher.post4-cp39-abi3-win_amd64.whl",
          "uv pip install https://github.com/mjun0812/flash-attention-prebuild-wheels/releases/download/v0.7.13/flash_attn-2.8.3+cu130torch2.10-cp311-cp311-win_amd64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/Light2xv/lightx2v_kernel-0.0.2+torch2.10.0-cp311-abi3-win_amd64.whl",
          "uv pip install https://github.com/nunchaku-ai/nunchaku/releases/download/v1.2.1/nunchaku-1.2.1+cu13.0torch2.10-cp311-cp311-win_amd64.whl"
        ]
      },
      "next": null
    },
    // windows RTX30 / RTX40
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall --no-deps",
          "uv pip install -U triton-windows",
          "uv pip install https://github.com/woct0rdho/SageAttention/releases/download/v2.2.0-windows.post4/sageattention-2.2.0+cu130torch2.9.0andhigher.post4-cp39-abi3-win_amd64.whl",
          "uv pip install https://github.com/mjun0812/flash-attention-prebuild-wheels/releases/download/v0.7.13/flash_attn-2.8.3+cu130torch2.10-cp311-cp311-win_amd64.whl"
        ]
      },
      "next": null
    },
    // windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "env": { "UV_SKIP_WHEEL_FILENAME_CHECK": "1" },
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torch-2.7.0a0+rocm_git3f903c3-cp311-cp311-win_amd64.whl",
          "uv pip install https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchaudio-2.7.0a0+52638ef-cp311-cp311-win_amd64.whl",
          "uv pip install https://github.com/scottt/rocm-TheRock/releases/download/v6.5.0rc-pytorch-gfx110x/torchvision-0.22.0+9eb57cd-cp311-cp311-win_amd64.whl"
        ]
      },
      "next": null
    },
    // linux GTX10 / GTX16
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia' && kernel.gpu_model && / (10|16)\\d+/.test(kernel.gpu_model)}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu128 --force-reinstall",
          "uv pip install numpy==2.1.2"
        ]
      },
      "next": null
    },
    // linux RTX20
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia' && kernel.gpu_model && / 20.+/.test(kernel.gpu_model)}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall",
          "uv pip install -U triton",
          "uv pip install ../wheel/sageattention-2.2.0-cp311-cp311-linux_x86_64.whl",
          "uv pip install numpy==2.1.2"
        ]
      },
      "next": null
    },
    // linux RTX50
    {
      "when": "{{platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall",
          "uv pip install -U triton",
          "uv pip install ../wheel/sageattention-2.2.0-cp311-cp311-linux_x86_64.whl",
          "uv pip install https://github.com/mjun0812/flash-attention-prebuild-wheels/releases/download/v0.7.16/flash_attn-2.8.3+cu130torch2.10-cp311-cp311-linux_x86_64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/Light2xv/lightx2v_kernel-0.0.2+torch2.10.0-cp311-abi3-linux_x86_64.whl",
          "uv pip install https://github.com/nunchaku-ai/nunchaku/releases/download/v1.2.1/nunchaku-1.2.1+cu13.0torch2.10-cp311-cp311-linux_x86_64.whl",
          "uv pip install numpy==2.1.2"
        ]
      },
      "next": null
    },
    // linux RTX30 / RTX40
    {
      "when": "{{platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 {{args && args.xformers ? 'xformers==0.0.34' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall",
          "uv pip install -U triton",
          "uv pip install ../wheel/sageattention-2.2.0-cp311-cp311-linux_x86_64.whl",
          "uv pip install https://github.com/mjun0812/flash-attention-prebuild-wheels/releases/download/v0.7.16/flash_attn-2.8.3+cu130torch2.10-cp311-cp311-linux_x86_64.whl",
          "uv pip install numpy==2.1.2"
        ]
      },
      "next": null
    },
    // linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "uv pip install torch==2.10.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm7.1 --force-reinstall --no-deps"
      },
      "next": null
    }
  ]
}

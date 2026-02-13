module.exports = {
  run: [
    // nvidia 50 series windows
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia' && kernel.gpu_model && / 50.+/.test(kernel.gpu_model) }}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 {{args && args.xformers ? 'xformers==0.0.33.post2' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall --no-deps",
          'uv pip install "triton-windows<3.4"',
          "uv pip install https://github.com/woct0rdho/SageAttention/releases/download/v2.2.0-windows.post4/sageattention-2.2.0+cu130torch2.9.0andhigher.post4-cp39-abi3-win_amd64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/Light2xv/lightx2v_kernel-0.0.1+torch2.9.1-cp39-abi3-win_amd64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/v1.2.0_Nunchaku/nunchaku-1.2.0+torch2.9-cp310-cp310-win_amd64.whl"
        ]
      },
      "next": null
    },
    // nvidia 50 series linux
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia' && kernel.gpu_model && / 50.+/.test(kernel.gpu_model) }}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 {{args && args.xformers ? 'xformers==0.0.33.post2' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall",
          'uv pip install ninja "triton<3.4"',
          "uv pip install git+https://github.com/thu-ml/SageAttention.git --no-build-isolation",
          "uv pip install ../wheel/sageattention-2.2.0-cp310-cp310-linux_x86_64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/Light2xv/lightx2v_kernel-0.0.1+torch2.9.1cu130-cp39-abi3-linux_x86_64.whl",
          "uv pip install https://github.com/deepbeepmeep/kernels/releases/download/v1.2.0_Nunchaku/nunchaku-1.2.0+torch2.9-cp310-cp310-linux_x86_64.whl",
          "uv pip install numpy==2.1.2"
        ]
      },
      "next": null
    },
    // windows nvidia
    {
      "when": "{{platform === 'win32'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu128 --force-reinstall --no-deps",
          "uv pip install triton-windows==3.3.1.post19",
          "uv pip install https://github.com/woct0rdho/SageAttention/releases/download/v2.2.0-windows/sageattention-2.2.0+cu128torch2.7.1-cp310-cp310-win_amd64.whl",
          "uv pip install https://huggingface.co/cocktailpeanut/wheels/resolve/main/flash_attn-2.8.2%2Bcu128torch2.7-cp310-cp310-win_amd64.whl"
        ]
      },
      "next": null
    },
    // linux nvidia
    {
      "when": "{{platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 {{args && args.xformers ? 'xformers==0.0.30' : ''}} --index-url https://download.pytorch.org/whl/cu128 --force-reinstall",
          "uv pip install https://huggingface.co/MonsterMMORPG/SECourses_Premium_Flash_Attention/resolve/main/sageattention-2.1.1-cp310-cp310-linux_x86_64.whl",
          "uv pip install uv pip install https://huggingface.co/cocktailpeanut/wheels/resolve/main/flash_attn-2.8.3%2Bcu128torch2.7-cp310-cp310-linux_x86_64.whl",
          "uv pip install numpy==2.1.2"
        ]
      }
    }
  ]
}

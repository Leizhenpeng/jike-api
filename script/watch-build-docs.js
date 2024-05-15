import { spawn } from 'node:child_process'
import chokidar from 'chokidar'

let debounceTimeout

const runCommand = (command, args) => {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { stdio: 'inherit' })
    process.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(
          new Error(`${command} ${args.join(' ')} exited with code ${code}`),
        )
      }
    })
  })
}

const rebuildDocs = async () => {
  try {
    console.log('Rebuilding docs...')
    await runCommand('pnpm', ['run', 'docs:build'])
  } catch (error) {
    console.error(error.message)
  }
}

const debounceRebuild = () => {
  if (debounceTimeout) clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(rebuildDocs, 1000) // 防抖时间设置为1秒
}

// 监听 src 目录的变化
chokidar.watch('src').on('all', () => {
  debounceRebuild()
})

await runCommand('pnpm', ['run', 'docs:preview'])

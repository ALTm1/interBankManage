import { cookies, db, log, title, open, traversalTree } from '@csii/vx-util'
function stripScript (content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

function stripStyle (content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate (content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}
const util = {
  stripScript,
  stripStyle,
  stripTemplate,
  cookies,
  db,
  log,
  title,
  open,
  traversalTree
}

export default util

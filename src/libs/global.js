import deboc from 'lodash/debounce'
import { Modal } from 'ant-design-vue'

// 防抖
export const debounce = (f, t = 1000, i = true) => {
  if (typeof f !== 'function') return

  let immediate = i ? { leading: true, trailing: false } : { leading: false, trailing: true }

  return deboc(f, t, immediate)
}

export { default as once } from 'lodash/once' // _.once(func) 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。
export { default as delay } from 'lodash/delay'

export { default as cloneDeep } from 'lodash/cloneDeep'
export { default as isEmpty } from 'lodash/isEmpty' // _.isEmpty(value) 检查 value 是否为一个空对象，集合，映射或者set。
export { default as keys } from 'lodash/keys'
export { default as isEqual } from 'lodash/isEqual'
export { default as forIn } from 'lodash/forIn'
export { default as pickBy } from 'lodash/pickBy'

export { default as find } from 'lodash/find'
export { default as each } from 'lodash/forEach'
export { default as every } from 'lodash/every'
export { default as some } from 'lodash/some'
export { default as map } from 'lodash/map'
export { default as sortBy } from 'lodash/sortBy'
export { default as uniq } from 'lodash/uniq'
export { default as sumBy } from 'lodash/sumBy'
export { default as random } from 'lodash/random'

export const confirm = (content = '是否继续？', opts = {}) => {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      title: '提示',
      content: content,
      okText: '确定',
      cancelText: '取消',
      onOk: () => resolve(),
      onCancel: () => reject(),
      ...opts
    })
  })
}

// 全局图表一致性色彩表现
export const colors = ['#01A1AC', '#739AFF', '#61a0a8', '#d48265', '#91c7ae']

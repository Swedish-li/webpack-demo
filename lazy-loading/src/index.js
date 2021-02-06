const getComponent = async () => {
  const ele = document.createElement('div')
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  ele.innerHTML = _.join(['Hello', 'Webpack!'], ' ')

  return ele
}

getComponent().then((ele) => {
  document.body.appendChild(ele)
})

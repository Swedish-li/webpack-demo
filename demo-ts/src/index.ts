
import * as Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
console.log('Hello World!')

// console.log(Velocity)
Velocity
  .animate(document.getElementsByTagName('h1'),
    { opacity: 0 },
    { duration: 3000, loop: true })

// run sequence
let ele: NodeListOf<HTMLElement> = document.getElementsByTagName('h3')

Velocity
  .animate(ele, {
    translateY: '100px',
    translateX: '300px',
    translateZ: '200px',
    rotateZ: '45deg'
  }, { duration: 2000 })
  .then(() => {
    return Velocity.animate(ele, 'reverse', { duration: 3000 })
  })
  .then(() => {
    return Velocity.animate(document.getElementsByTagName('h2'), 'fadeOut', { duration: 2000 })
  })
  .then(() => {
    Velocity.animate(document.getElementsByTagName('h2'), 'fadeIn', { duration: 1000 })
  })
  .then(() => {
    Velocity
      .animate(
        document.getElementsByTagName('h4'),
        { width: 100, height: 200, tween: [0, 1000] }, {
          easing: 'spring',
          loop: 2,
          delay: 1000,
          progress: (elements, complete, remaining, start, tweenValue) => {
            // 过程监控
            console.log((complete * 100) + '%')
            console.log(remaining + 'ms remaining!')
            console.log('The current tween value is ' + tweenValue)
          },
          begin: () => {
            console.log('start ease in sine!')
          },
          complete: (elements) => {
            // 事件执行完成钩子函数
            console.log(elements)
          }
        })
  })
// RegisterEffect,RunSequence 方法在 velocity.ui中
// 特殊效果注册
Velocity.RegisterEffect('callout.pulse', {
  defaultDuration: 900,
  calls: [
    [{ scaleX: 2, scaleY: 3 }, 0.50],
    [{ scaleX: 1, scaleY: 1 }, 0.50]
  ]
})

document.getElementById('pulse')
  .addEventListener('click', function (e: MouseEvent) {
    Velocity.animate(this, 'callout.pulse', { delay: 1000 })
  })

let nodes: NodeListOf<HTMLElement> = document.getElementsByTagName('p')
let sequence = [
  { e: nodes.item(0), p: { translateX: 100 }, o: { duration: 1000 } },
  { e: nodes.item(1), p: { translateX: 200 }, o: { duration: 1000 } },
  { e: nodes.item(2), p: { translateX: 300 }, o: { duration: 1000 } }
]

Velocity.RunSequence(sequence)
// // $.Velocity.RunSequence(sequence)
// $.Velocity.RunSequence(sequence)

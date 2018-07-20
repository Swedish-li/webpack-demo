
import * as Velocity from "velocity-animate"

console.log('Hello World!')

// console.log(Velocity)
Velocity
    .animate(document.getElementsByTagName('h1'),
        { opacity: 0 },
        { duration: 3000, loop: true })

// run sequence
let nodes: NodeListOf<HTMLElement> = document.getElementsByTagName('h3')

Velocity
    .animate(nodes,
        {
            translateY: "100px",
            translateX: "300px",
            roateZ: "45deg"
        },
        { duration: 2000 })
    .then(() => {
        return Velocity.animate(nodes, 'reverse', { duration: 3000 })
    })
    .then(() => {
        return Velocity.animate(document.getElementsByTagName('h2'), 'fadeOut', { duration: 2000 })
    })
    .then(() => {
        Velocity.animate(document.getElementsByTagName('h2'), 'fadeIn', { duration: 1000 })
    })
    .then(() => {
        Velocity
            .animate(document.getElementsByTagName('h4'),
                { width: 100, height: 200, tween: [0, 1000] },
                {
                    easing: 'spring',
                    loop: 2,
                    delay: 1000,
                    progress: (elements, complete, remaining, start, tweenValue) => {
                        // 过程监控
                        console.log((complete * 100) + "%");
                        console.log(remaining + "ms remaining!");
                        console.log("The current tween value is " + tweenValue)
                    },
                    begin: () => {
                        console.log('start ease in sine!')
                    }
                    , complete: (elements) => {
                        // 事件执行完成钩子函数
                        console.log(elements);
                    }
                })
    })

// Velocity.RegisterEffect("callout.customPulse", {
//     defaultDuration: 900,
//     calls: [
//         [{ scaleX: 1.5 }, 0.50],
//         [{ scaleX: 1 }, 0.50]
//     ]
// })


// let sequence = [
//     { e: nodes.item(0), p: { translateX: 100 }, o: { duration: 1000 } },
//     { e: nodes.item(1), p: { translateX: 200 }, o: { duration: 1000 } },
//     { e: nodes.item(2), p: { translateX: 300 }, o: { duration: 1000 } }
// ]

// // $.Velocity.RunSequence(sequence)
// $.Velocity.RunSequence(sequence)

import React from 'react'
import renderer from 'react-test-renderer'
import Clock from '../src/clock'

jest.useFakeTimers()

test(' should render clock correct ', () => {
  Date.now = jest.fn(() => 1482363367071)

  const component = renderer.create(
    <Clock />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  console.log(tree)
  expect(setInterval).toHaveBeenCalledTimes(1)

  jest.advanceTimersByTime(1000)
})

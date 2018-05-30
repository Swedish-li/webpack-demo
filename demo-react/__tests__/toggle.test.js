import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from '../src/toggle'

test('app', () => {
  const component = renderer.create(
    <Toggle />
  )

  let tree = component.toJSON()
  //   { type: 'button',
  //   props: { onClick: [Function: bound handleClick] },
  //   children: [ 'ON' ] }
  console.log(tree)
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

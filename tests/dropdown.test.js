import React, { cloneElement } from 'react'
import test from 'ava'
import sinon from 'sinon'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { mount } from 'enzyme'
import { mockAttributes, simulateExtra } from './helpers'
import Dropdown from '../src/components/dropdown'

const myCache = createCache({
  key: 'my-prefix-key-drop'
})
const drop = (value, t) => (
  <Dropdown
    value={value}
    attributes={mockAttributes}
    onSelect={t.context.onSelect}
  />
)

test.beforeEach(t => {
  t.context.onSelect = sinon.spy()

  t.context.wrapper = mount(
    <CacheProvider value={myCache}>{drop(undefined, t)}</CacheProvider>
  )
  simulateExtra(t.context.wrapper)
})

test('basic filtering', t => {
  const { wrapper } = t.context
  t.is(wrapper.state('suggestions').length, 3)
  wrapper.setProps({
    children: drop('lev', t)
  })
  t.is(wrapper.state('suggestions').length, 1)
  t.is(wrapper.state('suggestions')[0], 'level')
})

test('no more suggestions', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('levv', t)
  })
  t.is(wrapper.state('suggestions').length, 0)
})

test('shows enumerations for selected attribute', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('level:', t)
  })
  t.is(wrapper.state('suggestions').length, 2)
  t.is(wrapper.state('suggestions')[0], 'info')
  t.is(wrapper.state('selectedIdx'), 0)
})

test('adds wildcard suggestion with enums', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('level:i', t)
  })
  t.is(wrapper.state('suggestions').length, 2)
  t.is(wrapper.state('suggestions')[1], 'i*')
})

test('addon suggestions when no enumerations', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('other:', t)
  })
  t.is(wrapper.state('suggestions').length, 0)
  t.is(wrapper.state('selectedIdx'), 2)

  wrapper.setProps({
    children: drop('other:foo', t)
  })
  t.is(wrapper.state('suggestions')[0], '"foo"')
  t.is(wrapper.state('suggestions')[1], 'foo*')
})

test('suggests wildcard insite quotes', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('other:"foo b"', t)
  })
  t.is(wrapper.state('suggestions').length, 2)
  t.is(wrapper.state('suggestions')[0], '"foo b"')
  t.is(wrapper.state('suggestions')[1], '"foo b*"')
  wrapper.setProps({
    children: drop('other:"foo b*"', t)
  })
  t.is(wrapper.state('suggestions').length, 1)
  t.is(wrapper.state('suggestions')[0], '"foo b*"')
})

test('detects negation and operator', t => {
  const { wrapper } = t.context
  wrapper.setProps({
    children: drop('-response:>=400', t)
  })
  t.true(wrapper.state('negated'))
  t.is(wrapper.state('prepended'), '-')
  t.is(wrapper.state('operator'), '>=')
})

test('navigates with keyboard', t => {
  const { wrapper } = t.context
  t.is(wrapper.state('highlightedIdx'), 0)
  wrapper.simulateKey(40)
  t.is(wrapper.state('highlightedIdx'), 1)
  wrapper.simulateKey(40)
  t.is(wrapper.state('highlightedIdx'), 2)
  wrapper.simulateKey(40)
  t.is(wrapper.state('highlightedIdx'), 0)
  wrapper.simulateKey(38)
  t.is(wrapper.state('highlightedIdx'), 2)
})

test('shows correct operators for type', t => {
  const { wrapper } = t.context
  // number attribute
  wrapper.setProps({
    children: drop('http_response:', t)
  })
  t.is(wrapper.instance().getOperators().length, 4)
  // string attribute
  wrapper.setProps({
    children: drop('level:', t)
  })
  t.is(wrapper.instance().getOperators().length, 0)
})

test('suggestion is selected for attribute/value', t => {
  const { wrapper, onSelect } = t.context
  t.false(onSelect.called)
  // selecting attribute
  wrapper.simulateKey(13)
  t.true(onSelect.firstCall.calledWith('level', ':'))
  wrapper.setProps({
    children: drop('level:', t)
  })
  // selecting value
  wrapper.simulateKey(13)
  t.true(onSelect.secondCall.calledWith('level:info'))
})

test('negation is toggled', t => {
  const { wrapper, onSelect } = t.context
  // has no value yet
  wrapper.instance().setOperator('-')
  t.true(onSelect.firstCall.calledWith('-'))
  // has a value, make sure it prepends
  wrapper.setProps({
    children: drop('level', t)
  })
  wrapper.instance().setOperator('-')
  t.true(onSelect.secondCall.calledWith('-level'))
})

test('number operator is toggled', t => {
  const { wrapper, onSelect } = t.context
  // toggle on
  wrapper.setProps({
    children: drop('http_response:400', t)
  })
  wrapper.instance().setOperator('>=')
  t.true(onSelect.firstCall.calledWith('http_response:>=400'))
  // toggle off
  wrapper.setProps({
    children: drop('http_response:>=400', t)
  })
  wrapper.instance().setOperator('>=')
  t.true(onSelect.secondCall.calledWith('http_response:400'))
})

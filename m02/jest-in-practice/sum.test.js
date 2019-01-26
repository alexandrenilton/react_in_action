'use strict'
// usando es5
// const expect = require('chai').expect
// const sum = require('./sum')

// usando es5/2015
import { expect } from 'chai'
import sum from './sum'

it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})

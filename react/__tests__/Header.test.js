import React from 'react'
import { mountWithIntl, loadTranslation, setLocale } from 'enzyme-react-intl'
import Header from '../components/Header'

describe('Header test', () => {
  let wrapperPT

  beforeEach(() => {
    global.__RUNTIME__ = { account: 'store' }
    loadTranslation('../locales/pt-BR.json')
    setLocale('pt-BR')
    wrapperPT = mountWithIntl(<Header />)
  })

  it('should have 3 div elements', () => {
    expect(wrapperPT.find('div').length).toBe(3)
  })

  it('should simulate search', done => {
    window.location.replace = jest.fn()
    const seachString = 'product'
    const input = wrapperPT.find('input')
    const button = wrapperPT.find('#search').first()
    process.nextTick(() => {
      try {
        input.simulate('change', { target: { value: seachString } })
        button.simulate('click')
        wrapperPT.update()
        expect(window.location.replace).toBeCalledWith(`/s/${seachString}`)
      } catch (e) {
        return done(e)
      }
      done()
    })
  })

  it('should simulate click on cart', done => {
    window.location.replace = jest.fn()
    const button = wrapperPT.find('#cart').first()
    process.nextTick(() => {
      try {
        button.simulate('click')
        wrapperPT.update()
        expect(window.location.replace).toBeCalledWith('/cart')
      } catch (e) {
        return done(e)
      }
      done()
    })
  })

  it('should simulate filled input', done => {
    const seachString = 'product'
    const input = wrapperPT.find('input')
    process.nextTick(() => {
      try {
        input.simulate('change', { target: { value: seachString } })
        wrapperPT.update()
        expect(wrapperPT).toMatchSnapshot()
      } catch (e) {
        return done(e)
      }
      done()
    })
  })

  it('should render correctly pt-BR', () => {
    expect(wrapperPT).toMatchSnapshot()
  })

  it('should render correctly en-US', () => {
    loadTranslation('../locales/en-US.json')
    setLocale('en-US')
    const wrapperEN = mountWithIntl(<Header />)
    expect(wrapperEN).toMatchSnapshot()
  })

  it('should render correctly es-AR', () => {
    loadTranslation('../locales/es-AR.json')
    setLocale('es-AR')
    const wrapperES = mountWithIntl(<Header />)
    expect(wrapperES).toMatchSnapshot()
  })
})

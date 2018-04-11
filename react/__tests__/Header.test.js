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

  it('should have 4 div elements', () => {
    expect(wrapperPT.find('div').length).toBe(4)
  })

  it('should simulate search', done => {
    window.location.assign = jest.fn()
    const seachString = 'product'
    const input = wrapperPT.find('input')
    const button = wrapperPT.find('[data-test-id="search"]').first()
    process.nextTick(() => {
      try {
        input.simulate('change', { target: { value: seachString } })
        button.simulate('click')
        wrapperPT.update()
        expect(window.location.assign).toBeCalledWith(`/${seachString}/s`)
      } catch (e) {
        return done(e)
      }
      done()
    })
  })

  it('should simulate click on cart', () => {
    window.location.assign = jest.fn()
    const button = wrapperPT.find('[data-test-id="cart"]').first()
    button.simulate('click')
    expect(window.location.assign).toBeCalledWith('/checkout/#/cart')
  })

  it('should simulate filled input', () => {
    const seachString = 'product'
    const input = wrapperPT.find('input')
    input.simulate('change', { target: { value: seachString } })
    expect(wrapperPT).toMatchSnapshot()
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

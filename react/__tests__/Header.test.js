import React from 'react'
import { mountWithIntl, loadTranslation, setLocale } from 'enzyme-react-intl'
import Header from '../components/Header'

describe('Header test', () => {
  let wrapperPT

  beforeEach(() => {
    global.__RUNTIME__ = { account: 'account' }
    loadTranslation('../locales/pt-BR.json')
    setLocale('pt-BR')
    wrapperPT = mountWithIntl(<Header />)
  })

  it('should have 3 div elements', () => {
    expect(wrapperPT.find('div').length).toBe(3)
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

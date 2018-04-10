import React from 'react'
import { mountWithIntl, loadTranslation, setLocale } from 'enzyme-react-intl'
import Footer from '../components/Footer'

describe('Footer test', () => {
  let wrapperPT

  beforeEach(() => {
    loadTranslation('../locales/pt-BR.json')
    setLocale('pt-BR')
    wrapperPT = mountWithIntl(<Footer />)
  })

  it('should render correctly pt-BR', () => {
    expect(wrapperPT.getElement()).toMatchSnapshot()
  })

  it('should be a footer element', () => {
    expect(wrapperPT.find('footer').length).toBe(1)
  })

  it('should render correctly en-US', () => {
    loadTranslation('../locales/en-US.json')
    setLocale('en-US')
    const wrapperEN = mountWithIntl(<Footer />)
    expect(wrapperEN).toMatchSnapshot()
  })

  it('should render correctly es-AR', () => {
    loadTranslation('../locales/es-AR.json')
    setLocale('es-AR')
    const wrapperES = mountWithIntl(<Footer />)
    expect(wrapperES).toMatchSnapshot()
  })
})

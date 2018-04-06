import React from 'react'
import { shallow } from 'enzyme'
import { mountWithIntl, loadTranslation, setLocale } from 'enzyme-react-intl'
import { BuyButton } from '../components/BuyButton'

describe('BuyButton test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BuyButton />)
  })

  it('should render correctly', () => {
    expect(wrapper.getElement()).toMatchSnapshot()
  })

  it('should be a Button element', () => {
    expect(wrapper.is('Button')).toBe(true)
  })

  it('should simulate click', done => {
    loadTranslation('../locales/pt-BR.json')
    setLocale('pt-BR')
    const mutate = jest.fn()
    const props = { mutate, data: { orderForm: { orderFormId: 1 } } }
    const wrapper = mountWithIntl(<BuyButton {...props} />)
    const button = wrapper.find('button')
    process.nextTick(() => {
      try {
        button.simulate('click')
        wrapper.update()
        expect(mutate.mock.calls.length).toBe(1)
      } catch (e) {
        return done(e)
      }
      done()
    })
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../components/Footer'

describe('Footer test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('should render correctly', () => {
    expect(wrapper.getElement()).toMatchSnapshot()
  })

  it('should be a footer element', () => {
    expect(wrapper.is('footer')).toBe(true)
  })

  it('should be fixed', () => {
    expect(wrapper.hasClass('fixed')).toBe(true)
  })

  it('should be at the bottom', () => {
    expect(wrapper.hasClass('bottom-0')).toBe(true)
  })
})

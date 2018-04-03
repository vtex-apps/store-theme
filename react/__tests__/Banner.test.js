import React from 'react'
import { shallow } from 'enzyme'
import Banner from '../Banner'

describe('Banner test', () => {
  let wrapper

  beforeEach(() => {
    const image = ''
    wrapper = shallow(<Banner image={image} />)
  })

  it('should render correctly', () => {
    expect(wrapper.getElement()).toMatchSnapshot()
  })
})

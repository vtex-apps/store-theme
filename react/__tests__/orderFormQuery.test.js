import orderFormQuery from '../queries/orderFormQuery.gql'

describe('orderFormQuery test', () => {
  it('should be the correct query', () => {
    expect(orderFormQuery).toMatchSnapshot()
  })
})

import productQuery from '../queries/productQuery.gql'

describe('productQuery test', () => {
  it('should be the correct query', () => {
    expect(productQuery).toMatchSnapshot()
  })
})

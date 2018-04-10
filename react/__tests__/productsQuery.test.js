import productsQuery from '../queries/productsQuery.gql'

describe('productsQuery test', () => {
  it('should be the correct query', () => {
    expect(productsQuery).toMatchSnapshot()
  })
})

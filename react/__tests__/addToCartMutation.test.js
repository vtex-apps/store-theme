import addToCartMutation from '../mutations/addToCartMutation.gql'

describe('addToCartMutation test', () => {
  it('should be the correct mutation', () => {
    expect(addToCartMutation).toMatchSnapshot()
  })
})

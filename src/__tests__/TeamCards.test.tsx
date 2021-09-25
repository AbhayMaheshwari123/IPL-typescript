import renderer from 'react-test-renderer'
import Cards from '../Components/TeamCards'

it('Cards', () => {
  const component = renderer.create(<Cards />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

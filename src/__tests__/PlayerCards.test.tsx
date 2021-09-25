import renderer from 'react-test-renderer'
import Team from '../Components/PlayerCards'

it('Teams', () => {
  const match={
    url: 'teams/chennai-super-kings',
  }
  const component = renderer.create(
    <Team
      match={{
        url: '',
      }}
      {...match}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

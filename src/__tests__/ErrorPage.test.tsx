import renderer from 'react-test-renderer'
import Error from '../Components/ErrorPage'

it('Error',()=>{
    const component = renderer.create(<Error></Error>);
    const tree=component.toJSON();
    expect(tree).toMatchSnapshot();
})
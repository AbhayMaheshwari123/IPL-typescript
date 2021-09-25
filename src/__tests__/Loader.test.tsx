import renderer from 'react-test-renderer'
import Lodr from '../Components/loader'

it('Lodr',()=>{
    const component = renderer.create(<Lodr></Lodr>);
    const tree=component.toJSON();
    expect(tree).toMatchSnapshot();
})
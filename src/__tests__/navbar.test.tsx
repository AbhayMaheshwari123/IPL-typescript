import renderer from 'react-test-renderer'
import Navbar from '../Components/Navbar'

it('Navbar',()=>{
    const component = renderer.create(<Navbar></Navbar>);
    const tree=component.toJSON();
    expect(tree).toMatchSnapshot();
})
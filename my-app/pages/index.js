import fetch from 'isomorphic-fetch';
import * as ReactDOM from 'react-dom';
var vm = require('vm');

const Index = (props) => {
    let sandbox = {'React': React, 'ReactDOM': ReactDOM, 'MyComponent': null, 'self': {}};
    vm.runInNewContext(props.MyComponent, sandbox);
    const MyComponent = sandbox.MyComponent.default;
    return (
    <div>
      <p>Hello from Next.js</p>
      <MyComponent />
    </div>
)}

Index.getInitialProps = async function() {

    const res = await fetch('http://localhost:3001/MyComponent.bundle.js')
    const script = await res.text()

    return { MyComponent: script }
}

export default Index
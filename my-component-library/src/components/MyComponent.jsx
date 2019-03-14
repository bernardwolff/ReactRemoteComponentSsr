import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const jsonApi = 'https://jsonplaceholder.typicode.com/todos/1';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {data: {msg: 'data not loaded'}};
    }
    componentDidMount() {
        fetch(jsonApi)
        .then(response => response.json())
        .then(json => this.setState({data: json}))
        .catch(err => console.log(err));
    }
    render() {
        return (
        <div style={{border: '1px solid black'}}>
            <h1>My Component</h1>
            This data was fetched from an API:
            <pre>
                {JSON.stringify(this.state.data)}
            </pre>
        </div>
        );
    }
}

export default MyComponent;
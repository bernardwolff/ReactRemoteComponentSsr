import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const jsonApi = 'https://jsonplaceholder.typicode.com/todos/1';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {data: {msg: 'data not loaded'}};
    }
    componentDidMount() {
        // This never gets executed when rendering the component server-side.
        // This is "correct" since componentDidMount is not supposed to execute server-side.
        // Where can I do this fetch?
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

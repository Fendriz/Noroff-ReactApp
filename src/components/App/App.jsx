// imports
import React from 'react';
import Layout from './../Layout/Layout';
import './../../styles/app.scss';


export default class App extends React.Component {

    componentDidMount(){
    }

    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
        );
    }
}

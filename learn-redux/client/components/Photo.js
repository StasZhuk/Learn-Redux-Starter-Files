import React, { Component } from 'react';

export default class Photo extends Component  {
    render() {
        return (
            <figure className="grid-figure">
                <img src={this.props.post.display_src} />
            </figure>
        );
    }
};

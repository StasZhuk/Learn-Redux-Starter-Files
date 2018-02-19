import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
    render() {
        const photos = JSON.stringify(this.props.posts, null, ' ');

        return (
            <div className="photo-grid">
                {
                    this.props.posts.map((post, i) => {
                        return <Photo key={i} i={i} post={post} />
                    })
                }
            </div>
        );
    }
}

export default PhotoGrid;
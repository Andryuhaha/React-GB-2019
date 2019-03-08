import React from 'react';
import axios from 'axios';
import PostRun from './PostRun';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then.setState({post: Response.data})
    }

    render() {
        if(!this.state.post.length) {
            return null;
        }
        const post = this.state.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })

        return (
            <div>
                <h1>Посты</h1>
                {post}
            </div>
        );
    }
}
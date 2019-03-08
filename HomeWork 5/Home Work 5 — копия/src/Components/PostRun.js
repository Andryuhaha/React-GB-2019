import React from 'react';

export default class PostRun extends React.Component {
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">{this.props.post}</div>
                <div className="card-body text-secondary">
                    <p>{this.props.userId}</p>
                    <p>{this.props.id}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.body}</p>
                </div>

            </div>
        );
    }
}
import React, { Component } from 'react';

class Posts extends Component {
    render() {
        let posts = this.props.posts;
        
        if (this.props.loading) {
            return (
                <div>
                  Loading...
                </div>
            );
        }

        return (
            // Used for local testing had to switch to iterating over objects because that is how firebase stores info
            // <div className="Posts">
            //     { this.props.posts.map((post) => {
            //         return (
            //             <div>
            //                 { post.title }
            //             </div>
            //         );
            //     })}
            // </div>
            <div className="Posts">
                { Object.keys(posts).map(function(key){
                    return (
                        <div key={key}>
                            { posts[key].title }
                        </div>
                    );
                })}
            </div>    
        );
    }
}

export default Posts;

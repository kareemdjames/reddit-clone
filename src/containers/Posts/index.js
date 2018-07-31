import React, { Component } from 'react';

class Posts extends Component {

    handleUpvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote + 1,
            downvote: post.downvote
        })
    }

    handleDownvote = (post, key) => {
        this.props.firebase.ref('posts/' + key).set({
            title: post.title,
            upvote: post.upvote,
            downvote: post.downvote + 1
        })
    }

    render() {
        let posts = this.props.posts;
        let _this = this;

        if (!posts) {
            return false
        }
        
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
                            <div>Title: { posts[key].title }</div>
                            <div>Upvotes: {posts[key].upvote }</div>
                            <div>Downvotes: {posts[key].downvote }</div>
                            <div>
                                <button
                                    onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                                    type="button"
                                >Upvote
                                </button>
                                <button
                                    onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                                    type="button"
                                >Downvote
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>    
        );
    }
}

export default Posts;

import React, { Component, createContext } from 'react';
export const PostContext = createContext();

class PostContextProvider extends Component {
    state = {
        posts : []
    }
    
    setPostsList = (postList) =>{
        this.setState({
            posts : postList
        });
    }

    createPosts = (post) =>{
        this.state.posts.unshift(post)
        this.setState({
            posts : this.state.posts
        });
    }

    render() {
        return (
            <PostContext.Provider value={{ ...this.state,poststate : this.state,setPostsList : this.setPostsList,createPosts : this.createPosts}}>
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export default PostContextProvider;
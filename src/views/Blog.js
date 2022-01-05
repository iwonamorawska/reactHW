import React, { Component } from 'react'
import Post from '../components/Post';

export default class Blog extends Component {
    constructor(){
        super();
        this.state= {
            posts:[]
        }
    }
    getPosts=async ()=>{
        const res = await fetch("http://127.0.0.1:5000/api/blog/posts");
        const data= await res.json();
        console.log(data)
        this.setState({
            posts:data
        }
        )
    }
    loopThroughPosts=(listOfPosts)=>{
        return listOfPosts.map(post=> <Post post={post}/>)
    }
    //componentDidMount(){
        //this.getPosts()
    //}
    
    render() {
        return (
            <div>
                <h1>The Drag Queen Blog</h1>
                {this.loopThroughPosts(this.state.posts)}
            </div>
        )
    }
}

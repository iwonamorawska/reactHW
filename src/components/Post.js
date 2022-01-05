import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const p=this.props.posts
        return (
            <div>
                <div class="instagram-rip-off">
                    <div className="card" >
                        <img src="{ p.image }" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{ p.title }</h5>
                                <p className="card-text">{p.content }</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


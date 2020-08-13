import React, { Component } from 'react'

export class Postform extends Component {

    state= {
        title: '',
        body:''
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});    

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label> <br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label> <br/>
                        <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.onChange}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform

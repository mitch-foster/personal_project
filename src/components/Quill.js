import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import {Button} from 'react-bootstrap';
import theme from 'react-quill/dist/quill.snow.css'

class Quill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            text: '' 

            }
        this.handleChange = this.handleChange.bind(this)
        this.onPostSubmit = this.onPostSubmit.bind(this)
    }

    modules = {
        toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ],
    };
    
    formats = [
        'header',
        'bold', 'italic', 'underline',
        'list', 'bullet', 'indent',
        'left', 'center', 'right',
    ];
    
    handleChange(value) {
        this.setState({ text: value })
    }

    onPostSubmit(){
        // api call
    }
 
  render() {
    return (
        <div>
            <form action="" onSubmit={this.onPostSubmit} >
                <div>
                    <ReactQuill value={this.state.text}
                            onChange={this.handleChange} 
                            modules={this.modules}
                            formats={this.formats}/>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
    )
  }
}

export default Quill;
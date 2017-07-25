import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import theme from 'react-quill/dist/quill.snow.css'

class Quill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            text: '',
            author: this.props.author 
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleQuillChange = this.handleQuillChange.bind(this)
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
    
    handleTitleChange(e) {
        console.log('EVENT:', e.target.value)
        this.setState({ title: e.target.value })
    }
    handleDateChange(e) {
        this.setState({ date: e.target.value })
    }
    handleQuillChange(value) {
        this.setState({ text: value })
    }

    onPostSubmit(){
        axios.post('/api/createblogpost', this.state)
    }
 
    render() {
        console.log('TITLE:', this.state.title)
        console.log('DATE:', this.state.date)
        console.log('TEXT:', this.state.text)
        console.log('AUTHOR:', this.state.author)
        return (
            <div>
                <form action="" onSubmit={this.onPostSubmit} >
                    <div>
                        <div>
                            <h4>Post Title</h4>
                            <input  className='input' 
                                    type="text" 
                                    value={this.state.title}
                                    onChange={this.handleTitleChange} 
                            />
                        </div>
                        <div>
                            <h4>Post Date (Jan 1, 20XX)</h4>
                            <input  className='input' 
                                    type="text" 
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                            />
                        </div>
                        <div>
                            <h4>Post Text</h4>
                            <ReactQuill value={this.state.text}
                                        onChange={this.handleQuillChange} 
                                        modules={this.modules}
                                        formats={this.formats}
                            />
                        </div>
                    </div>
                    <Button>Submit</Button>
                </form>
            </div>
        )
  }
}

export default Quill;
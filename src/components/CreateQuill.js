import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios';
import theme from 'react-quill/dist/quill.snow.css'

class Quill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            teaser: '',
            date: '',
            text: '',
            authorid: this.props.author 
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleTeaserChange = this.handleTeaserChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleQuillChange = this.handleQuillChange.bind(this)
        this.onPostSubmit = this.onPostSubmit.bind(this)
    }

    modules = {
        toolbar: [
        [{ 'header': [2, 3, 4, 5, 6, false] }],
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
        this.setState({ title: e.target.value })
    }
    handleTeaserChange(e) {
        this.setState({ teaser: e.target.value })
    }
    handleDateChange(e) {
        this.setState({ date: e.target.value })
    }
    handleQuillChange(value) {
        this.setState({ text: value })
    }

    onPostSubmit(e){
        e.preventDefault()
        axios.post('/api/createblogpost', this.state).then( response => this.props.history.push('/adminblog'))
    }
 
    render() {
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
                            <h4>Post Teaser</h4>
                            <input  className='input' 
                                    type="text" 
                                    value={this.state.teaser}
                                    onChange={this.handleTeaserChange} 
                            />
                        </div>
                        <div>
                            <h4>Post Date (Jan 1st, 20XX)</h4>
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
                    <button className='button'>Submit</button>
                </form>
            </div>
        )
  }
}

export default Quill;
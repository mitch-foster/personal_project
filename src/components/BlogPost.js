// import React, { Component } from 'react';
// import axios from 'axios';
// import NavBar from './NavBar';
// import loading from './loading.gif'


// class BlogPost extends Component {
//         constructor(props){
//             super(props);
//             this.state = {
//                 postId: this.props.params.postId,
//                 post: [],
//                 loading: true,
//             }

//         }
//          componentDidMount(){
//             const URL = `http://localhost:3333/api/getblogpost/${postId}`;
//             axios.get(URL).then(response=>{this.setState({post: response.data, loading: false})})
//         }
//     render() {
//         if(this.state.loading === true){
//             return (
//                 <div>
//                     <NavBar className='NavBar'/>
//                     <img src={loading}/>
//                 </div>    
//             )
//         }
//         return (
//             <div>
//                 <NavBar className='NavBar'/>
//                 <div className='blog_div'>    
//                     <h1>{post[0].title}</h1>
//                     <h4>{post[0].date}</h4>
//                     <h4>{post[0].text}</h4>
//                 </div>
//             </div>
//         );
//     }
// }

// export default BlogPost;
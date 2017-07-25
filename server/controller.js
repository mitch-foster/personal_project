module.exports = {
    getBlogPosts: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.readBlogPosts()
            .then( posts => res.status(200).send(posts))
            .catch( err => res.status(500).send(err))
    },

    getBlogPost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        dbInstance.readBlogPost([params.postid])
            .then( posts => res.status(200).send(posts))
            .catch( err => res.status(500).send(err))
    },

    createBlogPost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const x = req.body;
        console.log('x:', x)
        dbInstance.createPost([x.title, x.date, x.authorid. x.text])
            .then(res.status(200).send('SUCCESS!'))
            .catch( err => res.status(500).send(err))
    }
}
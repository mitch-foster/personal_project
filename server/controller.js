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
        console.log('req.body:', req.body)
        dbInstance.createPost([req.body.title, req.body.date, req.body.authorid, req.body.text])
            .then(() => res.status(200).send('SUCCESS!'))
            .catch( err => res.status(500).send(err))
    },

    editBlogPost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('req.body:', req.body)
        dbInstance.editPost([req.body.postid, req.body.title, req.body.date, req.body.text])
            .then(() => res.status(200).send('SUCCESS!'))
            .catch( err => res.status(500).send(err))
    }


}
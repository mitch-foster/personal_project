module.exports = {
    getBlogPosts: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.readBlogPosts()
            .then( posts => res.status(200).send(posts))
            .catch( err => res.status(500).send(err))
    }
}
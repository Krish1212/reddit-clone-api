import db from './../models'

const commentController = {};

commentController.post = (req, res)=>{
    const {
        text,
        userId,
        postId
    } = req.body;

    //Validation should go here - either text or link should be tested and not both

    const comment = new db.Comment({
        text,
        _post:postId,
        _creator:userId
    });

    comment.save().then((newComment) => {
        db.Post.findByIdAndUpdate(
            postId, {
                $push : {
                    _comments : newComment._id
                }
            }
        ).then((existingPost) => {
            res.status(200).json({
                success : true,
                data : newComment,
                existingPost
            });
        }).catch((err) => {
            res.status(500).json({
                message : err
            });            
        });
    }).catch((err) => {
        res.status(500).json({
            message : err
        });
    });

}

export default commentController;
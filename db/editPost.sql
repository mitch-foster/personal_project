UPDATE blog 
SET 
    title = $2,
    teaser =$3, 
    date = $4, 
    text = $5

WHERE postid = $1;
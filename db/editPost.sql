UPDATE blog 
SET 
    title = $2, 
    date = $3, 
    text = $4

WHERE postid = $1;
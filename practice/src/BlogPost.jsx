function BlogPost({author,title,desc}){

    return(
        <div class="blog">
            <p>Author: {author}</p>
            <p>Title: {title}</p>
            <p>Description: {desc}</p>
        </div>
    )
}
export default BlogPost
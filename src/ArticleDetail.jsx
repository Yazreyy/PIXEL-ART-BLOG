

function ArticleDetail(props){
    
    return(
        <main className="container">
            <button onClick = {() => props.setSelectedArticle(null)} className="back-link">← Retour à l'accueil</button>

            <article className="article-detail">
                <span className="category">{props.article.category}</span>
                <h2>{props.article.title}</h2>
                <p className="date">{props.article.date}</p>
                <hr/>
                <p>
                    {props.article.content}
                </p>
            </article>
        </main>
        )
}

export default ArticleDetail


function Card(props) {
     return (
                <article className="card">
                    <span className="category">{props.article.category}</span>
                    <h3>{props.article.title}</h3>
                    <p className="date">{props.article.date}</p>
                    <p>{props.article.excerpt}</p>
                    <button onClick = {() => props.setSelectedArticle(props.article)}  className="btn">Lire la suite →</button>
                </article>
            )
}

export default Card
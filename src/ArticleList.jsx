import Data from './Data.json'
import Card from './Card'

function ArticleList(props){
return(
    <div className="blog-grid">
    {Data.map((article) => (
        <Card key = {article.id} article = {article} setSelectedArticle = {props.setSelectedArticle} />
))}
    </div>
    
    ) 
    
}

export default ArticleList
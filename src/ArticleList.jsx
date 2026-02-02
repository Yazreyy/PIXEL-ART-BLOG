import Data from './Data.json'
import {useState} from 'react'
 import Card from './Card'

function ArticleList(props){
    
    const [SelectedCategory, setSelectedCategory] = useState("Toutes");
    
    const filtreArticle = Data.filter((article) => {
        if(SelectedCategory === "Toutes"){
            return true;
        }else {
            return article.category === SelectedCategory
        }
    })
    
   
return(
    <>
    <div className = "list-btn">
    <button onClick = {() => setSelectedCategory("Toutes")}> Toutes </button>
    <button onClick = {() => setSelectedCategory("Tutoriel")}> Tutoriel </button>
    <button onClick = {() => setSelectedCategory("Animation")}>Animation</button>
    <button onClick = {() => setSelectedCategory("Design")}>Design</button>
    <button onClick = {() => setSelectedCategory("Théorie")}>Théorie</button>
    <button onClick = {() => setSelectedCategory("Outils")}>Outils</button>
    <button onClick = {() => setSelectedCategory("Technique")}>Technique</button>
    </div>
    
    <div className="blog-grid">
    
    
    {filtreArticle.map((article) => (
        <Card key = {article.id} article = {article} setSelectedArticle = {props.setSelectedArticle} />
))}
    </div>
    </>
    
    ) 
    
}

export default ArticleList
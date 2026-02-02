import './App.css'
import {useState} from 'react'
import ArticleList from './ArticleList'
import ArticleDetail from './ArticleDetail'

function App() {
 const [SelectedArticle, setSelectedArticle] = useState(null);
 
 let page
  if (SelectedArticle === null) {
    page = <ArticleList setSelectedArticle={setSelectedArticle} />
  } else {
    page = <ArticleDetail 
      article={SelectedArticle} 
      setSelectedArticle={setSelectedArticle} 
    />
  }
  
  
 return (
    <div>
      <header>
        <h1>PIXEL ART BLOG</h1>
        <p>L'art du carré parfait</p>
      </header>
      
      <main className="container">
      {page}
      </main>
    </div>
  )
}

export default App
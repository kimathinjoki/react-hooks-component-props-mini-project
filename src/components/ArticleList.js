import React from "react";
import Article from "./Article";



function ArticleList(posts){

    const article = posts.map((articles)=>(<Article key={articles.id} title={articles.title} date={articles.date} preview={articles.preview} />))

    return (
        <main>
            {article}

        </main>
      
    )
}

export default ArticleList
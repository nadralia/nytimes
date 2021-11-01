import React, {useState, useEffect} from 'react'
import axios from 'axios'


function ArticleList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=hjOa0PgKqC7zm86P10F3BQkTuLsEV4wh')
            .then(res => {
                console.log(res.data.results)
                setArticles(res.data.results)

            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <ul>
                {
                   articles.map((article, i) => <li key={i}> {article.display_title}</li>) 
                }
            </ul>
            
        </div>
    )
}

export default ArticleList

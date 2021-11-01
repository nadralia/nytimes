import React from 'react'
import Loader from '../Loader'
import ArticleCard from '../ArticleCard'
import { useAxiosGet } from '../../Hooks/HttpRequests'


function ArticleList() {

    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=yidSPzAiN2A000QQyLTBTX4lsNb38HPH`
    let articles = useAxiosGet(url)

    let content = null

    if(articles.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(articles.loading){
        content = <Loader></Loader>
    }

    if(articles.data){
        content = 
        articles.data.results.map((article) => 
            <div key={article.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ArticleCard
                    article={article}
                />
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default ArticleList

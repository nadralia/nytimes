import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import { useAxiosGet } from '../../Hooks/HttpRequests'

function Article() {

    const { id } = useParams()
    const url = `/${id}`
    
    let article = useAxiosGet(url)

    let content = null

    if(article.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(article.loading){
        content = <Loader></Loader>
    }

    if(article.data){
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {article.data.name}
            </h1>
            <div>
                <img
                    src={article.data.images[0].imageUrl}
                    alt={article.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {article.data.price}
            </div>
            <div>
                {article.data.description}
            </div>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Article

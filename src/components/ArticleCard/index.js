import React from 'react'
import {Link} from 'react-router-dom'

function ArticleCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/articles/${props.article.id}`}>
                        { props.article.title }
                    </Link>    
                </h3>
                <div className="mb-3">
                    { props.article.abstract }
                </div>
                <div className="mb-3">
                 { props.article.byline }
                </div>
                <div className="mb-3">
                 { props.article.published_date }
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
import React from 'react'


export default function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='my-3'>
            <div className="card" >
                <div>
                    <span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        {source}

                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://media.timeout.com/images/101716017/image.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>

                </div>
            </div>

        </div>
    )

}

import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, url,author,date} = this.props;
    const defaultImageUrl = 'https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg';
    return (
    
    <div className='my-4'>
        <div className="card" >
             {/* <img src={!imageUrl?"https://media.zenfs.com/en/bloomberg_markets_842/b589169afd23c534835ea04145db9c47":imageUrl} className="card-img-top" alt="..."/> */}
             {/* <img src={!imageUrl?"https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg":imageUrl} className="card-img-top" alt="..."/> */}
             {/* {imageUrl && <img src={imageUrl} className="card-img-top" alt="..." />} */}
             {imageUrl ? (
            <img src={imageUrl} className="card-img-top" alt="..." />
          ) : (
            <img src={defaultImageUrl} className="card-img-top" alt="Default" />
          )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknow":author} on {new Date(date).toGMTString()}</small></p>

                <a href={url}  rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>

    )
  }
}

export default NewsItem
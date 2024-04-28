import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:3,
    category:"general"

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }
  // articles=[
    
  //     {
  //       "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
  //       "author": "Duncan Huntsdale",
  //       "title": "Food poisoning, marriage proposals and water buffalo urine — the 1984 Australian women's cricket tour of India was a wild ride",
  //       "description": "As Australia's women start their tour of India, former skipper Jill Kennare shares the wild stories of the team's first visit to the country in 1984.",
  //       "url": "https://www.abc.net.au/news/2023-12-21/india-vs-australia-womens-cricket-jill-kennare-on-1984-tour/103170096",
  //       "urlToImage": "https://live-production.wcms.abc-cdn.net.au/d6a549ef64cd18ea89d902d86c30b5c1?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=0&width=862&height=485",
  //       "publishedAt": "2023-12-20T20:44:15Z",
  //       "content": "There will be a sense of familiarity for the Australian women's cricket team as they tour India this month.\r\nMany have played in the Indian Women's Premier League and will be up against opponents who… [+8610 chars]"
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
    
  // ]

  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
    document.title=`${this.props.category} - NewHere`;

  }
  async update (){
    this.props.setprogress(30);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.props.setprogress(30);
  let parsedData = await data.json();
  this.props.setprogress(70);
  console.log(parsedData);
  this.setState({
    articles : parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false
  })
  this.props.setprogress(100);
  }
  async componentDidMount(){

  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&pagesize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
 
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles : parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading:false
  // })
  this.update()


 }
//  nextclick= async()=>{
//   this.setState({
//     page:this.state.page+1
//   })
//   this.update()

  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
  // this.setState({loading:true});
  // let data = await fetch(url);
 
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   page:this.state.page + 1,
  //   articles : parsedData.articles,
  //   loading:false
  // })


 
//  prevclick= async ()=>{
//   // https://newsapi.org/v2/top-headlines/sources?apiKey=881ca5a02e124b93a636ce85d5da0c34
//   // https://newsapi.org/v2/top-headlines?country=us&apiKey=881ca5a02e124b93a636ce85d5da0c34
//   // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=881ca5a02e124b93a636ce85d5da0c34

  
//   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
//   // this.setState({loading:true});
//   // let data = await fetch(url);
 
//   // let parsedData = await data.json();
//   // console.log(parsedData);
//   // this.setState({
//   //   page:this.state.page - 1,
//   //   articles : parsedData.articles,
//   //   loading:false
//   // })

//   this.setState({
//     page:this.state.page-1
//   })
//   this.update()

//  }

fetchMoreData = async () => {
  if (this.state.articles.length === this.state.totalResults) {
    // All articles have been loaded, stop further fetching
    return;
  }

  const nextPage = this.state.page + 1;
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=${nextPage}&pagesize=${this.props.pageSize}`;
  
  try {
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState((prevState) => ({
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      page: nextPage,
    }));
  } catch (error) {
    console.error("Error fetching more data:", error);
  }
};

//  fetchMoreData=async()=>{
//    if (this.state.articles.length === this.state.totalResults) {
//     // All articles have been loaded, stop further fetching
//     return;
//   }
//   // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=1

//   this.setState({page:this.state.page + 1})
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=881ca5a02e124b93a636ce85d5da0c34&page=${this.state.page}&pagesize=${this.props.pageSize}`;
//   // this.setState({loading:true});
//   let data = await fetch(url);
 
//   let parsedData = await data.json();
//   console.log(parsedData);
//   this.setState({
//     articles : this.state.articles.concat(parsedData.articles),
//     totalResults: parsedData.totalResults,
//   })
  
//  }



  render() {
    
    return (
      <>
      <div className="container">
        <h1>newsHere -Top HeadLines</h1>
        {this.state.loading && <Spiner/>}
        </div>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spiner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container my-2 d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.prevclick} type="button" className="btn btn-dark">Previous</button>
          <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextclick} type="button" className="btn btn-dark  ">Next</button>
        </div> */}
      </>
    );
  }
}

export default News
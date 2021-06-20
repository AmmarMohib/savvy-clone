import React, { Component } from "react";
import ReactDOM from "react-dom";
import Head from "next/Head";
//import './news.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class News extends Component {
  state = {
    loading: false,
    data: [],
    headline: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log("app mounted");
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5"
    )
      .then(data => data.json())
      .then(data =>
        this.setState({ data: data.articles, loading: false }, () =>
          console.log(data.articles)
        )
      );
  }

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h1 className="text-left">
            <b>Pakistan's First 7 Star School</b>
          </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive}>
                {this.state.data.map((post, indx) => {
                  return (
                    <div className="card text-left mt-5" key={indx}>
                      <img
                        style={{ height: "100px" }}
                        src={post.urlToImage}
                        alt="Alt text"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
        <div className="about container">
          <h1 className="text-left">
            <b>latest news</b>
          </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive}>
                {this.state.data.map((post, indx) => {
                  return (
                    <div className="card text-left mt-5" key={indx}>
                      <img
                        style={{ height: "100px" }}
                        src={post.urlToImage}
                        alt="Alt text"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
          </div>  
          <div className="about container">
          <h1 className="text-left">
          <h1 className="n">Events</h1>
                    </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel responsive={responsive}>
                {this.state.data.map((post, indx) => {
                  return (
                    <div className="card text-left mt-5" key={indx}>
                      <img
                        style={{ height: "100px" }}
                        src={post.urlToImage}
                        alt="Alt text"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
          </div>       
          <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img
        src="https://avatars.githubusercontent.com/u/66912469?v=4"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
}
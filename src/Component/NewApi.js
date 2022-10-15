import React, { useState } from "react";
import axios from "axios";

const NewApi = () => {
  const [news, setNews] = useState([]);

  //function that is used to fetch the api data
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=fb5fbef1113748a1bc148b814379bdda"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  };
  return (
    <>
      <button className="btn btn-primary" onClick={fetchNews}>
        Get News
      </button>
      {/* <div className="container my-5">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              Get News
            </button>
          </div>
        </div>
      </div> */}
      {/* News Card */}
      <div className="container">
        <div className="row">
          {news.map((val) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={val.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewApi;

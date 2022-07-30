import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import './css/Publication.css';
import axios from "axios";
import copy from "copy-to-clipboard";  

let copyToClipboard;

const PublicationCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    authors,
    cite_data
  } = value;
  copyToClipboard= useCallback(() => {
    copy(cite_data);
    alert(`You have copied "${cite_data}"`);
  },[cite_data]);
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text style={{display: "inline"}} className="conference">{(!description)?"":stargazers_count || <Skeleton count={3} />} </Card.Text>
          <span style={{float:"right", fontWeight: "400", marginBottom: "1rem"}}>{pushed_at}</span>
          <div style={{fontSize: "0.80rem", fontStyle: "italic"}}>
            {description}
          </div>
          <div style={{marginTop:"0.5rem"}}>
            <hr style={{marginBottom: "0.5rem"}} />
            {svn_url ? <CardButtons svn_url={svn_url} languages_url={languages_url} copyText={cite_data} /> : <Skeleton count={2} />}
          </div>
          
          {authors ? (
            <CardFooter authors={authors} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url, languages_url, copyText }) => {
  return (
    <>
        <a href={svn_url} target=" _blank" className="btn btn-outline-secondary" style={{marginRight: "3px"}}>
            View
        </a>
        <button onClick={copyToClipboard} className="btn btn-outline-secondary" style={{marginRight: "3px"}}>
            Cite
        </button>
      
    </>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language} 
              className="badge badge-light card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
            >
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ authors }) => {
  return (

    <p className="card-text text-muted">
        {authors.map(function(project, index){
            var comma=(index===authors.length-1)?"":", ";
            return (<small style={{fontStyle:"italic"}} className="text-muted">{project}{comma}</small>)
        })}
    </p> 
  );
};

export default PublicationCard;
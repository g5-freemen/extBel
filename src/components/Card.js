import React from 'react';

export default function Card(props) {
  const { title, content, link, linkTitle, bg } = props.data;
  const setClass = props.setclass;

  return (
    <div className={setClass}>
      {setClass === 'project-card' && 
        <div className="project-img" style={{background: `url(${process.env.PUBLIC_URL}/${bg})`, backgroundSize: `cover`}} /> 
      }
      <div className="info">
        <span className="card-title">{title}</span>
        <p className="card-content">{content}</p>
        <a href={link} className="card-link">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}

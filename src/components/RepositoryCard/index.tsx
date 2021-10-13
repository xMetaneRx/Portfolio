import React from 'react';
import './index.scss';

const RepositoryCard = ({repository}: any = {}) => {
    const {name, description, html_url} = repository;

    return (
        <div className="repository__card">
            <a href={html_url}><h2>{name}</h2></a>
            <p>{description}</p>
        </div>
    )
}

export default RepositoryCard;
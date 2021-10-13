import React, {useState, useEffect} from 'react';
import RepositoryCard from "../RepositoryCard";
import './index.scss';

const Repository = () => {
    const [repositories, setRepositories] = useState<[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/MetaneRuS/repos')
            .then(res => res.json())
            .then(repository => setRepositories(repository));
    }, [])

    return (
        <div className="repositories">
            {repositories.map(repository => <RepositoryCard key={repository['id']} repository={repository} />)}
        </div>
    )
}

export default Repository;
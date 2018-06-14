import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './GithubLoader.css';

const GithubLoader = () => (
    <div className='loader'>
        <CircularProgress className='loaderIcon' color='secondary' size={50} thickness={5}/>
    </div>
);

export default GithubLoader;
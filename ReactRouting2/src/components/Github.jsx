import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
  /*
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/BibekChaudhary08')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error);
      });
  }, []);
  */

  return (
    <>
      <div>Github followers: {data.followers}</div>
      <img src={data.avatar_url} alt="GitHub avatar" width={200} />
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  try{
    const response = await fetch('https://api.github.com/users/BibekChaudhary08')
    return response.json();
  }
  catch(error){
    throw new Error(`Could not load github user info - ${error}`)
  }
}
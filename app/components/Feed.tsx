'use client'

import React, { useState, useEffect } from 'react';
import ImageCardList from './ImageCardList';
import { ImageProps } from './ImageProps';

const Feed = () => {
  const [feed, setFeed] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string>('');
  const [displayedTag, setDisplayedTag] = useState<string>('')

  const fetchImages = async () => {
    setLoading(true);
    try {
      const endpoint = tags ? `/api/${tags}` : '/api';
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error('Failed to fetch data from server');
      }
      const data = await res.json();
      setFeed(data.data.items);
      setError(null);
    } catch (error) {
      setError('Failed to fetch images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // fetching images without tag when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // fetching images with tag after clicking button
    fetchImages();
    setDisplayedTag(tags);
    setTags('');
  };

  return (
    <section>
      <form className='mt-8' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a tag or keyword"
          className="input input-bordered input-primary w-full max-w-xs"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button className='btn btn-primary uppercase ml-6' type="submit">
          Search
        </button>
      </form>

      {loading ? (
        <span className="loading loading-dots loading-lg mt-10"></span>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ImageCardList feed={feed} displayedTag={displayedTag}/>
      )}
    </section>
  );
};

export default Feed;

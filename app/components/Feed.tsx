'use client'

import React, { useEffect, useState } from 'react'
import ImageCardList from './ImageCardList'
import { ImageProps } from './ImageProps'

const Feed = () => {
  const [feed, setFeed] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async() => {
      setLoading(true);
      try {
        const res = await fetch('/api');
        if(!res.ok){
          throw new Error('Failed to fetch data from server')
        }
        const data = await res.json();
        setFeed(data.data.items);
      } catch (error) {
        setError('Failed to fetch images. Please try again later.')
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [])

  return (
    <section>
      <form className='mt-8'>
        <input
  type="text"
  placeholder="Search for a tag or keyword"
  className="input input-bordered input-primary w-full max-w-xs" />
      </form>
      <ImageCardList feed={feed}/>
    </section>
  )
}

export default Feed
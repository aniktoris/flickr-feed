import React from 'react'
import ImageCard from './ImageCard'
import { ImageProps } from './ImageProps'

interface ImageCardListProps {
  feed: ImageProps[];
}

const ImageCardList: React.FC<ImageCardListProps> = ({feed}) => {
  return (
    <div className='mt-16'>
      {feed.map((item: ImageProps) => (
        <ImageCard key={item.link} item={item}/>
      ))}
      </div>
  )
}

export default ImageCardList
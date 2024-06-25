import React from 'react'
import ImageCard from './ImageCard'
import { ImageProps } from './ImageProps'

interface ImageCardListProps {
  feed: ImageProps[];
  displayedTag: string;
}

const ImageCardList: React.FC<ImageCardListProps> = ({feed, displayedTag}) => {
  return (
    <div className='mt-16 flex flex-wrap gap-16'>
      {feed.map((item: ImageProps) => (
        <ImageCard key={item.link} item={item} displayedTag={displayedTag}/>
      ))}
      </div>
  )
}

export default ImageCardList
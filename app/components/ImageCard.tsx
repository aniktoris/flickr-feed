import Image from 'next/image'
import { ImageProps } from './ImageProps'

interface ImageCardProps {
  item: ImageProps;
}

const ImageCard: React.FC<ImageCardProps> = ({item}) => {

  const trimmedTitle = item.title.length > 20 ? item.title.substring(0,20) + '...' : item.title;

  const trimmedAuthor = item.author.slice(20, -2);

  return (
    <div className="card bg-base-100 w-96 h-96 shadow-xl cursor-pointer">
  <figure className="relative w-full h-full">
    <Image
      src={item.media.m}
      alt="image_flickr" 
      layout='fill'
      objectFit='cover'
      sizes='100%'
      className='transform transition-all hover:scale-125 h-0.8'/>
  </figure>
  <div className="card-body bg-secondary text-primary lowercase hover:bg-accent">
    <h2 className="card-title">
      {trimmedTitle}
      <div className="badge badge-outline">Tag</div>
    </h2>
    <p>{trimmedAuthor}</p>
  </div>
</div>
  )
}

export default ImageCard
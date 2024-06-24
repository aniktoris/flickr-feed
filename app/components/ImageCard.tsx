import Image from 'next/image'
import { ImageProps } from './ImageProps'

interface ImageCardProps {
  item: ImageProps;
}

const ImageCard: React.FC<ImageCardProps> = ({item}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <Image
      src={item.media.m}
      alt="image_flickr" 
      width={200}
      height={200}
      className='transform transition-all hover:scale-125'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-outline">Tag</div>
    </h2>
    <p>{item.author}</p>
  </div>
</div>
  )
}

export default ImageCard
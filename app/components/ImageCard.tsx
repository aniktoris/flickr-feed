import Image from 'next/image';
import { ImageProps } from './ImageProps';
import Link from 'next/link';

interface ImageCardProps {
  item: ImageProps;
  displayedTag: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, displayedTag }) => {
  const trimmedTitle =
    item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title;

  const trimmedAuthor = item.author.slice(20, -2);

  const formattedDate = new Date(item.date_taken).toLocaleDateString();

  return (
    <div className="card bg-base-100 w-96 h-96 shadow-xl cursor-pointer">
      <figure className="relative w-full h-full">
        <Link href={item.link}>
          <Image
            src={item.media.m}
            alt="image_flickr"
            fill
            sizes="100%"
            className="transform transition-all hover:scale-125 h-0.8 object-cover"
          />
        </Link>
      </figure>
      <div className="card-body bg-secondary text-primary lowercase hover:bg-accent">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{trimmedTitle}</h2>
          {displayedTag && (
            <div className="badge badge-outline ml-auto">{displayedTag}</div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p>{trimmedAuthor}</p>
          <p className="ml-auto">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

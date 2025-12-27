import Image from 'next/image'
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';
interface ResouceProps {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  tags: string[];
  resourceCount: number;
  creator: string;
  difficulty: string;
}

const Resource = ({
  id,
  thumbnail,
  title,
  category,
  tags,
  resourceCount,
  creator,
  difficulty,
}: ResouceProps) => {
  return (
    <Link
      href={`/paths/${id}`}
      className="w-full flex items-center flex-col bg-white border border-gray-400 rounded-2xl shadow-md hover:shadow-lg overflow-hidden"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="w-full"
        />
        <div className="absolute top-4 right-4 px-2 py-1 border border-gray-300 bg-blue-100 rounded-full flex items-center justify-center">
          <p className="text-xs text-gray-700">{difficulty}</p>
        </div>
      </div>
      <div className="p-4 mt-3 w-full flex flex-col">
        <div className="w-fit mb-4 grid grid-cols-3 gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-2 py-1 flex items-center justify-center bg-blue-100 rounded-full text-gray-500 text-[10px]"
            >
              {tag}
            </div>
          ))}
        </div>
        <h1 className="font-bold text-lg md:text-1xl text-gray-700 ">
          {title}
        </h1>
        <div className="w-full flex items-center mt-3">
          <FaPlayCircle className="text-gray-500 mr-2" />
          <p className="text-sm text-gray-400">{resourceCount} resources</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="mt-4 flex items-center ">
            <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
              <h1 className="font-bold text-white text-md">
                {creator[1].toUpperCase()}
              </h1>
            </div>
            <p className="ml-3 text-gray-500">{creator}</p>
          </div>
          <p className='text-sm text-gray-400'>
            {category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Resource

import { FC } from 'react';
import Link from 'next/link';

export const Links: FC = () => {
  return (
    <div className="mt-10 items-center justify-center text-center">
      <Link href="/ServerSideRendering">
        <div className="mb-5 cursor-pointer text-2xl text-blue-600">
          Server Side Rendering (SSR)
        </div>
      </Link>
      <Link href="/StaticSiteGenerator">
        <div className="mb-5 cursor-pointer text-2xl text-red-600">
          Static Site Generator (SSG)
        </div>
      </Link>
      <Link href="/ClientSideRendering">
        <div className="mb-5 cursor-pointer text-2xl text-yellow-600">
          Client Side Rendering (SSG + CSF)
        </div>
      </Link>
      <Link href="/IncrementalStaticRegeneration">
        <div className="cursor-pointer text-2xl text-green-600">
          Incremental Static Regeneration (ISR)
        </div>
      </Link>
    </div>
  );
};

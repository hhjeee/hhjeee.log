import { Heading } from '@/lib/rehypeExtractHeading';
import React from 'react';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  return (
    <nav className="absolute top-0 left-full w-[200px] h-full hidden lg:block">
      <div className="sticky ml-6 top-20">
        {headings.map((heading) => (
          <p key={heading.id} className={`ml-${heading.level * 2} my-1`}>
            <a
              href={`#${heading.id}`}
              className="text-lightGray no-underline hover:text-darkGray text-sm"
            >
              {heading.text}
            </a>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;

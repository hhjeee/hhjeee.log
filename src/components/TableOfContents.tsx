import { Heading } from '@/lib/rehypeExtractHeading';
import React from 'react';

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  return (
    <nav className="sticky top-20 ml-6">
      {headings.map((heading) => (
        <p key={heading.id} className={`ml-${heading.level * 2} my-1`}>
          <a href={`#${heading.id}`} className="text-[#6B7684] no-underline">
            {heading.text}
          </a>
        </p>
      ))}
    </nav>
  );
};

export default TableOfContents;

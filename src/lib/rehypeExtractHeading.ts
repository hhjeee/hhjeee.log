import { Root } from 'hast';
import { Element } from 'hast';
import { visit } from 'unist-util-visit';

export interface Heading {
  id: number;
  text: string;
  level: number;
}

export default function rehypeExtractHeadings(headings: Heading[]) {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (['h1', 'h2', 'h3'].includes(node.tagName)) {
        const level = Number(node.tagName[1]);
        const text = (node.children || [])
          .filter((child) => child.type === 'text')
          .map((child) => child.value)
          .join('');
        const id = tree.children.indexOf(node);

        headings.push({ id, text, level });

        node.properties.id = id;
      }
    });
  };
}

import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import Image from '@site/src/components/image/Image'; 
export default function MDXContent({children}) {
  return <MDXProvider components={{...MDXComponents,Image}}>{children}</MDXProvider>;
}

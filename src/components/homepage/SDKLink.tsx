import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

function SDKLink({ href, Icon, label, disabled = false }) {
    return (
      <Link
        className={clsx(
          'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
          disabled && 'cursor-default'
        )}
        href={!disabled ? href : undefined}
      >
        <Icon className="h-8 w-8" />
        {label}
      </Link>
    );
  }

export default SDKLink;
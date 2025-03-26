
import React, { useEffect } from 'react';

const TwitterEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        Wow, I’m glad so many people love Canada too 🤗{' '}
        <a href="https://t.co/5oOL05zawB">pic.twitter.com/5oOL05zawB</a>
      </p>
      &mdash; Elon Musk (@elonmusk){' '}
      <a href="https://twitter.com/elonmusk/status/1686058966705487875?ref_src=twsrc%5Etfw">
        July 31, 2023
      </a>
    </blockquote>
  );
};

export default TwitterEmbed;

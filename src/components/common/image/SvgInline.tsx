import React, { useEffect, useState } from 'react';

export interface SvgInlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  src: string;
  fallback?: React.ReactNode;
}

const SvgInline: React.FC<SvgInlineProps> = ({
  src,
  fallback = null,
  ...spanProps
}) => {
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setSvgMarkup(null);
    setError(null);

    fetch(src)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const text = await res.text();
        if (!isMounted) return;
        setSvgMarkup(text);
      })
      .catch((e) => isMounted && setError(e));

    return () => {
      isMounted = false;
    };
  }, [src]);

  if (error) {
    // Fail loudly; change to a silent fail if you prefer
    return <span {...spanProps}>⚠️ failed to load SVG: {error.message}</span>;
  }

  if (!svgMarkup) {
    return <span {...spanProps}>{fallback}</span>;
  }

  return (
    <span
      {...spanProps}
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};

export default SvgInline;

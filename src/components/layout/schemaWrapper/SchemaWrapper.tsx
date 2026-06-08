

import React from "react";

type Props = { children: React.ReactNode, jsonLd: any };

const SchemaWrapper = ({ children, jsonLd }: Props) => {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd, null, 2),
        }}
      />


      {children}
    </>
  )
}

export default SchemaWrapper
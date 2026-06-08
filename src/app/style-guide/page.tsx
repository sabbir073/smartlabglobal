import React, { Fragment } from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='p-10'>
      <h1 className="heading-1">className=&quot;heading-1&quot; ----- h1</h1>
      <br />
      <h2 className="heading-2">className=&quot;heading-2&quot; ----- h2</h2>
      <br />
      <h3 className="heading-3">className=&quot;heading-3&quot; ----- h3</h3>
      <br />
      <p className="red-text">className=&quot;red-text&quot; ----- p </p>
      <br />
      <a className="content-text">className=&quot;content-text&quot;  </a>
      <br />
      <br />
      <ul className='content-list'>
        <li className="">className=&quot;content-list&quot; ----- li</li>
        <li className="">className=&quot;content-list&quot; ----- li</li>
        <li className="">className=&quot;content-list&quot; ----- li</li>
      </ul>

      <br />
      <br />

      <ul className='content-list-normal'>
        <li className="">className=&quot;content-list-normal&quot; ----- li</li>
        <li className="">className=&quot;content-list-normal&quot; ----- li</li>
        <li className="">className=&quot;content-list-normal&quot; ----- li</li>
      </ul>
      <br />
      <br />

      <ul className='icon-list'>
        <li className="">className=&quot;icon-list&quot; ----- li</li>
        <li className="">className=&quot;icon-list&quot; ----- li</li>
        <li className="">className=&quot;icon-list&quot; ----- li</li>
      </ul>
      <br />
      <br />


      <p className="quoteText">className=&quot;quoteText&quot; </p>

    </div >
  );
}

export default index
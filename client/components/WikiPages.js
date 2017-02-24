import React from 'react';
// import {Link} from 'react-router';

export default function (props) {

  const pages = props.allPages;

  return (
    <div>
      <h3>Pages</h3>
      <hr />
      <form>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <hr />
      <ul className="list-unstyled">
        <ul>
          { pages && pages.map(page =>
              (<li key={page.id}>{page.title}</li>)
            )
          }
        </ul>
      </ul>
    </div>
  );
}

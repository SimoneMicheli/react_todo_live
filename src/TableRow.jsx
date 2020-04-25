import React from 'react';

import PropsType from 'prop-types';

function TableRow(props){
  return(
    <tr>
      <th scope="row">{props.title}</th>
      <td>{props.date}</td>
    </tr>
  )
}

TableRow.propTypes = {
  /** titolo del todo */
  title: PropsType.string.isRequired,
  date: PropsType.string.isRequired
}

export  {TableRow };
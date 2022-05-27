import React from 'react'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const MyTableRow = ({columns}) => {
  return (
    <TableRow>
    {columns.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    ))}
  </TableRow>
  )
}

export default MyTableRow
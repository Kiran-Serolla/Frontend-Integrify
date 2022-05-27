import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

const MyTableBody = ({ data, page, rowsPerPage, columns }) => {
  return (
    <TableBody>
      {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
              {columns.map((column) => {
                let value;
                switch (column.id) {
                  case "name":
                    value = row.name.common;
                    break;
                  case "flags":
                    value = <img src={row.flags.png} alt="Country's Flag" />;
                    break;
                  case "languages":
                    value = row.languages;
                    break;
                  case "region":
                    value = row.region;
                    break;
                  case "capital":
                    value = row.capital;
                    break;
                  case "population":
                    value = row[column.id] || "NO DATA";
                    break;
                  default:
                    value = null;
                }

                return value ? (
                  <TableCell key={column.id} align={column.align}>
                    {column.format ? (
                      column.format(value)
                    ) : column.id === "languages" ? (
                      Object.keys(value).map((item) => {
                        return <p key={item}>{value[item]}</p>;
                      })
                    ) : column.id === "name" ? (
                      <Link to={`/country/${value}`}>
                        <p>{value}</p>
                      </Link>
                    ) : (
                      <p>{value}</p>
                    )}
                  </TableCell>
                ) : null;
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default MyTableBody;

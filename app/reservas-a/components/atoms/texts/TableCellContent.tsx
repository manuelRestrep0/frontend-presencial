import TableCell from "@mui/material/TableCell"
import React from "react"
import BodyText from "./BodyText"

const TableCellContent: React.FC<{
  align: "left" | "right" | "center"
  text: string
}> = ({ align, text }) => {
  return (
    <TableCell align={align}>
      <BodyText text={text} sx={{ fontWeight: "bold" }} />
    </TableCell>
  )
}

export default TableCellContent

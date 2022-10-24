import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row._id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.category}</TableCell>
        <TableCell align="center">{row.deliveryQuantity}</TableCell>
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">Q. {row.materialCost}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.stocks}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Materia prima
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">Nombre materia prima</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Costo C/U</TableCell>
                    <TableCell align="center">SubTotal Q</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.materials.map((materialRow) => (
                    <TableRow key={materialRow.id}>
                      <TableCell component="th" scope="row" align="center">
                        {materialRow?.id}
                      </TableCell>
                      <TableCell align="center">{materialRow?.name}</TableCell>
                      <TableCell align="center">
                        {materialRow?.amount}
                      </TableCell>
                      <TableCell align="center">
                        Q. {materialRow?.cost}
                      </TableCell>
                      <TableCell align="center">
                        Q. {materialRow?.subtotal}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const CollapsibleTable = ({ products }) => {
  console.log(products);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Tiempo de entrega (días)</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Costo Total de materia prima</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;

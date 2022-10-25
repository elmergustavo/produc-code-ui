import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Button, Input, TextField } from "@mui/material";
import useRawMaterial from "../../hooks/useRawMaterial";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ModalTableMaterial = ({ idProduct }) => {
  const { obtenerMateriaPrima, materiaPrima } = useRawMaterial();
  const [amount, setAmount] = React.useState(0);

  console.log("Materia prima desde el modal", materiaPrima);
  console.log(amount, idProduct);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Costo</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Ingrese cantidad</TableCell>
            <TableCell align="right">Agregar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materiaPrima.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>

              <TableCell align="right">
                {row.state ? "Activo" : "Inactivo"}
              </TableCell>
              <TextField
                id="input"
                type="number"
                variant="filled"
                size="small"
                // defaultValue=""
                required
                onChange={(event) => setAmount(event.target.value)}
              />

              <TableCell align="right">
                {row.state ? (
                  <Button variant="contained">
                    <AddTaskIcon />
                  </Button>
                ) : (
                  <Button variant="contained" disabled>
                    <AddTaskIcon />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModalTableMaterial;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useProduct from "../../hooks/useProduct";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Stack } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import Modal from "../Modal";
import FormCreateOrder from "../Formularios/FormCreateOrder";
import LegendHeatMap from "../HeatMap/LegendHeatMap";
export default function ModalTableProducts() {
  const { products, getMatrizProduct } = useProduct();
  const [modal, setModal] = React.useState(false);
  const [modalMatriz, setModalMatriz] = React.useState(false);
  const [idProduct, setIdProduct] = React.useState('');

  console.log(products);

  const handleViewOrderEspecific = (idProduct) => {};

  const handleCreateOrder = (idProduct) => {
    setModal(true);
    setIdProduct(idProduct)
  };

  const handleMatriz = (idProduct) => {
    setModalMatriz(true);
    setIdProduct(idProduct)


  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id Producto</TableCell>
              <TableCell align="center">Nombe</TableCell>
              <TableCell align="center">Descripcion</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Tiempo de entrega (días)</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.stocks}</TableCell>
                <TableCell align="center">
                  {" "}
                  {row.state ? "Activo" : "Inactivo"}
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.deliveryQuantity}</TableCell>
                <TableCell align="center">
                  <Stack spacing={1} direction="row">
                    {row.state ? (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleViewOrderEspecific(row._id);
                        }}
                      >
                        <Box spacing={2} flex={"row"}>
                          Ver Orden <VisibilityIcon />
                        </Box>
                      </Button>
                    ) : (
                      <Button variant="contained" disabled>
                        Ver Orden <VisibilityIcon />
                      </Button>
                    )}

                    {row.state ? (
                      <Button
                        variant="contained"
                        onClick={() => {
                          handleCreateOrder(row._id);
                        }}
                      >
                        <Box spacing={2} flex={"row"}>
                          Crear Orden <AddBoxIcon />
                        </Box>
                      </Button>
                    ) : (
                      <Button variant="contained" disabled>
                        Crear Orden <AddBoxIcon />
                      </Button>
                    )}

                    {row.state ? (
                      <Button
                        variant="contained"

                        onClick={() => {
                            handleMatriz(row._id);
                        }}
                      >
                        <Box spacing={2} flex={"row"}>
                          <BackupTableIcon />
                        </Box>
                      </Button>
                    ) : (
                      <Button variant="contained" disabled>
                        <BackupTableIcon />
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        modal={modal}
        setModal={setModal}
        name="Materia prima"
        size={"sm:max-w-4xl"}
      >
        <FormCreateOrder idProduct={idProduct} />
      </Modal>


      <Modal
        modal={modalMatriz}
        setModal={setModalMatriz}
        name="Visualizacion de la tabla"
        size={"sm:max-w-7xl"}
      >
        <LegendHeatMap size={"100%"} idProduct={idProduct}   />
      </Modal>
    </>
  );
}

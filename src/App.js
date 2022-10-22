import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";
import { Login } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  PDFViewer,
  HeatMap
} from "./pages";

import { AuthProvider } from "./contexts/AuthProvider";
import { ProveedorProvider } from "./contexts/ProveedorProvider";
import { RawMaterialProvider } from "./contexts/RawMaterialProvider";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProveedorProvider>
            <RawMaterialProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                </Route>

                <Route path="/admin" element={<RutaProtegida />}>
                  <Route index element={<Ecommerce />} />
                  {/* Dashboard */}

                  <Route path="dashboard" element={<Ecommerce />} />

                  {/* Pages */}
                  <Route path="orders" element={<Orders />} />
                  <Route path="employees" element={<Employees />} />
                  <Route path="customers" element={<Customers />} />

                  {/* apps  */}
                  <Route path="kanban" element={<Kanban />} />
                  <Route path="editor" element={<Editor />} />
                  <Route path="calendar" element={<Calendar />} />
                  <Route path="color-picker" element={<ColorPicker />} />

                  {/* charts  */}
                  <Route path="HeatMap" element={<HeatMap/>} />
                  <Route path="PDFviwer" element={<PDFViewer/>} />
                  <Route path="line" element={<Line />} />
                  <Route path="area" element={<Area />} />
                  <Route path="bar" element={<Bar />} />
                  <Route path="pie" element={<Pie />} />
                  <Route path="financial" element={<Financial />} />
                  <Route path="color-mapping" element={<ColorMapping />} />
                  <Route path="pyramid" element={<Pyramid />} />
                  <Route path="stacked" element={<Stacked />} />
                </Route>
              </Routes>
            </RawMaterialProvider>
          </ProveedorProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

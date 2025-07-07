import { ProductCreate, ProductDetail, ProductList } from "@views";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/new" element={<ProductCreate />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Toaster richColors />
    </Router>
  );
}

export default App;

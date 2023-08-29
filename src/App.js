import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Header } from "./components/header/Header";
import { Spinner } from "./components/Spinner";

const MainPage = lazy(() => import("./pages/MainPage"));
const Page404 = lazy(() => import("./pages/Page404"));
const BasketPage = lazy(() => import("./pages/BasketPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const CouponesPage = lazy(() => import("./pages/CouponesPage"));
const SingleGoodPage = lazy(() => import("./pages/SingleGoodPage"));

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/basket" element={<BasketPage/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="coupones" element={<CouponesPage/>}/>
          <Route path="/:shop/:id" element={<SingleGoodPage/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

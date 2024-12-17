import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import ProductPage from "./pages/ProductPage";
import ProductItemPage from "./pages/ProductItemPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import TrackOrder from "./components/Buyer/TrackOrder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./store";
import { Provider } from "react-redux";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Orders from "./components/Seller/Orders";
import Overview from "./components/Seller/Overview";
import Reviews from "./components/Seller/Reviews";
import Products from "./components/Seller/Products";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/:category" element={<ProductPage />} />
              <Route path="/:category/:id" element={<ProductItemPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="overview" />} />
              <Route path="overview" element={<Overview />} />
              <Route path="orders" element={<Orders />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="/user" element={<User />}>
              <Route index element={<Navigate to="orders" />} />
              <Route path="orders" element={<TrackOrder />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

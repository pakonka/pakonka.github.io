import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProductsDetail } from "./pages/ProductsDetail";
import { NoPage } from "./pages/NoPage";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="h-[500px] ">
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {location.pathname == "/blog"
              ? "Blog Page"
              : location.pathname == "/products"
              ? "Product Page"
              : "Home Page"}
          </title>
          <link rel="canonical" href="http://localhost:5173/" />
          <meta name="description" content="Learn React at Softech Aptech" />
        </Helmet>
      </>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="products/:id" element={<ProductsDetail />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};
export default App;

import { index, layout, route } from "@react-router/dev/routes";

const routes = [
  layout("routes/layout.jsx", [
    index("routes/home.jsx"),
    route("/categories", "routes/categories.jsx"),
    route("/categories/:categorySlug", "routes/category.jsx"),
    route("/register", "routes/register.jsx"),
    route("/preview", "routes/preview.jsx"),
  ]),
];

export default routes;
import { index, layout, route } from "@react-router/dev/routes";

const routes = [
  layout("routes/layout.jsx", [
    index("routes/home.jsx"),
    route("/categories", "routes/categories.jsx"),
    route("/categories/:categorySlug", "routes/category.jsx"),
<<<<<<< Updated upstream
    route("/register", "routes/regicountdown.jsx"),
=======
    route("/register", "routes/register.jsx"),
>>>>>>> Stashed changes
    route("/preview", "routes/preview.jsx"),
  ]),
];

export default routes;
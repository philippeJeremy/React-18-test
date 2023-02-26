import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";

function AdminRecipes() {
  return (
    <>
      <div className="d-flex flex-column flex-fill">
        <h4 className="mb-20">Gestion des recettes</h4>
        <div className="d-flex flex-fill flex-column ">
          <AdminRecipesNav />
          <div className="flex-fill flex-column">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRecipes;

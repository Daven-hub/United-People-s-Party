// Breadcrumbs.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="relative text-xs md:text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-white/50 hover:underline">Accueil</Link>
          {pathnames.length > 0 && <span className="mx-2 text-white">/</span>}
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = decodeURIComponent(value.replace(/-/g, " "));

          return (
            <li key={to} className="flex items-center whitespace-nowrap overflow-hidden">
              {!isLast ? (
                <>
                  <Link to={to} className="text-white/50 hover:underline">
                    {label}
                  </Link>
                  <span className="mx-2 text-white">/</span>
                </>
              ) : (
                <span className="text-secondary font-medium overflow-hidden text-ellipsis capitalize">{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

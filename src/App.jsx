// src/App.jsx
import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Lazy Imports
const AdminSidebar = lazy(() => import("./components/Admin/Sidebar"));
const AdminNavbar = lazy(() => import("./components/Admin/Navbar"));
const AdminLogin = lazy(() => import("./components/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/Admin/Dashboard"));
const OrderManagement = lazy(() => import("./components/Admin/OrderManagement"));
const CategoryManagement = lazy(() => import("./components/Admin/CategoryManagement"));
const ProductsManagement = lazy(() => import("./components/Admin/ProductsManagement"));
const CustomerManagement = lazy(() => import("./components/Admin/CustomerManagement"));
const PaymentManagement = lazy(() => import("./components/Admin/PaymentManagement"));
const Analytics = lazy(() => import("./components/Admin/Analytics"));

const UserLogin = lazy(() => import("./components/User/UserLogin"));
const UserRegister = lazy(() => import("./components/User/UserRegister"));
const UserDashboard = lazy(() => import("./components/User/Dashboard"));
const UserNavbar = lazy(() => import("./components/User/Navbar"));
const UserFooter = lazy(() => import("./pages/Footer"));

const MenProducts = lazy(() => import("./components/User/MenProducts"));
const ProductDetails = lazy(() => import("./components/User/ProductDetails"));


const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./pages/Navbar"));

// Layout Component
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin") && location.pathname !== "/admin-login";
  const isAuthPage = ["/login", "/register", "/admin-login"].includes(location.pathname);

  return (
    <>
      {/* Admin Layout */}
      {isAdminRoute && (
        <div className="flex h-screen bg-gray-50">
          <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col">
            <AdminNavbar toggleSidebar={toggleSidebar} />
            <main className="flex-1 h-[calc(100vh-5rem)] overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      )}

      {/* Public / User Layout (with Navbar) */}
      {!isAdminRoute && !isAuthPage && (
        <>
          {(location.pathname === "/" || location.pathname.startsWith("/guest")) && (<Navbar />)}
          {location.pathname.startsWith("/user") && <UserNavbar />}
          <div className="min-h-screen bg-gray-50">{children}</div>
          <UserFooter />
        </>
      )}

      {/* Auth Pages: No Navbar, No Sidebar */}
      {isAuthPage && children}
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p className="text-xl font-semibold text-teal-700">Loading...</p>
          </div>
        }
      >
        <Layout>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />

            {/* User Auth */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/men-products" element={<MenProducts />} />
            <Route path="/user/men-products/details" element={<ProductDetails />} />

            {/* Admin Auth */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Admin Protected Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/orders-management" element={<OrderManagement />} />
            <Route path="/admin/category-management" element={<CategoryManagement />} />
            <Route path="/admin/products-management" element={<ProductsManagement />} />
            <Route path="/admin/customer-management" element={<CustomerManagement />} />
            <Route path="/admin/payment-management" element={<PaymentManagement />} />
            <Route path="/admin/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}








// import React, { lazy, Suspense, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation,
//   Navigate,
// } from "react-router-dom";

// /* ===================== LAZY IMPORTS ===================== */

// // Admin
// const AdminSidebar = lazy(() => import("./components/Admin/Sidebar"));
// const AdminNavbar = lazy(() => import("./components/Admin/Navbar"));
// const AdminLogin = lazy(() => import("./components/Admin/AdminLogin"));
// const AdminDashboard = lazy(() => import("./components/Admin/Dashboard"));
// const OrderManagement = lazy(() =>
//   import("./components/Admin/OrderManagement")
// );
// const CategoryManagement = lazy(() =>
//   import("./components/Admin/CategoryManagement")
// );
// const ProductsManagement = lazy(() =>
//   import("./components/Admin/ProductsManagement")
// );
// const CustomerManagement = lazy(() =>
//   import("./components/Admin/CustomerManagement")
// );
// const PaymentManagement = lazy(() =>
//   import("./components/Admin/PaymentManagement")
// );
// const Analytics = lazy(() => import("./components/Admin/Analytics"));

// // User
// const UserLogin = lazy(() => import("./components/User/UserLogin"));
// const UserRegister = lazy(() => import("./components/User/UserRegister"));
// const UserDashboard = lazy(() => import("./components/User/Dashboard"));
// const UserNavbar = lazy(() => import("./components/User/Navbar"));
// const UserFooter = lazy(() => import("./pages/Footer"));

// // Public
// const Home = lazy(() => import("./pages/Home"));

// /* ===================== LAYOUT ===================== */

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const isAdminRoute =
//     location.pathname.startsWith("/admin") &&
//     location.pathname !== "/admin-login";

//   const isAuthPage = ["/login", "/register", "/admin-login"].includes(
//     location.pathname
//   );

//   const isUserLoggedIn = Boolean(localStorage.getItem("user_token"));

//   /* ================= ADMIN LAYOUT ================= */
//   if (isAdminRoute) {
//     return (
//       <div className="flex h-screen bg-gray-50">
//         <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="flex-1 flex flex-col">
//           <AdminNavbar toggleSidebar={toggleSidebar} />
//           <main className="flex-1 overflow-y-auto p-6">
//             {children}
//           </main>
//         </div>
//       </div>
//     );
//   }

//   /* ================= AUTH PAGES ================= */
//   if (isAuthPage) {
//     return <>{children}</>;
//   }

//   /* ================= USER / PUBLIC ================= */
//   return (
//     <>
//       <UserNavbar isLoggedIn={isUserLoggedIn} />
//       <div className="min-h-screen bg-gray-50">{children}</div>
//       <UserFooter />
//     </>
//   );
// };

// /* ===================== APP ===================== */

// export default function App() {
//   const isUserLoggedIn = Boolean(localStorage.getItem("user_token"));
//   const isAdminLoggedIn = Boolean(localStorage.getItem("admin_token"));

//   return (
//     <BrowserRouter>
//       <Suspense
//         fallback={
//           <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <p className="text-xl font-semibold text-teal-700">
//               Loading...
//             </p>
//           </div>
//         }
//       >
//         <Layout>
//           <Routes>
//             {/* ========== PUBLIC ========== */}
//             <Route path="/" element={<Home />} />

//             {/* ========== USER AUTH ========== */}
//             <Route
//               path="/login"
//               element={
//                 isUserLoggedIn ? <Navigate to="/dashboard" /> : <UserLogin />
//               }
//             />
//             <Route
//               path="/register"
//               element={
//                 isUserLoggedIn ? <Navigate to="/dashboard" /> : <UserRegister />
//               }
//             />

//             {/* ========== USER DASHBOARD (PROTECTED) ========== */}
//             <Route
//               path="/dashboard"
//               element={
//                 isUserLoggedIn ? (
//                   <UserDashboard />
//                 ) : (
//                   <Navigate to="/login" />
//                 )
//               }
//             />

//             {/* ========== ADMIN AUTH ========== */}
//             <Route
//               path="/admin-login"
//               element={
//                 isAdminLoggedIn ? (
//                   <Navigate to="/admin/dashboard" />
//                 ) : (
//                   <AdminLogin />
//                 )
//               }
//             />

//             {/* ========== ADMIN DASHBOARD (PROTECTED) ========== */}
//             <Route
//               path="/admin/dashboard"
//               element={
//                 isAdminLoggedIn ? (
//                   <AdminDashboard />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/orders-management"
//               element={
//                 isAdminLoggedIn ? (
//                   <OrderManagement />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/category-management"
//               element={
//                 isAdminLoggedIn ? (
//                   <CategoryManagement />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/products-management"
//               element={
//                 isAdminLoggedIn ? (
//                   <ProductsManagement />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/customer-management"
//               element={
//                 isAdminLoggedIn ? (
//                   <CustomerManagement />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/payment-management"
//               element={
//                 isAdminLoggedIn ? (
//                   <PaymentManagement />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//             <Route
//               path="/admin/analytics"
//               element={
//                 isAdminLoggedIn ? (
//                   <Analytics />
//                 ) : (
//                   <Navigate to="/admin-login" />
//                 )
//               }
//             />
//           </Routes>
//         </Layout>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

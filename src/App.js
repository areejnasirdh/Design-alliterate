import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Practitioner from "./Pages/Practitioner/Practitioner.jsx";
import PractitionerDetail from './Pages/PractitionerDetail/PractitionerDetail.jsx';
import PractitionerStore from './Pages/PractitionerStore/PractitionerStore.jsx';
import PractitionerStoreProduct from './Pages/PractitionerStoreProduct/PractitionerStoreProduct.jsx';
import Pricing from "./Pages/Pricing/Pricing.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import RegisterAsPractitioner from "./Pages/Auth/RegisterAsPractitioner/RegisterAsPractitioner.jsx";
import RegisterAsBuyer from "./Pages/Auth/RegisterAsBuyer/RegisterAsBuyer.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";
import StoreCreate from "./Pages/StoreCreate/StoreCreate.jsx";
import CardDetails from "./Pages/CardDetails/CardDetails.jsx";

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'

import Invoice from './Pages/Invoice/Invoice.jsx'
import ProfileSettings from './Pages/ProfileSettings/ProfileSettings.jsx'
import LayoutSettings from './Pages/LayoutSettings/LayoutSettings.jsx';
import ProductSettings from './Pages/ProductSettings/ProductSettings.jsx';
import ProductSettingsEdit from './Pages/ProductSettingsEdit/ProductSettingsEdit.jsx';
import ServiceSettings from './Pages/ServiceSettings/ServiceSettings.jsx'
import ServiceSettingsEdit from './Pages/ServiceSettingsEdit/ServiceSettingsEdit.jsx';
import OrderHistory from './Pages/OrderHistory/OrderHistory .jsx';
import ServiceHistory from './Pages/ServiceHistory/ServiceHistory.jsx';
import ServiceHistoryDetail from './Pages/ServiceHistoryDetail/ServiceHistoryDetail.jsx';
import DocuSign from './Pages/DocuSign/DocuSign.jsx';


import ParentDashboard from "./Components/ParentDashboard/ParentDashboard.jsx";
import PractitionerHistory from './Pages/PractitionerHistory/PractitionerHistory.jsx';
import PractitionerHistoryDetail from './Pages/PractitionerHistoryDetail/PractitionerHistoryDetail.jsx'
import EndUserHistoryDetail from './Pages/EndUserHistoryDetail/EndUserHistoryDetail.jsx'
import AdminServices from "./Pages/AdminServices/AdminServices.jsx";
import AdminServicesProductEdit from "./Pages/AdminServicesProductEdit/AdminServicesProductEdit.jsx";

import "./App.css"

const PageLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);


const App = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/practitioner" element={<PageLayout><Practitioner /></PageLayout>} />
          <Route path="/practitioner/:id" element={<PageLayout><PractitionerDetail /></PageLayout>} />
          <Route path="/practitioner/:id/store" element={<PageLayout><PractitionerStore /></PageLayout>} />
          <Route path="/practitioner/:id/product/:id" element={<PageLayout><PractitionerStoreProduct /></PageLayout>} />
          <Route path="/pricing" element={<PageLayout><Pricing /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
          <Route path="/register-as-practitioner" element={<PageLayout><RegisterAsPractitioner /></PageLayout>} />
          <Route path="/register-as-buyer" element={<PageLayout><RegisterAsBuyer /></PageLayout>} />
          <Route path="/login" element={<PageLayout><Login /></PageLayout>} />
          <Route path="/store/create" element={<PageLayout><StoreCreate /></PageLayout>} />
          <Route path="/card/details" element={<PageLayout><CardDetails /></PageLayout>} />

          <Route path={"/admin"} element={<Dashboard />}>
            <Route path="invoice" element={<Invoice />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="setting/layout" element={<LayoutSettings />} />
            <Route path="setting/product" element={<ProductSettings />} />
            <Route path="setting/product/edit" element={<ProductSettingsEdit />} />
            <Route path="setting/service" element={<ServiceSettings />} />
            <Route path="setting/service/edit" element={<ServiceSettingsEdit />} />
            <Route path="order/history" element={<OrderHistory />} />
            <Route path="service/history" element={<ServiceHistory />} />
            <Route path="service/history/detail" element={<ServiceHistoryDetail />} />
            <Route path="docusign" element={<DocuSign />} />
          </Route>

          <Route path={"/practitioner/admin"} exect element={<ParentDashboard />}>
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="practitioners/history" element={<PractitionerHistory />} />
            <Route path="practitioners/history/detail" element={<PractitionerHistoryDetail />} />
            <Route path="end-user/history" element={<PractitionerHistory />} />
            <Route path="end-user/history/detail" element={<EndUserHistoryDetail />} />
            <Route path="admin-services" element={<AdminServices bool={true} />} />
            <Route path="admin-services/product/edit" element={<AdminServicesProductEdit />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
};
export default App;
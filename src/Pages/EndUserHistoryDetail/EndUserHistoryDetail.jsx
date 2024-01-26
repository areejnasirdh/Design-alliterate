import React from "react";
import "./EndUserHistoryDetail.css";
import ServiceInfo from "../../Components/ServiceInfo/ServiceInfo.jsx";
import ProductCard from "../../Components/ProductCard/ProductCard";
const EndUserHistoryDetail = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile admin-service-detail">
        <div>
          <h3>Detail</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture"></div>
        <ServiceInfo heading="Service Name" text="Service name 01" />
        <ServiceInfo heading="Email" text="abc@domain.com" />
        <ServiceInfo heading="Contact" text="1234 5678 910" />
      </div>

      <div className="admin-profile admin-service-detail">
        <div>
          <h3>Services</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture"></div>

        <ServiceInfo heading="Service Name" text="Service name 01" />
        <ServiceInfo heading="Service Price" text="$ 120.00" />
        <ServiceInfo
          heading="Service Timing"
          text="Tuesdat 1:00 PM - 3:00 PM"
        />
        <ServiceInfo heading="practitioner Name" text="Service name 01" />

        <button className="btn-primary">SERVICE INVOICE DETAIL</button>

        <h3 className="section-name mb-2">Order History</h3>
        <div className="product-container mb-5">
          <div className="products ">
            <ProductCard ispara={true} topPrice={true}/>
            <ProductCard ispara={true} topPrice={true}/>
            <ProductCard ispara={true} topPrice={true}/>
            <ProductCard ispara={true} topPrice={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndUserHistoryDetail;

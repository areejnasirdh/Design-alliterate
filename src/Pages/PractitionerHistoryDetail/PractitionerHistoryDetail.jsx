import React from "react";
import "./PractitionerHistoryDetail.css";
import ServiceInfo from "../../Components/ServiceInfo/ServiceInfo.jsx";
import ProductCard from "../../Components/ProductCard/ProductCard";
const PractitionerHistoryDetail = () => {
  return (
    <div className="admin-container">
      <div className="admin-profile admin-service-detail">
        <div>
          <h3>Detail</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture"></div>
        <ServiceInfo heading="Service Name" text="Service name 01" />
        <ServiceInfo
          heading="Service Description"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
        />
        <ServiceInfo heading="Email" text="abc@domain.com" />
        <ServiceInfo heading="Contact" text="1234 5678 910" />
        <button className="btn-primary">SERVICE INVOICE DETAIL</button>
      </div>

      <div className="admin-profile admin-service-detail">
        <div>
          <h3>Services</h3>
          <h3>-</h3>
        </div>
        <div className="add-product-picture">
          <div className="admin-picture-container">
            <img src="/Images/service1.png" alt="service1.png.png" />
          </div>
        </div>

        <h3 className="section-name mb-2">Store Detail</h3>
        <ServiceInfo heading="Service Name" text="Service name 01" />
        <ServiceInfo
          heading="Service Description"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
        />

        <h3 className="section-name mb-2">Product</h3>
        <div className="product-container">
          <div className="products ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <button className="btn-primary">SERVICE INVOICE DETAIL</button>
      </div>
    </div>
  );
};

export default PractitionerHistoryDetail;

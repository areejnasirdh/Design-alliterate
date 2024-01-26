import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({
  isDashboard = false,
  isbutton,
  ispara,
  isprice,
  topPrice,
}) => {
  const navigate = useNavigate();
  return (
    <div className="product">
      <img src="/Images/product1.png" alt="product1.png" />
      {topPrice === true && (
        <div>
          <p>
            Price:<span></span>
          </p>
          <div>
            <p>$ 12.00</p>
            <p>$ 13.00</p>
          </div>
        </div>
      )}

      <h3>Product name</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      {isprice === true && (
        <section className="ml-4">
          <h3 className="text-[#fa8708] text-xl">$ 120.00</h3>
          <p className="text-sm text-gray-400 mt-2">Tue 1:00 PM - 2:00 PM</p>
        </section>
      )}
      {isbutton === true && (
        <div>
          <button
            onClick={() => navigate("product/edit")}
            className="btn-primary"
          >
            {isDashboard ? "EDIT" : "ADD TO CART"}
          </button>
          <button
            style={
              isDashboard ? { color: "white", backgroundColor: "#FA2108" } : {}
            }
            className="btn-secondary"
          >
            <Link to={"/practitioner/123456789/product/1234596789"}>
              {isDashboard ? "DELETE" : "VIEW DETAIL"}
            </Link>
          </button>
        </div>
      )}

      {ispara === true && (
        <section className="px-4">
          <hr className="mb-4" />
          <p>
            <span className="font-bold text-md flex items-center">Store Name:<p className="text-xs font-normal ml-2">abc store name</p> </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default ProductCard;

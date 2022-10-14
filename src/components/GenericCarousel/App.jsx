import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import * as C from "./styles";
import api from "../../services/api";
import formatedCurrency from '../../services/formatCurrency'

export default function GenericCarousel({ title, categoryId }) {
  const [products, setProducts] = useState([]);

  const formatResponse = (data) => {
    if (!categoryId) return data;
    return data.filter((item) => item["category_id"] === categoryId);
  };

  useEffect(() => {
    api.get("/products").then(({ data }) => {
      setProducts(formatResponse(data));
    });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 },
  ];



  const starts = (length) => Array.from({ length }).map(() => <C.Star />);

  return (
    <C.Container>
      <C.TextHighlights>
        <div className="line"></div>
        <C.H2Highlights>{title}</C.H2Highlights>
      </C.TextHighlights>
      <Carousel
        itemsToShow={4}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {products &&
          products?.map((product) => (
            <C.AllProductsCarousel>
              <div className="sizeDiv">
                <div key={product.id}>
                  <img
                  className="image-product"
                    src={product?.["images_product"][0]?.path}
                    alt=""
                  />
                  <p className="paragraph-principal">{product.name}</p>
                  {starts(product?.stars)}
                  <p className="price-old">R$ {product.price}</p>
                  <C.H1Price>R$ {product.promotional_price}</C.H1Price>
                  <button>Comprar</button>
                </div>
              </div>
            </C.AllProductsCarousel>
          ))}
      </Carousel>
    </C.Container>
  );
}

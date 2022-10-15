import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import * as C from "./styles";
import formatCurrency from '../../../utils/formatCurrency'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
  { width: 1300, itemsToShow: 4 },
];


export default function GenericCarousel({ data, title, categoryId }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(formatResponse())
  }, [data]);

  const formatResponse = () => {
    if (!categoryId) return data;
    return data.filter((item) => item["category_id"] === categoryId);
  };

  const starts = (length) => Array.from({ length }).map(() => <C.Star />);

  return (
    <>
      <C.TextHighlights>
        <div className="line"></div>
        <C.H2Highlights>{title}</C.H2Highlights>
      </C.TextHighlights>

      <C.Div>
        <Carousel
          itemsToShow={4}
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
                      alt={product?.name}
                    />
                    <p className="paragraph-principal">{product?.name}</p>
                    {starts(product?.stars)}

                    {product?.promotional_price && product?.price && (
                      <p className="price-old">{formatCurrency(product?.price)}</p>
                    )}
                    <C.H1Price>{formatCurrency(product.promotional_price || product?.price)}</C.H1Price>
                    <button>Comprar</button>
                  </div>
                </div>
              </C.AllProductsCarousel>
            ))}
        </Carousel>
      </C.Div>
    </>
  );
}


// import ProductsDetails from "./products/index";
import React, { useEffect, useState } from "react";
import getProducts from "../../graphql/query/getProduct.gql";
import { useApolloClient } from "react-apollo";
import SliderLayout from "vtex.slider-layout/SliderLayout";
import { FormattedCurrency } from "vtex.format-currency";
import { useDevice } from "vtex.device-detector";
import { Button } from "vtex.styleguide";

import ButoonAddToCart from "../ButtonAddtoCart/index";

import styles from "../../styles/components/ShelfCustom/styles.css";



const ShelfCustom = ({ items }) => {
  const [colectSchemaInfos, setColectSchemaInfos] = useState(items);
  const client = useApolloClient();
  const [productId, setProductId] = useState("");

  const { device } = useDevice();

  useEffect(() => {
    setColectSchemaInfos(items);
  }, [items]);

  useEffect(() => {
    const colection_id_schema = colectSchemaInfos?.collectionId;
    const category_id_schema = colectSchemaInfos?.categoryId;

    if (
      (colection_id_schema && category_id_schema) ||
      (colection_id_schema && !category_id_schema)
    ) {
      client
        .query({
          query: getProducts,
          variables: { collection: colection_id_schema },
        })
        .then(async({ data }) => {
          const products = await data?.products;
          setProductId(products);
        });
    } else if (category_id_schema && !colection_id_schema) {
      client
        .query({
          query: getProducts,
          variables: { category: category_id_schema },
        })
        .then(async ({ data }) => {
          const products = await data?.products;
          setProductId(products);
        });
    }
    if (
      items?.collectionId === undefined ||
      items?.collectionId === "" ||
      (!items?.collectionId && items?.categoryId === undefined || items?.categoryId === '' || !items?.categoryId)
    ) {
      client
        .query({
          query: getProducts,
          variables: { collection: "141"  },
        })
        .then(async ({ data }) => {
          const products = await data?.products;

          setProductId(products);
        });
    }
  }, [items]);


  return (
    <>
      <div className={styles.slyder_custom_contain}>
        {items !== undefined ? (
          <div className={styles.title__shelf_custom}>{items.title}</div>
        ) : (
          ""
        )}

        {items !== undefined ? (
          <div className={styles.sobtitle__shelf_custom}>{items.sobTitle}</div>
        ) : (
          ""
        )}

        <SliderLayout
          itemsPerPage={{
            desktop: 4,
            tablet: 1,
            phone: 1.04,
          }}
          usePagination={device !== "phone" ? true : false}
          infinite={device !== "phone" ? true : false}
          fullWidth
          showPaginationDots="always"
          showNavigationArrows={
            device != "phone" ? "desktopOnly" : "mobileOnly"
          }
        >
          {productId &&
            productId.map((item) => (
              <li
                key={item}
                className={styles.list_shelf}
                valor={[
                  {
                    productName: item.items[0].name,
                    productId: item.productId,
                    seller: item.items[0].sellers[0],
                  },
                ]}
              >
                <div className={styles.slider_custom_content}>
                  <a href={item.link} className={styles.url_product}>
                    <div className={styles.image_contain}>
                      <img
                        src={item.items[0].images[0].imageUrl}
                        className={styles.image__product}
                      />
                    </div>
                  </a>

                  <a href={item.link} className={styles.url_product}>
                    <div className={styles.info_card_content}>
                      <div>{item.items[0].name}</div>
                    </div>
                  </a>

                  {/* start of displaying prices on products with stock */}
                  {item.items[0]?.sellers[0]?.commertialOffer
                    ?.AvailableQuantity > 0 && (
                    <div className={styles.infos_card_prices}>
                      <div className={styles.contentPricesList}>
                        <span>De:</span>
                        <div className={styles.listPrice}>
                          <FormattedCurrency
                            value={
                              item.items[0]?.sellers[0]?.commertialOffer
                                ?.ListPrice
                            }
                          />
                        </div>
                      </div>

                      <div className={styles.contentPrices}>
                        <span>Por:</span>
                        <div className={styles.sellingPrice}>
                          <FormattedCurrency
                            value={
                              item?.items[0]?.sellers[0]?.commertialOffer?.Price
                            }
                          />
                        </div>
                        <span className={styles.contentBadgePrice}>
                          EconomizeR4 xx,xx
                        </span>
                      </div>
                    </div>
                  )}
                  {/* end of displaying prices on products with stock */}

                  {/* start available and unavailable button contro*/}
                  <div className={styles.buttonAddtoCart}>
                    {item.items[0]?.sellers[0]?.commertialOffer
                      .AvailableQuantity > 0 ? (
                      <ButoonAddToCart
                        valor={[
                          {
                            productName: item.items[0].name,
                            itemId: item.items[0].itemId,
                            seller: item.items[0].sellers[0],
                          },
                        ]}
                      />
                    ) : (
                      <Button
                        disabled
                        className={styles.button_unavailable_custom}
                      >
                        PRODUTO INDISPONÍVEL
                      </Button>
                    )}
                    {/* end available and unavailable button contro */}
                  </div>
                </div>
              </li>
            ))}
        </SliderLayout>
      </div>
    </>
  );
};

ShelfCustom.schema = {
  title: "Shelf Custom",
  type: "object",
  properties: {
    items: {
      properties: {
        title: {
          title: "Titulo para Vitrine",
          type: "string",
          default: "",
        },
        sobTitle: {
          title: "Sob Title",
          type: "string",
          default: "",
        },
        categoryId: {
          title: "CategoryId",
          type: "string",
          description: "inserir Id da categoria",
          default: "",
        },
        collectionId: {
          title: "CollectionId",
          type: "string",
          description: "inserir Id da coleção",
          default: "",
        },
      },
    },
  },
};

export default ShelfCustom;

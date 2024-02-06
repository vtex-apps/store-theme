// import ProductsDetails from "./products/index";
import React, { useEffect, useState } from "react";
import getProducts from "../../graphql/query/getProduct.gql";
import { useApolloClient } from "react-apollo";
import SliderLayout from "vtex.slider-layout/SliderLayout";
import { FormattedCurrency } from "vtex.format-currency";
import { useDevice } from "vtex.device-detector";

import styles from "../../styles/components/ShelfCustom/styles.css";

const ShelfCustom = ({ items }) => {
  const [colectSchemaInfos, setColectSchemaInfos] = useState(items);
  const client = useApolloClient();
  const [productId, setProductId] = useState("");
  console.log("🚀 ~ ShelfCustom ~ productId:", productId);

  const { device } = useDevice();
  console.log("🚀 ~ ShelfCustom ~ device:", device);

  useEffect(() => {
    setColectSchemaInfos(items);
  }, [items]);

  useEffect(() => {
    const colection_id_schema = colectSchemaInfos.collectionId;
    const category_id_schema = colectSchemaInfos.categoryId;

    if (
      (colection_id_schema && category_id_schema) ||
      productId.length >= 6 ||
      (colection_id_schema && !category_id_schema) ||
      productId.length >= 6
    ) {
      client
        .query({
          query: getProducts,
          variables: { collection: colection_id_schema },
        })
        .then(({ data }) => {
          const products = data?.products;
          setProductId(products);
        });
    } else if (
      (category_id_schema && !colection_id_schema) ||
      productId.length >= 6
    ) {
      client
        .query({
          query: getProducts,
          variables: { category: category_id_schema },
        })
        .then(({ data }) => {
          const products = data?.products;
          setProductId(products);
        });
    }
    if (colection_id_schema === "" && category_id_schema === "") {
      client
        .query({
          query: getProducts,
          variables: { collection: "141" },
        })
        .then(({ data }) => {
          const products = data?.products;
          console.log("🚀 ~ .then ~ products:", products);
          setProductId(products);
        });
    }
  }, [items]);

  return (
    <>
      <div className={styles.slyder_custom_contain}>
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
              <li key={item} className={styles.list_shelf}>
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

                  <div className={styles.infos_card_prices}>
                    <div className={styles.contentPricesList}>
                      <span>De:</span>
                      <div className={styles.listPrice}>
                        <FormattedCurrency
                          value={item.priceRange.listPrice.highPrice}
                        />
                      </div>
                    </div>

                    <div className={styles.contentPrices}>
                      <span>Por:</span>
                      <div className={styles.sellingPrice}>
                        <FormattedCurrency
                          value={item.priceRange.sellingPrice.highPrice}
                        />
                      </div>
                    <span className={styles.contentBadgePrice}>EconomizeR4 xx,xx</span>
                    </div>
                  </div>

                  <div className={styles.buttonAddtoCart}>
                    <button>ADICIONAR AO CARRINHO</button>
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
        // selectOptionByshel: {
        //   title: "Select shelf option",
        //   type: "string",
        //   enum: ["opt1", "opt2"], // Define os valores
        //   enumNames: ["Category option", "Collection Option "], // Define os textos
        //   widget: {
        //     "ui:widget": "radio",
        //   },
        // },

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

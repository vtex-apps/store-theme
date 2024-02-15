import React, { useEffect, useState } from "react";

import { Button } from "vtex.styleguide";
import { NumericStepper } from "vtex.styleguide";
import styles from "../../styles/components/ButtonAddtoCart/styles.css";

import { useOrderItems } from "vtex.order-items/OrderItems";

const ButtonAddtoCart = ({ valor }) => {
  const [addItem, setAddItem] = useState({ isLoading2: false });
  const [numericStepper, setNumericStepper] = useState({
    quantityNumericStepper: 1,
  });

  const [showNumeriStepper, setShowNumericStepper] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [label, setLabel] = useState({ labelText: `Item` });

  const [productDetailsItem, setProductDetailsItem] = useState({});
  console.log("🚀 ~ ButtonAddtoCart ~ productDetailsItem:", productDetailsItem);
  const selectedItemQuantity = numericStepper.quantityNumericStepper;

  useEffect(() => {
    if (showNumeriStepper === true) {
      setAddItem({ isLoading2: false });
      setShowButton(false);
    }
  }, [showNumeriStepper]);

  //   controle de exibição do btn add
  useEffect(() => {
    if (numericStepper.quantityNumericStepper === 0) {
      setShowButton(true);
      setShowNumericStepper(false);
      setNumericStepper({ quantityNumericStepper: 1 });
    }
  }, [numericStepper.quantityNumericStepper]);

  //   modifica texto do label ao add quantidade de item > 1
  useEffect(() => {
    const itemsText = "Items";
    if (numericStepper.quantityNumericStepper > 1) {
      setLabel({ labelText: `${itemsText}` });
    } else if (numericStepper.quantityNumericStepper <= 0) {
      setLabel({ labelText: `Item` });
    }
  }, [numericStepper.quantityNumericStepper]);

  // add item
  const { addItems } = useOrderItems();
  const skuItem = [
    {
      id: valor[0]?.itemId,
      seller: "1",
      quantity: 1,
    },
  ];
  const addToCartItem = async () => {
    try {
      await addItems(skuItem);
    } catch (error) {
      console.error("erro ao add produti", error);
    }
  };

  // remover item
  const skuItemRemove = [
    {
      id: valor[0]?.itemId,
      seller: "1",
      quantity: -1,
    },
  ];
  const removerCartItem = async () => {
    try {
      await addItems(skuItemRemove);
    } catch (error) {
      console.error("erro ao add produti", error);
    }
  };


  // precisa tratar update quantity
  const skuItemUpdate = [
    {
      id: valor[0]?.itemId,
      seller: "1",
      quantity: +1,
    },
  ];
  const updateCartItems = async() => {
    try{
      await addItem(skuItemUpdate)
    }catch (error) {
      console.error("erro ao add produti", error);
    }
  }

  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-8">
        <div className={styles.content_btnAddToCart_custom}>
          {showButton && (
            <div className="mt4">
              <Button
                variation="primary"
                onClick={() => {
                  setAddItem({ isLoading2: !addItem.isLoading2 });
                  setShowNumericStepper(true);
                  setProductDetailsItem({ ...valor, selectedItemQuantity });
                  addToCartItem();
                }}
                isLoading={addItem.isLoading2}
              >
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          )}
        </div>
      </div>
      {showNumeriStepper && (
        <div className="mb5">
          <div className={styles.content_btnAddToCart_custom}>
            <NumericStepper
              label={`${label.labelText} add ao carrinho ${numericStepper.quantityNumericStepper}`}
              // minValue={1}
              defaultValue={0}
              maxValue={50}
              lean
              value={numericStepper.quantityNumericStepper}
              onChange={(event) =>
                setNumericStepper({ quantityNumericStepper: event.value })
              }
              onClick={numericStepper.quantityNumericStepper < 1 ? removerCartItem() : updateCartItems()}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ButtonAddtoCart;

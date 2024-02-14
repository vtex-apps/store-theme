import React, { useEffect, useState } from "react";

import { Button } from "vtex.styleguide";
import { NumericStepper } from "vtex.styleguide";
// import { useOrderForm } from 'vtex.order-manager/OrderForm';
// import {useApolloClient} from "react-apollo";
// import addItem from '../../graphql/mutation/mutationAddItem.gql'
import styles from "../../styles/components/ButtonAddtoCart/styles.css";

const ButtonAddtoCart = ({ valor }) => {
  const [addItem, setAddItem] = useState({ isLoading2: false });
  const [numericStepper, setNumericStepper] = useState({
    quantityNumericStepper: 1,
  });

  const [showNumeriStepper, setShowNumericStepper] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [label, setLabel] = useState({ labelText: `Item` });

  const [productDetailsItem, setProductDetailsItem] = useState({});
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

  // ************** add item ******
  const updateItem = {
    productDetailsItem
    
  };

  // const { orderForm } = useOrderForm()
  // const client = useApolloClient();
  
//   const add = () => {
//   const orderFormId = orderForm.id

//   client
//   .mutate({
//     mutation: addItem,
//     variables: {orderFormId: orderFormId , items:[{
//       "id": 194,
//     "quantity": 6,
//     "seller": 1
//     }]}
//   })
//   .then(() => {
//     console.log('***aaaa*****');
   
//   })
//   .catch((error) => console.log(error))
// }


  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-8">
      <button >TEste</button>
        <div className={styles.content_btnAddToCart_custom}>
          {showButton && (
            <div className="mt4">
              <Button
                variation="primary"
                onClick={() => {
                  setAddItem({ isLoading2: !addItem.isLoading2 });
                  setShowNumericStepper(true);
                  setProductDetailsItem({...valor, selectedItemQuantity});
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
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ButtonAddtoCart;

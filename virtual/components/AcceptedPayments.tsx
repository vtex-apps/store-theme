import React from 'react'
import { AcceptedPaymentMethods } from 'vtex.store-footer'

const paymentMethods = ["MasterCard", "Visa", "Diners Club"]

const AcceptedPayments = () => {
  return (
    <AcceptedPaymentMethods paymentMethods={paymentMethods} />
  )
}

export default AcceptedPayments

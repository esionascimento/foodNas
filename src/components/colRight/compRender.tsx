import React from 'react'
import { fechtOrderDispatch } from '../../services/FetchFood/merchantOrder'

import { DivContact } from './styled'

interface interDataLog {
  items: [],
  customer: {
    name: string
    phone: {
      number: unknown;
      localizer: unknown
    }
  },
  delivery: { deliveryAddress: { streetName: unknown, streetNumber: string } },
  payments: {
    methods: [ { method?: never } ]
  },
  total?: { deliveryFee: string, orderAmount: number }
}

interface interMapData {
  name: string, quantity: number, totalPrice: number, unitPrice: number, optionsPrice: string
}

export function CompRender(dataLog: interDataLog, select: string, selectOrderId: string) {
  function items() {
    return dataLog.items.map((aux: interMapData, index: number) => {
      return (
        <DivContact key={index}>
          <div>
            <p>{index + 1}</p>
          </div>
          <div>
            <p>{`nome: ${aux.name}`}</p>
            <p>{`quantidade: ${aux.quantity}`}</p>
            <p>{`valor unitario: ${aux.unitPrice !== 0 ? aux.unitPrice : aux.optionsPrice}`}</p>
            <p>{`Valor Total: ${aux.totalPrice}`}</p>
          </div>
        </DivContact>
      )
    })
  }

  async function handlerDispatched() {
    await fechtOrderDispatch(selectOrderId)
  }

  return (
    <>
      {select === 'confirmed' &&
        <>
          <div>
            <button onClick={handlerDispatched}>Despachar</button>
          </div>
          <h2>Pedido Confirmado</h2>
        </>
      }
      {select === 'dispatched' && <h2>Pedido Despachado</h2>}
      {select === 'concluded' && <h2>Pedido Concluído</h2>}
      {select === 'cancelled' && <h2>Pedido Cancelado</h2>}
      <div>
        <h3>Contato</h3>
        <p>{`Nome: ${dataLog && dataLog.customer.name}`}</p>
        <p>{`Telefone: ${dataLog && dataLog.customer.phone.number}`}</p>
        <p>{`Localizador: ${dataLog && dataLog.customer.phone.localizer}`}</p>
        <h3>Endereço</h3>
        <p>{`rua: ${dataLog && dataLog.delivery.deliveryAddress.streetName}`}</p>
        <p>{`numero: ${dataLog && dataLog.delivery.deliveryAddress.streetNumber}`}</p>
        <h3>Pagamento</h3>
        <p>{`metodo pagamento: ${dataLog && dataLog.payments.methods[0].method}`}</p>
        <p>{`entrega: ${dataLog && dataLog.total.deliveryFee}`}</p>
        <p>{`total: ${dataLog && dataLog.total.orderAmount}`}</p>
        {dataLog && items()}
      </div>
    </>
  )
}

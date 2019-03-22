# tp-arq-web

## Info
+ **Nombre del grupo:** DistriCaps
+ **Integrantes:** Federico Pedro Castellari
+ **Negocio:** Distribuidora de cápsulas de café. El negocio consiste en la compra-venta de cápsulas para máquinas de café.


## API 

### Items

#### /items

+ `GET` Listar todos los items.
+ `POST` Dar de alta un nuevo item. `409` `401` `400` 

#### /items/:id

+ `GET` Listar un item. `404`
+ `PUT` Actualizar item. `404` `401`


#### /items/:id/stock

+ `GET` Obtener stock de un item.  `404`
+ `PATCH` Actualizar stock de un item. `404` `401` `400`

#### /items/:id/precioCompra

+ `GET` Obtener precio de compra de un item. `404` 
+ `PATCH` Actualizar precio de compra un item. `404` `401` `400`

#### /items/:id/precioVenta

+ `GET` Obtener precio de venta un item. `404`
+ `PATCH` Actualizar precio de venta un item. `404` `401` `400`


### Ordenes

#### /orders

+ `GET` Listar todas las ordenes. 
+ `POST` Dar de alta una nueva orden. `409` `401` `400`

#### /orders/:id

+ `GET` Listar una orden. `404`
+ `PUT` Actualizar orden. `404` `401` `400`



## Recursos

+ Items
+ Orders

# Integracion Regional

## Info
+ **Nombre del grupo:** Integracion Regional
+ **Integrantes:** Federico Pedro Castellari
+ **Negocio:** Base de datos de servicios disponibles de Integracion Middleware
+ **Swagger:** https://app.swaggerhub.com/apis/fcastellari/MDWServices/1.0.0


# mdw-catalog-api 

## URIs

### Domain

#### /domains

+ `GET` Listar todos los dominios.
+ `POST` Dar de alta un nuevo item. `409` `401` `400` 

#### /domains/:id

+ `GET` Listar un dominio. `404`
+ `PUT` Actualizar un dominio. `404` `401`

#### /domains/:domainName

+ `GET` Listar un dominio. `404`
+ `PUT` Actualizar un dominio. `404` `401`

#### /items/{id}/estado

+ `GET` Obtener estado de un dominio.  `404`
+ `PATCH` Actualizar estado de un dominio. `404` `401` `400`


### Servicios

#### /servicios

+ `GET` Listar todos los servicios. 
+ `POST` Dar de alta un nuevo servicio. `409` `401` `400`

#### /servicios/{id}

+ `GET` Listar un servicio. `404`
+ `PUT` Actualizar orden. `404` `401` `400`



### Models

+ Domain
+ Service
+ Owner

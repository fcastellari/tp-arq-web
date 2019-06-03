# Integracion Regional

## Info
+ **Nombre del grupo:** Integracion Regional
+ **Integrantes:** Federico Pedro Castellari
+ **Negocio:** La API es para consultar servicios disponibles y algunas de sus configuraciones del área de Integracion Middleware
+ **Swagger:** https://app.swaggerhub.com/apis/fcastellari/MDWServices/1.0.0


# mdw-catalog-api 

## URIs

### Domain

#### /domains

+ `GET` Listar todos los dominios. `500`
+ `POST` Dar de alta un nuevo dominio.  `400` `500` 

#### /domains/:id

+ `GET` Buscar dominio por id. `400` `404` `500`
+ `PUT` Actualizar un dominio. `400` `404` `500`

### Owner

#### /owners

+ `GET` Listar todos los owners. `500`
+ `POST` Dar de alta un nuevo owner.  `400` `500` 

#### /owners/:id

+ `GET` Buscar owner por id. `400` `404` `500`
+ `PUT` Actualizar un owner. `400` `404` `500`

### Service

#### /services

+ `GET` Listar todos los servicios. `500`
+ `POST` Dar de alta un nuevo servicio. `400` `404` `500`

#### /services/:serviceId

+ `GET` Buscar un servicio por id. `404` `500`
+ `PUT` Actualizar orden. `400` `404` `500`
+ `PATCH` Actualizar un campo del servicio `400` `404` `500`

### /services:serviceName

+ `GET` Buscar un servicio por nombre. `404` `500`

### Models

+ Domain
+ Service
+ Owner

### Correr API

## Ejecutar npm install y luego npm start

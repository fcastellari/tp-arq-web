# MDW Services Catalog
MDW Services Catalog API

## Version: 1.0.0

**Contact information:**  
federico.castellari@gmail.com  

**License:** [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

### /owners

#### GET
##### Summary:

search for owners

##### Description:

Get all owners

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 500 | internal error while retrieving owners |

#### POST
##### Summary:

add a new Owner

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Owner created |
| 400 | Owner data validation error |
| 500 | internal error while creating Owner |

### /owners/:ownerId

#### GET
##### Summary:

get owners by ownerId

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ownerId | path | ownerId that needs to be fetched | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 404 | ownerId does not exist |
| 500 | internal error while retrieving Owner |

#### PATCH
##### Summary:

updates an owner

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| ownerId | path | owner id that needs to be fetched | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Owner updated |
| 400 | Owner data validation error |
| 404 | serviceId does not exist |
| 500 | internal error while updating Owner |

### /services

#### GET
##### Summary:

search for all services

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 500 | internal error  while retrieving Service |

#### POST
##### Summary:

add a new Service

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Service created |
| 400 | Service data validation error |

### /services/:serviceId

#### GET
##### Summary:

get services by Service id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| serviceId | path | Service ID that needs to be fetched | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 404 | serviceId does not exist |
| 500 | internal error while retrieving Service |

#### PATCH
##### Summary:

updates a service

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| serviceId | path | Service ID that needs to be fetched | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | service updated |
| 400 | Service data validation error |
| 404 | serviceId does not exist |
| 500 | internal error while updating Service |

### /domains

#### GET
##### Summary:

search for domains

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 500 | internal error  while retrieving Service |

#### POST
##### Summary:

add a Domain

##### Description:

Adds domain to the system

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | domain created |
| 400 | Domain data validation error |
| 500 | internal error  while creating Domain |

### /domains/:domainId

#### GET
##### Summary:

get Domain by id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| domainId | path | domainId that needs to be fetched | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | search results matching criteria |
| 404 | Domain does not exist |
| 500 | internal error  while retrieving Domain |

#### PATCH
##### Summary:

update Domain

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| domainId | path | domainId that needs to be updated | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Domain updated |
| 400 | Domain data validation error |
| 404 | domainId does not exist |
| 500 | internal error  while updating Service |

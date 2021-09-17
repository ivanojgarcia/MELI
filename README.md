
#  Aplicación que simula la búsqueda y muestra de porductos Mercadolibre
El presente  proyecto busca simular la búsqueda y muestra de un catálogo de producto y el detalle del mismo.
Las tecnologías utilizadas en el proyecto son:

- GraphQL

- Apollo Server

- NodeJS

- NetxJS

- Apollo Client

  

#  Get started
  

Clone the repository

```sh
git clone https://github.com/ivanojgarcia/MELI.git
```

Instalar las dependencias tanto de Frontend como backend para ello ingresaremos a cada uno de los directorios para su instalación:
## Backend

 - Accedemos al directorio backend `cd backend`
 - Instalamos las dependencias `yarn`
 - Renombrar el archivo `.env.example` a `.env` ya que contiene la variable de entorno que contiene la URL-BASE del servicio de MELI.
 - Inicializamos el servidor por medio de `yarn start` para ambiente de certificación o de Porducción y `yarn dev` para ambiente de desarrollo.
 - Se debería ver algo parecido a esto:
```sh
➜  MELI git:(master) ✗ cd backend 
➜  backend git:(master) ✗ yarn start
yarn run v1.22.10
$ babel-node index.js
🚀  Server ready at http://localhost:4000/
```

### Queries de GraphQL ### 
  Actualmente el backend está utilizando GraphQL para la exposición de la data, para ello podemos ingresar al playground de **GraphQL**  accediendo a la URL `http://localhost:4000/graphql` 
*Ejemplo de como podría verse el playground para las query*

![enter image description here](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2da3bb2-e97e-4e08-9e3b-d3a4b1c76f61/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210917/us-west-2/s3/aws4_request&X-Amz-Date=20210917T153655Z&X-Amz-Expires=86400&X-Amz-Signature=4a24cb040d0bbfa6ae3e8497142c15130f1015bf447dbc9a0c2c0120b33d624d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22Untitled.png%22)

**Query para obtener la lista de productos por palabra clave KEY** 

```graphql
    query GetProductByKey($input: queryProductInput){
      getProductsByKey(input: $input) {
        author{
          name
          lastname
        }
        categories
        items {
          id
          title
          price {
            currency
            amount
            decimals
          }
          picture
          condition
          free_shipping
        }
      }
    }
```
Variables de ejemplo:

```json
    {
    	"input": {
    		"key": "iphone negro",
    		"limit": 10
    	}
    }
```
**Query para obtener el detalle de un producto por ID** 

   
```graphql
     query ProductDetail($id: String) {
           productDetail(id: $id) {
            author {
              name
              lastname
            }
            item {
              id
              title
              price {
                currency
                amount
                decimals
              }
              picture
              condition
              free_shipping
              description
            }
          }
        }
```
Variable de Ejemplo:
```json
  {
    "id": "MLA919970533"
  }
```

**Frontend**

  Debemos ir un directorio atras y para ello podemos ejecutar (si estamos en el directorio backend) `cd ..` 

  - Accedemos al directorio frontend `cd frontend`
  - Instalamos las dependencias `yarn`
  - Inicializamos la aplicación por medio de `yarn dev`. Este se inicializará en el puerto `http://localhost:3000/ `

  Debería verse algo de la siguiente manera:

  ![enter image description here](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5d58251b-1b88-4a1e-97e5-20290efda0e5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210917/us-west-2/s3/aws4_request&X-Amz-Date=20210917T155914Z&X-Amz-Expires=86400&X-Amz-Signature=7e6e0dfec7a0d2e0de5c3164a91d300c38331d0a048c943749b6ffe8c13cb525&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22Untitled.png%22)

  Solo quedaría probar el sitio y para ello podemos escribir en el buscador **Samsung** y presionamos **Enter**, la vista mostrará el catálogo de los productos.

  ![enter image description here](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d74d5694-7106-4957-be6d-f701598013c1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210917/us-west-2/s3/aws4_request&X-Amz-Date=20210917T160529Z&X-Amz-Expires=86400&X-Amz-Signature=3c7f88b3229ee131742a77ed93bd306e8c3290116f6168d83680b6a0d91d51da&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22Untitled.png%22)

  Para ver el detalle del producto damos Click en la card

  ![enter image description here](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b1744fb5-2afd-4678-9e70-f0a1f6be708c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210917/us-west-2/s3/aws4_request&X-Amz-Date=20210917T160901Z&X-Amz-Expires=86400&X-Amz-Signature=e3224a60502b7a4e483c8e0f52c994502cf311c5754e687cb138a4f7dd0d6b85&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22Untitled.png%22)


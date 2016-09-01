# PrestaShop API requirements

- List products

	Satisfiable via
	```
	GET /api/products
	```

- Get product details

	Satisfiable via
	```
	GET /api/products/:id
	```

Checkout/payment will take place on the PrestaShop application domain. The
checkout process will be initiated by the browser when it arrives on the 
PrestaShop domain via cross-domain POST:

    **Request**
    ```
    POST /path/to/cart/creation/endpoint HTTP/1.1
    Host: shop.domain
    Content-Type: application/x-www-form-urlencoded

    id_lang=2&products[0][id_product]=9&products[0][id_product_combinaison]=55 ...
    ```

    The server will create a cart persistence for the browser, then issue
    a redirect response to the checkout page. The response will also set
	PrestaShop cookies as needed.

    **Response**
    ```
    HTTP/1.1 302 Found
    Host: shop.domain
    Set-Cookie: ...
    Location: https://shop.domain/es/order
    ```


# API workflows by use case

## Product list

- List all products:

    ```
    /api/products
    ```

- Retrieve a product by ID:
    ```
    /api/products/:id
    ```

    These xpath expressions are relevant:

        ```
        /product/active
        /product/id_default_image
        /product/name
        /product/price
        /product/description
        /product/associations/combinations/combination/id
        /product/associations/stock_available/stock_available/id
        ```

- Retrieve a product image:

    - First retrieve the product, then locate the default image id via xpath 

        /product/id_default_image

    - Derive the image path as follows:

        /api/images/products/8/:id_default_image


- Retrieve details about a product combination (a.k.a., "edition")

    ```
    /api/combinations/:combination_id
    ```

    These xpath expressions are relevant:

    ```
    /combination/quantity
    /combination/unit_price_impact
    /combination/associations/product_option_values/product_option_value/id
    ```

- Get name of production combination:
    ``` 
    /api/product_option_values/:combination_id
    ```

    Relevant xpaths:
    ```
    /product_option_value/name
    /product_option_value/id_attribute_group/id
    ```

- Get the combination group :
    http://IW6SQL9FICVWMJ6BWBASP24ABCNSSEZW@havana.it-consultis.net/api/product_options/4

- XML :
    prestashop -> product_option -> name


# Shop Domain Objects

## Product

- Product is a thing that can be offered for sale.
- Product always has `n` child Combinations, where `n > 0`.

    ```javascript
    {
      id: 10,
      name: 'Elliott Erwitt Viñales. Cuba. 2015',
      manufacturer: 'Elliot Erwitt',
      image: 'http://havana-shop.local/api/images/products/10/26',
      description: '',
      price: 900,
      alt: 'Silver gelatin print measuring\n\n27.9 × 35.6 cm, unframed.\n\nPrinted under the direct supervision of the artist.\n\nOne of a signed, limited edition of 10.',
      forsale: true,
      combinations: [...]
    }
    ```

    **Attributes**

        id              primary key
        name            translated, human-readable name
        manufacturer    human-readable name of the company or individual who makes the product
        image           a fully qualified URL that points to a file having content type image/*
        description     translated, human-readable description
        price           unit price
        alt             translated, human-readable short description
        forsale         is the product on offer?
        combinations    a list of child Combination payloads; this list may not be empty
        

## Combination

- Combination is a discrete variation of a single Product.
- Combination always belongs to exactly one Product.
- Combination conveys stock quantity and logistics information.

    ```javascript
    {
      id: 64,
      product_id: 10,
      name: 'Edition 1',
      stock: 3,
      logistic_id: 'EE15_05_01'
    }
    ```

    **Attributes**

        id            primary key
        product_id    identifies the parent Product
        name          translated, human-readable name
        stock         available quantity
        logistic_id   logistics-related identifier


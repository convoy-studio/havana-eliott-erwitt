# Questions

**General**

- I am informed there are *two* Git repositories for this project.
  Did I fork the right one?

    ```
    ssh://git@github.com:convoy-studio/havana-eliott-erwitt.git
    ```

**Javascript**

- Can I configure Webpack to use the `stage-0` Babel preset?

- Where do you want me to put mocha tests? How about:
    ```
    app/js/tests
    ```

- Can I add these npm dependencies to the project?
    ```
    xml2js
    ```

- Can I add these npm dev dependencies to the project?

    ```
    mocha
    chai
    sinon
    babel-register
    babel-preset-es2015
    babel-preset-stage-0
    babel-preset-react
    ```

- I see you employ Flux to maintain state. Can I refactor the existing
  `CartStore`, or should I implement a new one?

- I want you to be aware I will try to reuse the React components defined in:
    ```
    app/js/components/pages/shop.js
    components/modules/cart.js
    ```
    I will also reuse the actions defined in
    ```
    app/js/actions/cartActions.js
    ```

**PHP**

- Can I use PHP7 language features? PHP 5.6?

- Can I use these PHP extensions?

    ```
  	mbstring
    ```

- Please be aware that I need to somehow proxy AJAX requests from the JS frontend to the API server. I need to do this because the PrestaShop API's HTTP interface *[requires a secret to be in the URL](http://doc.prestashop.com/display/PS16/Web+service+one-page+documentation#Webserviceone-pagedocumentation-Accessingthewebservicefromthebrowser)*. Exposing this secret to the front end application is a security risk.

    There are two ways we can do this:

    - via web server configuration

        For example, nginx `proxy_pass`.
        This is the more performant option, but you will have to configure
        the web server yourselves.

    - via proxy script

        This is not too performant, but very *portable*.

    Please let us know how you want to proceed.

- These are the Composer dependencies I would need if you opt for the proxy script.
  ```
	guzzlehttp/guzzle
	symfony/http-foundation
	sebastiansulinski/dotenv
  ```

- If you opt for the proxy script, I might need to understand how you deploy your code. I will need to add some code to `config.php` so it loads configuration values from a `.env` file that is outside the web document root.

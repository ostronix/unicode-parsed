<p align='center'>
<a href="https://www.npmjs.com/package/unicode-parsed"><img src="https://img.shields.io/npm/v/unicode-parsed.svg?style=flat-square" alt="NPM version"></a>
</p>

<p align='center'><img src='https://img.shields.io/badge/code%20style-standard-brightgreen.svg'></img></p>
<p align='center'><img src='https://img.shields.io/npm/dt/unicode-parsed.svg'></img></p>

## 📦 Installation

> **[Node.js](https://nodejs.org/) 12.20.0 or newer is required**

- **Using `Yarn`** (recommended)
  ```shell
  yarn add unicode-parsed
  ```
- **Using `npm`**
  ```shell
  npm i unicode-parsed
  ```
- **Using `pnpm`**
  ```shell
  pnpm add unicode-parsed
  ```

  ## 🎃 Usage
   
   Create a .(FILENAME) or (FILENAME).parse file in the root of your project:

   ```javascript
     $(TOKEN_PARSE) = 0
     $(UNICODE) = "utf-8"
   ```

   ## 🛒 Parse script 
    
    ```javascript
    const { config } = require ("unicode-parsed")

    const parsed = config (".parsed") // {OPTIONS} filename

    console.debug (parsed.TOKEN_PARSE) // output: 0
    console.debug (process.parse.TOKEN_PARSE) // output: 0
    console.debug (process.intige.UNICODE) // output: utf-8
    ```
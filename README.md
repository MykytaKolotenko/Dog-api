# Title

Little test project in one famouse company.

## Description

This project use modern technolgy to show my junior power.

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Installation

1. Clone project
2. Run `npm install`
3. Check that you have a DB. If not create it, by using this code `CREATE DATABASE db_name;`
4. Run `npm run initTable`
5. After that you need to create `.env` file in the root. With this poles:
   - `PORT` - port where the server opens
   - `VERSION` - version of app
   - `BASE` - DB name
   - `USER` - user name of SQL database
   - `SQL_PASS` - password for SQL user

## Endpoints

- ### `GET:/ping/`

        **Response:**

            "version": "string",

- ### `GET:/dog/`

  **Query params**

  1. `per-page` - limit if items, default `5`,
  2. `page` - number of page, default `1`
  3. `attribut` - `id`, `name`, `color` or `tail_length`
  4. `order` - `asc` or `desc`

  **Response** **_- array of:_**

        "id": "string",
        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number",

- ### `GET:/dog/:id`.

  `id` - data's id

  **Response:** **_object_**

        "id": "string",
        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number",

- ### `POST:/dog/`.

  **Rerquest:** **_object_**

        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number"

  **Response:** **_object_**

        "id": "string",
        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number",

- ### `PATCH:/dog/:id`.

  `id` - data's id

  **Rerquest:** **_object_**

        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number"

  All parameters are optional.

  **Response:** **_object_**

        "id": "string",
        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number",

- ### `DELETE:/dog/:id`.

  `id` - data's id

  **Response:** **_object_**

        "id": "string",
        "name": "string",
        "color": "string",
        "weight": "number",
        "tail_length": "number",

## Technologies Used

Node, Express, SQL, Sequalize, Joi and etc.

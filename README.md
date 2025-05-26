# DummyJSON API Test Suite

## Project Overview

This project uses Rest Assured with Allure reporting to automate API tests against the [DummyJSON API](https://dummyjson.com/docs).

We cover the following endpoints:

* **GET /test** – health check endpoint
* **GET /users** – retrieve paginated list of users
* **POST /auth/login** – authenticate a user and receive tokens
* **GET /auth/products** – retrieve authenticated products list
* **POST /products/add** – create a new product
* **GET /products** – retrieve paginated list of products
* **GET /products/{id}** – retrieve a single product by ID

## Repository Structure

```
qa-api-tests/
├── src/
│   ├── main/
│   │   └── java/com/dummyjson/rest/client     # Rest Assured client classes
│   └── test/
│       └── java/com/dummyjson/rest/tests      # Test classes by feature
├── schemas/                                   # JSON Schema files for validation
├── allure-results/                            # Allure raw results (gitignored)
├── allure-report/                             # Generated Allure report
├── pom.xml                                    # Maven configuration
└── README.md                                  # Project documentation
```

## Prerequisites

* Java 11 or higher
* Maven 3.6+
* Internet access to `https://dummyjson.com`

## Setup

1. Clone the repository and switch to `main` branch:

   ```bash
   git clone git@gitlab.com:yourgroup/qa-api-tests.git
   cd qa-api-tests
   git checkout main
   ```
2. The `pom.xml` defines dependencies for Rest Assured and Allure reporting.
3. (Optional) Set `BASE_URI` via environment variable if overriding default:

   ```bash
   export API_BASE_URL=https://dummyjson.com
   ```

## Running Tests

Run tests with Maven:

```bash
mvn clean test
```

Generate and open Allure report:

```bash
mvn allure:serve
```

This will compile results into `allure-report/` and open it in your default browser.

## Test Plan and Strategy

* **Scope**: Cover functional and negative scenarios for all listed endpoints.
* **Architecture**:

    * **Clients** encapsulate Rest Assured requests and common specifications (logging, filters).
    * **Factories** generate valid and invalid DTOs for data-driven tests.
* **Test Categories**:

    * Health Check (`GET /test`)
    * User flows (`GET /users`)
    * Authentication (`POST /auth/login`)
    * Product operations (`GET /auth/products`, `POST /products/add`, `GET /products`, `GET /products/{id}`)
* **Validation**:

    * Schema validation with JSON Schema files in `/schemas`
    * Response body and status code assertions
    * Negative tests for error status codes and messages

## Bugs and Improvements

* **Bugs Identified**:

    * None in DummyJSON (mock service) but tests include negative scenarios to simulate failures.
* **Suggested Improvements**:

    * Add parameterized boundary tests for product price and rating.
    * Enhance concurrency tests for bulk product creation.
    * Integrate CI pipeline to run `mvn clean test` and publish Allure report on merge to `main`.

## Managing Reports

* **Allure Results** are stored in `allure-results/` (ignored by Git).
* **Allure Report** can be generated via `mvn allure:report` and published as pipeline artifact.

---

*Last updated: May 26, 2025*

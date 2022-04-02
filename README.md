# Capricorn Swap SDK

Forked from the [Uniswap SDK](https://github.com/Uniswap/uniswap-v2-sdk/commit/a88048e9c4198a5bdaea00883ca00c8c8e582605).

You can refer to the Uniswap SDK documentation [uniswap.org](https://uniswap.org/docs/v2/SDK/getting-started/).

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/capricorn-swap/capricorn-swap-sdk.git
```

Move into the capricorn-swap-sdk working directory

```sh
cd capricorn-swap-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.4
$ tsdx test
 PASS  test/constants.test.ts
 PASS  test/route.test.ts
 PASS  test/fraction.test.ts
 PASS  test/token.test.ts
 PASS  test/pair.test.ts
 PASS  test/miscellaneous.test.ts
 PASS  test/router.test.ts
 PASS  test/entities.test.ts
 PASS  test/trade.test.ts

Test Suites: 1 skipped, 9 passed, 9 of 10 total
Tests:       3 skipped, 125 passed, 128 total
Snapshots:   0 total
Time:        1.945s, estimated 2s
Ran all test suites.
✨  Done in 3.27s.
```

## Excel Parser

Parse excel `.xlsx` files into arrays and json objects and write them to a file.

#### Current Features

* Reads `.xlsx` files
* Writes `.json` files
* Can indicate which column to use as the key
* Catches and notifies if an error if `.xlsx` file doesn't exist or is invalid
* Catches and notifies if requested deleted rows or columns doesn't exist in the `.xlsx` file but saves the file anyways

### How it works

#### Arguments

```
$ node app (root-filename) (index-of-column-for-key)

```

#### Examples

Reads `sample.xlsx` file by default and uses the first column as the key

```
$ node app

```
Reads `test.xlsx` file and uses the first column as the key

```
$ node app test

```
Reads `test.xlsx` file and uses the 2nd column (index 1) as the key

```
$ node app test 1

```

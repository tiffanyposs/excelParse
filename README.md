##Excel Parser

Parse excel `.xlsx` files into arrays and json objects and write them to a file.

####Current Features

* Reads `.xlsx` files
* Writes `.json` files
* Can remove one row or column on request
* Catches and notifies if an error if `.xlsx` file doesn't exist or is invalid
* Catches and notifies if requested deleted rows or columns doesn't exist in the `.xlsx` file but saves the file anyways

####Future Features

* Ways to covert into an object in addition to an array
* Choose write file type
* Choose write file name
* More specific row and column deleting


###How it works

####Arguments

```
$ node app (root-filename) (row-deleted) (column-deleted)

```

####Examples

Reads `sample.xlsx` file by default and write it to `sample.json`

```
$ node app

```
Reads `test.xlsx` file that is passed in and writes it to `sample.json`

```
$ node app test

```
Reads `test.xlsx` file and deletes the first row from the file

```
$ node app test 1

```
Reads `test.xlsx` file and deletes the first row from the file and 2nd column

```
$ node app test 1 2

```
Reads `test.xlsx` file and deletes no rows from the file and deletes the 1st column

```
$ node app test 0 1

```


# Zendesk Interactive CLI Search Tool

CLI search tool that lists the fields and searches through a dataset. 

## Instructions

First clone this repository.
```bash
$ https://github.com/mchourishi/zendesk-search.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start
```
Run Tests
```bash
$ npm test # or yarn test
```

## Steps

1. npm start will load the Search tool.
2. Type help to list available commands or type exit to quit.
3. Type list with dataset to list fields for a particular dataset or with no dataset provided to list fields from all datasets.
4. Type search with dataset, field and value to search through a dataset.

## Analysis/Decisions

I have done the tool with JavaScript/ES6 and with the help of NodeJS's Vorpal was able to achieve it.
Vorpal has some inbuilt commands like exit and help to provide suggestion on commands.
Created commands called list to list the fields and search to search through a dataset.


## Examples

1. List fields for users dataset.
```
list users     
```
OR just list to display fields from all datasets.
```
list
```



2. Search through a dataset with field and value passed.
- Search for a number field.
```
search users _id 1
```
OR
- Search for a String field.
```
search users name franc
```
OR
- Search for a Boolean field
```
search users active true
```
OR 
- Search for an Object field.
```
search users tags Bonanza
```
## Screenshots

-List Fields

<img src= "https://github.com/mchourishi/zendesk-search/blob/master/screenshots/list_users_fields.png">

-Search

<img src= "https://github.com/mchourishi/zendesk-search/blob/master/screenshots/search_users_by_id.png">

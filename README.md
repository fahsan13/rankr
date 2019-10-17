# Rankr

Rankr is a React application allowing users to randomly view a predefined set of articles. Once all articles have been viewed, the user can then submit a ranking. 

The application is able to retrieve & parse provided JSON article data to render a random article on load. When the user requests another article, another random article is loaded from the remainder of the set. 

Once all articles have been viewed, the user can submit a ranking (currently in the form of a comma-separated list).

## Getting Started

If you have Git & NodeJS/NPM installed, run the following commands:

```
$ git clone https://github.com/fahsan13/rankr.git
$ cd rankr/ && npm install
```

To start the development server on port 3000, run:

```
$ npm start
```

Run tests using:

```
$ npm test
```

## Assumptions

- Code is to be written according to ES6 spec. 
- There are a fixed number of articles to be viewed.
    - In practice, we would retrieve the number of articles to be viewed from a server request to set/propagate in application state, allowing for an arbitrary number of articles to be viewed.

## Future work

- Refactor to use more idiomatic React style where appropriate.
    - Generally, I feel I did a good job of this having made heavy use of official React docs. As my knowledge of React grows, there are likely parts I'd want to refactor according to best practice.
- Caching of articles.
- Implementation of Cucumber scenarios for browser-based E2E workflows.
- Investigation/implementation of snapshot-based Jest tests.
    - This is another new area (to me) that I unfortunately couldn't explore due to time constaints.
- Refine styling.
    - I opted to put all CSS in App.css. As the application grows, I'd look to separate concerns and extract out relevant CSS for components into their own files.
- Improved error handling.
- Manual build configuration.

## Reflection

Coming from an ExtJS background, I enjoyed the experience of using React; I was able to get up and running with it very quickly by comparison. Given the component-based nature of both frameworks, I found my existing experience translated well when learning React in a short space of time.
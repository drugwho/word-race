# word-race
An interactive typing game, created useing Vanilla JS, HTML5 and CSS3. Backend implemented on Node.js(with Express), with MongoDB used as persistent store. 

# Installation Instructions 🚀

### After cloning into the project, cd into waor-race-master and
### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Run Express from root

```bash
npm run server
```


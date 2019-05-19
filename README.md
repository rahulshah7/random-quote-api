# random-quote-api

Live Demo: https://randomquote-api.herokuapp.com/api/random-quote

### Deployment

To deploy as a new heroku site:

1. Install heroku for your operating system and login
1. Clone repo
1. `cd` to project cloned repo
1. Test locally with `heroku local web -p 8000` or `-p ####` if 8000 is not free
1. `heroku create [appname]` to create the new heroku site, choose an `appname` or omit for a random name.
1. Deploy site by pushing to the heroku remote created in the previous step `git push heroku master`
1. Navigate to https://**appname**.herokuapp.com/api/random-quote once deployment has completed in your command line


### Usage: retrieve a quote object

###### REQUEST

```

GET /api/random-quote

```

###### RESPONSE (200 OK)

```json

{  
  "quote":"Have the courage to face a difficulty lest it kick you harder than you bargain for.",
  "author":"Stanislaus I",
  "category":"courage"
}

```

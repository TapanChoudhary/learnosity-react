# learnosity-react

If you see below mentioned error -

- Missing security parameters. Check the following parameter(s): consumer_key, domain, timestamp, signature

Make sure that you have .env file in your local and for server you have set the environment variables properly.

- your .env file should have below values
  REACT_APP_CONSUMER_KEY='YOUR_CONSUMER_KEY_HERE'
  REACT_APP_LEARNOSITY_SECRET_KEY='YOUR_SECRET_KEY_HERE'

Both values will be provided from learnosity itself.

# slack-javascript-eval
Slack app for evaluating Javascript

## Testing locally

```sh
yarn dev
```

```sh
curl -X POST -H "Content-Type: application/json" --data '{"text":"2+2"}' localhost:3000/api/eval
```

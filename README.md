## Results

For 100 renderings

DEV

- Img takes ~11ms
- SVG with classes takes ~15ms
- SVG with props takes ~19ms

PROD

- IMG takes ~5ms
- SVG with classes takes ~5ms
- SVG with props takes ~7ms


## Usage

### Dev
`npm run start`

### Prod
`npm run build` then
`yarn global add serve` then
`serve -s build` for prod

Open console
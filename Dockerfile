FROM node:14-alpine AS builder

# TODO: Update README.md

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

# Install dependencies
RUN if [[ ! -d ./node_modules ]]; then pnpm install; fi

# Build project
RUN pnpm run build

# Strip out dev-dependenceis
RUN pnpm prune --prod --no-optional

FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

CMD ["node", "./dist/main.js"]

EXPOSE 5000

FROM node:lts-alpine3.19

ENV NODE_ENV=production

WORKDIR /app

# User
ARG UID=10001
RUN --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser
USER appuser

# Dependencies
COPY package.json .
RUN npm install

# Compilation
COPY . .
RUN npm run build

# Run
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]
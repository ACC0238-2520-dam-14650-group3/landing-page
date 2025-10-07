from node:20-alpine AS base
WORKDIR /app

FROM base AS dev
COPY package*.json ./
RUN npm i
COPY . .
ENV CHOKIDAR_USEPOLLING=true
CMD sh -c "npm run dev -- --host 0.0.0.0 --port ${VITE_PORT:-5173}"

FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
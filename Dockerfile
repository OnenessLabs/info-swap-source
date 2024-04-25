# *****************************
# *** STAGE 1: Dependencies ***
# *****************************
FROM node:16.14.0-alpine AS deps
### APP
# 补充依赖
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# *****************************
# ****** STAGE 2: Build *******
# *****************************
FROM node:16.14.0-alpine AS builder

ENV NODE_ENV production

### APP
# 拷贝依赖和源码
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build app for production
RUN yarn build

# *****************************
# ******* STAGE 3: Run ********
# *****************************
# 初始化一个 nginx 镜像  存放react spa项目
FROM nginx:1.25.5-alpine AS Runner

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM golang:1-alpine as backend-builder
COPY ./backend /backend
WORKDIR /backend
ENV CGO_ENABLED=0
RUN go build -o app

FROM node:14-alpine as frontend-builder
COPY ./frontend /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build

FROM alpine:3 as runner
COPY --from=backend-builder /backend/app /bin/app
COPY --from=frontend-builder /frontend/public /frontend
EXPOSE 8080
ENV PREFIX=/frontend
ENTRYPOINT ["app"]
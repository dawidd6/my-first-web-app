FROM golang:1-alpine as builder
COPY . /app
WORKDIR /app
RUN apk -U add make
RUN make

FROM alpine:3 as runner
COPY --from=builder /app /app
WORKDIR /app
EXPOSE 8080
ENTRYPOINT ["/app/my-first-web-app"]
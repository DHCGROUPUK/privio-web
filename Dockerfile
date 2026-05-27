FROM nginx:alpine
RUN echo "Hello from privio-web Railway test" > /usr/share/nginx/html/index.html
EXPOSE 80

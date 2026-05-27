FROM node:22-bullseye-slim
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["sh", "-c", "node .next/standalone/server.js"]

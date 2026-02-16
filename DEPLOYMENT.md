# LUFS Web - Deployment Guide

This document covers deploying the LUFS Web application in production environments.

## Table of Contents

1. [Docker Standalone Mode](#docker-standalone-mode)
2. [Nginx Configuration](#nginx-configuration)
3. [Docker Compose Deployment](#docker-compose-deployment)
4. [Standalone Deployment](#standalone-deployment)
5. [SSL/TLS Setup](#ssltls-setup)
6. [Monitoring & Health Checks](#monitoring--health-checks)

---

## Docker Standalone Mode

The application is configured for **standalone Docker deployment** (no separate base image dependencies).

### Building the Docker Image

```bash
# Build the image
docker build -t lufs-web:latest .

# Or with custom tag
docker build -t lufs-web:$(date +%Y.%m.%d) .
```

### Running as Docker Container

```bash
# Basic run
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  --restart unless-stopped \
  --name lufs-web \
  lufs-web:latest

# With custom logging
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  --restart unless-stopped \
  --name lufs-web \
  --log-driver json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  lufs-web:latest
```

### Docker Image Details

**Multi-stage build** for optimal image size:
1. **base**: Node.js 20-alpine + pnpm
2. **deps**: Install dependencies
3. **builder**: Compile Next.js application
4. **runner**: Final production image with app

**Image optimizations**:
- Non-root user (`nextjs:nodejs`)
- Health checks included
- Production-ready Node.js configuration
- Minimal attack surface

---

## Nginx Configuration

### Configuration Files

- **`nginx-docker.conf`**: For Docker Compose deployment
- **`nginx-production.conf`**: For standalone/production deployment (recommended)

### Key Features in nginx-production.conf

#### Gzip Compression
- Enabled for text, CSS, JavaScript, JSON, fonts, images
- Compression level: 6 (good balance of speed/ratio)
- Min size: 1000 bytes (don't compress tiny files)

#### Security Headers
- **Content-Security-Policy**: Restrict resource loading
- **X-Content-Type-Options**: Prevent MIME sniffing
- **X-XSS-Protection**: Enable browser XSS protection
- **X-Frame-Options**: Prevent clickjacking
- **Referrer-Policy**: Control referrer leaking
- **Permissions-Policy**: Restrict browser APIs (geo, camera, etc.)

#### Static Asset Caching
- **Next.js internal assets (`_next/static`)**: 1 year (immutable)
- **Public assets (images, fonts, etc.)**: 30 days
- Proper Cache-Control headers with must-revalidate

#### Reverse Proxy Configuration
- WebSocket support enabled
- Proper X-Forwarded headers for client IP/protocol
- Connection handling optimized for Next.js
- Buffering and timeouts configured

#### Rate Limiting (Optional)
- Prepared rate limiting zones (commented out by default)
- Configurable for API endpoints

---

## Docker Compose Deployment

### Using docker-compose.yml

The project includes a complete Docker Compose setup:

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild image
docker-compose up -d --build
```

**Services:**
- **lufs-web**: Next.js application on port 3000
- **nginx**: Reverse proxy on ports 80/443

**Networking:**
- Custom bridge network `lufs-network`
- Services communicate via service names

### Configuration

The Docker Compose uses `nginx-docker.conf`. To use the production config:

```yaml
# In docker-compose.yml, modify the nginx volume:
volumes:
  - ./nginx-production.conf:/etc/nginx/conf.d/default.conf:ro
```

---

## Standalone Deployment

### Prerequisites

- Node.js 20.x or later
- Nginx 1.20.0 or later
- SSL certificates (for HTTPS, optional)

### Installation Steps

1. **Clone repository**
   ```bash
   git clone https://github.com/8di4k/lufs_web.git
   cd lufs_web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Build application**
   ```bash
   pnpm build
   ```

4. **Start application**
   ```bash
   pnpm start
   # App runs on http://localhost:3000
   ```

5. **Configure Nginx**
   ```bash
   # Copy production config
   sudo cp nginx-production.conf /etc/nginx/sites-available/lufs-web
   
   # Create symlink
   sudo ln -s /etc/nginx/sites-available/lufs-web \
            /etc/nginx/sites-enabled/lufs-web
   
   # Remove default config if needed
   # sudo rm /etc/nginx/sites-enabled/default
   
   # Test Nginx config
   sudo nginx -t
   
   # Restart Nginx
   sudo systemctl restart nginx
   ```

6. **PM2 Process Management** (optional but recommended)
   ```bash
   npm install -g pm2
   
   # Create ecosystem file
   cat > ecosystem.config.js << 'EOF'
   module.exports = {
     apps: [{
       name: 'lufs-web',
       script: '.next/standalone/server.js',
       instances: 'max',
       exec_mode: 'cluster',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       },
       error_file: './logs/pm2-error.log',
       out_file: './logs/pm2-out.log',
       log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
     }]
   };
   EOF
   
   # Start with PM2
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

---

## SSL/TLS Setup

### Using Let's Encrypt with Certbot

1. **Install Certbot**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. **Generate certificate**
   ```bash
   sudo certbot certonly --nginx \
     -d your-domain.com \
     -d www.your-domain.com
   ```

3. **Update nginx-production.conf**
   - Replace `your-domain.com` with your actual domain
   - Uncomment the HTTPS server block
   - Uncomment the HTTP to HTTPS redirect block

4. **Enable SSL**
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Auto-renewal**
   ```bash
   # Certbot handles renewal automatically via systemd timer
   # Check status:
   sudo systemctl status certbot.timer
   ```

---

## Monitoring & Health Checks

### Health Check Endpoint

Both Nginx and the Docker Compose configuration include health checks.

**Endpoint**: `GET /health`
**Response**: `200 OK` with body `healthy\n`

**Examples**:
```bash
# Direct check
curl http://localhost:3000/health

# Via Nginx
curl http://localhost/health

# With detailed output
curl -v http://localhost/health
```

### Logs

**Nginx access logs**:
```bash
# Docker Compose
docker-compose logs -f nginx

# Standalone
tail -f /var/log/nginx/lufs-web-access.log
```

**Nginx error logs**:
```bash
# Standalone
tail -f /var/log/nginx/lufs-web-error.log
```

**Application logs**:
```bash
# Docker Compose
docker-compose logs -f lufs-web

# PM2
pm2 logs lufs-web
```

### Performance Monitoring

**Nginx metrics to monitor**:
- Response times (access logs)
- Cache hit ratios
- Upstream error rates
- 4xx/5xx error counts

**Application metrics**:
- Memory usage
- CPU utilization
- Request latency
- Build size (should be optimized)

---

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs lufs-web

# Verify image built correctly
docker build -t lufs-web:test .

# Check port conflicts
lsof -i :3000
```

### Nginx connection refused
```bash
# Test Nginx config
nginx -t

# Check if service is running
systemctl status nginx

# Verify upstream is accessible
curl http://127.0.0.1:3000
```

### High memory usage
- Check Next.js cache settings in `next.config.ts`
- Monitor with: `docker stats lufs-web`
- Consider SWR cache invalidation patterns

### Slow response times
- Check Nginx access logs: `/var/log/nginx/lufs-web-access.log`
- Verify Gzip is working: `curl -H "Accept-Encoding: gzip" -v http://localhost`
- Monitor upstream server: `tail -f .next/standalone/server.log`

---

## Security Checklist

- [ ] SSL/TLS enabled and certificates valid
- [ ] Security headers configured
- [ ] Rate limiting enabled if needed
- [ ] Firewall rules restrict access to Nginx (80/443 only)
- [ ] Non-root user running application
- [ ] Regular security updates applied
- [ ] CSP policy reviewed and customized
- [ ] Hidden files blocked (`.well-known` exception for ACME)

---

## Performance Checklist

- [ ] Gzip compression enabled and working
- [ ] Static assets cached properly
- [ ] HTTP/2 enabled for HTTPS
- [ ] Nginx buffering tuned
- [ ] Node.js running in cluster mode (optional)
- [ ] Database queries optimized
- [ ] Images optimized with Next.js Image component

---

## Production Deployment Checklist

- [ ] Environment variables set correctly
- [ ] Database credentials stored securely
- [ ] Logs rotated and monitored
- [ ] Backups scheduled
- [ ] Monitoring/alerting configured
- [ ] Rollback procedure documented
- [ ] Health checks verified
- [ ] Load testing completed
- [ ] Security audit completed
- [ ] Incident response plan ready

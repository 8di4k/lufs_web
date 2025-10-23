#!/bin/bash

# 🚀 LUFS Web Deployment Script
# Автоматическое развертывание на сервере с Nginx

set -e

echo "========================================="
echo "🚀 LUFS Web - Production Deployment"
echo "========================================="
echo ""

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "📦 Устанавливаем Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "✅ Node.js: $(node -v)"

# Проверка pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 Устанавливаем pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm: $(pnpm -v)"

# Проверка PM2
if ! command -v pm2 &> /dev/null; then
    echo "📦 Устанавливаем PM2..."
    npm install -g pm2
fi

echo "✅ PM2 установлен"
echo ""

# Установка зависимостей
echo "📦 Устанавливаем зависимости..."
pnpm install --frozen-lockfile

# Сборка проекта
echo "🏗️  Собираем production build..."
pnpm build

# Остановка старого процесса (если есть)
echo "🔄 Перезапускаем приложение..."
pm2 stop lufs-web 2>/dev/null || true
pm2 delete lufs-web 2>/dev/null || true

# Запуск нового процесса
pm2 start pnpm --name "lufs-web" -- start

# Сохранение конфигурации PM2
pm2 save

# Настройка автозапуска PM2
echo "⚙️  Настраиваем автозапуск..."
pm2 startup systemd -u $USER --hp $HOME 2>/dev/null || true

echo ""
echo "========================================="
echo "✅ Приложение запущено на порту 3000"
echo "========================================="
echo ""
echo "Статус: pm2 status"
echo "Логи:   pm2 logs lufs-web"
echo ""

# Проверка Nginx
if ! command -v nginx &> /dev/null; then
    echo "⚠️  Nginx не установлен!"
    echo ""
    read -p "Установить Nginx для работы на порту 80? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📦 Устанавливаем Nginx..."
        sudo apt update
        sudo apt install -y nginx
        
        echo "⚙️  Настраиваем Nginx..."
        # Копируем конфигурацию
        sudo cp nginx.conf /etc/nginx/sites-available/lufs-web
        sudo ln -sf /etc/nginx/sites-available/lufs-web /etc/nginx/sites-enabled/
        
        # Удаляем default конфигурацию
        sudo rm -f /etc/nginx/sites-enabled/default
        
        # Проверка конфигурации
        sudo nginx -t
        
        # Перезапуск Nginx
        sudo systemctl restart nginx
        sudo systemctl enable nginx
        
        echo ""
        echo "✅ Nginx настроен и запущен!"
        echo "🌐 Сайт доступен по адресу: http://your-server-ip"
        echo ""
        echo "📝 Для настройки домена отредактируйте:"
        echo "   sudo nano /etc/nginx/sites-available/lufs-web"
        echo "   Замените 'server_name _;' на 'server_name your-domain.com;'"
        echo ""
        echo "🔒 Для установки SSL (HTTPS):"
        echo "   sudo apt install certbot python3-certbot-nginx"
        echo "   sudo certbot --nginx -d your-domain.com"
    fi
else
    echo "✅ Nginx установлен"
    echo ""
    echo "⚙️  Обновляем конфигурацию Nginx..."
    sudo cp nginx.conf /etc/nginx/sites-available/lufs-web
    sudo ln -sf /etc/nginx/sites-available/lufs-web /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl reload nginx
    echo "✅ Nginx перезагружен"
fi

echo ""
echo "========================================="
echo "🎉 Развертывание завершено!"
echo "========================================="
echo ""
echo "🔗 Откройте в браузере: http://$(hostname -I | awk '{print $1}')"
echo ""


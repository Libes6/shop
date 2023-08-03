/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    SERVER_URL:process.env.SERVER_URL
  },
  images:{domains:['ae04.alicdn.com','ae01.alicdn.com',"cdn1.ozone.ru",'content.backcountry.com','e-sportivo.ru','cdn1.ozone.ru','vashatolstovka.ru','disk.yandex.ru','downloader.disk.yandex.ru']}
}

module.exports = nextConfig

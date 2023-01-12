FROM ubuntu:20.04
ENV TZ=Asia/Kolkata
RUN apt-get install apt-utils -y
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update -y
RUN apt-get install apache2 libapache2-mod-php7.4 php7.4-gd php7.4-mysql php7.4-curl php7.4-mbstring php7.4-intl php7.4-gmp php7.4-bcmath php-imagick php7.4-xml php7.4-zip -y
COPY . /var/www/html
RUN chown -R www-data:www-data /var/www/html
EXPOSE 80
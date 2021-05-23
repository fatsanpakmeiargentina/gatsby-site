# Fat San Pak Mei Argentina

Sitio de la escuela de Fat San Pak Mei Argentina, creado a partir de un template
de gatsby+contentful

Para la gestión de todos los contenidos, se tiene que utilizar la cuenta de
Contentful


## build productivo

Podemos probar de forma muy simple el build productivo

```bash
npm run build
docker run --rm -it -v $PWD/public:/usr/share/nginx/html -p8080:8080 nginxinc/nginx-unprivileged:1.2
```

# bonapata-partes

Este repositorio guarda una librería libre de componentes para React, escrita en Typescript.

La librería puede ser usada desde un tag `<script>` del navegador.

> También se deben importar las dependencias (react y react-dom).

## Ejemplo

```html
<script
    src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"
    crossorigin
></script>
<script
    src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"
    crossorigin
></script>
<script
    src="https://unpkg.com/@bonapata/partes@0.2.12/dist/umd/partes.js"
    crossorigin
></script>
<script>
    const pathnames = new Map();
    pathnames.set('/javascript', 'assets/images/js.png');
    pathnames.set('/mysql', 'assets/images/mysql.png');
    pathnames.set('/git', 'assets/images/git.png');
    pathnames.set('/bash', 'assets/images/gnu-bash.png');
    pathnames.set('/postgresql', 'assets/images/postgres.png');
    pathnames.set('/firewall', 'assets/images/cortafuegos.png');
    pathnames.set('/networking', 'assets/images/networking.png');
    pathnames.set('/docker', 'assets/images/docker.png');
    pathnames.set('/ssh', 'assets/images/ssh.png');
    pathnames.set('/python', 'assets/images/python.png');
    pathnames.set('/linux-basic-info', 'assets/images/linux.png');
    pathnames.set('/java', 'assets/images/java.png');
    pathnames.set('/java-process', 'assets/images/java-process.png');
    pathnames.set('/crontab', 'assets/images/cron.png');
    pathnames.set('/vim', 'assets/images/cli-file.png');
    pathnames.set('/heroku-java', 'assets/images/heroku.png');
    pathnames.set('/gpg', 'assets/images/privacyBorder.png');
    pathnames.set('/strace', 'assets/images/strace.svg');

    const props = { pathnames, right: '150px', bottom: '150px', zIndex: 9 };
    const element = React.createElement(partes.SpeedDial, props);
    const container = document.getElementById('speed-dial');

    ReactDOM.render(element, container);
</script>
```

## Muestra de la librería en uso

[Ejemplo de uso, en mis notas.](https://juanmanuelgg.github.io/)

## Documentación

[API Reference](/docs/index.md)

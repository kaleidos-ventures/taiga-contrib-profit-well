Taiga Contrib Profit Well
=========================

![Kaleidos Project](http://kaleidos.net/static/img/badge.png "Kaleidos Project")
[![Managed with Taiga.io](https://taiga.io/media/support/attachments/article-22/banner-gh.png)](https://taiga.io "Managed with Taiga.io")

The Taiga plugin to add profilt well retain snippet.

Installation
------------
### Production env

#### Taiga Front

Download in your `dist/plugins/` directory of Taiga front the `taiga-contrib-profit-well` compiled code (you need subversion in your system):

```bash
  cd dist/
  mkdir -p plugins
  cd plugins
  svn export "https://github.com/taigaio/taiga-contrib-profit-well/branches/stable/dist"  "profit-well"
```

Include in your `dist/conf.json` in `profitWellToken` the Profit Well token and in the `contribPlugins` list the value `"/plugins/profit-well/profit-well.json"`:

```json
...
    "profitWellToken": "XXXXXXXXXXXXXXXXXXXXXXXX",
    "contribPlugins": [
        (...)
        "/plugins/profit-well/profit-well.json"
    ]
...
```

### Dev env

#### Taiga Front

After clone the repo link `dist` in `taiga-front` plugins directory:

```bash
  cd taiga-front/dist
  mkdir -p plugins
  cd plugins
  ln -s ../../../taiga-contrib-profit-well/dist profit-well
```

Include in your `dist/conf.json` in `profitWellToken` the Profit Well token and in the `contribPlugins` list the value `"/plugins/profit-well/profit-well.json"`:

```json
...
    "profitWellToken": "XXXXXXXXXXXXXXXXXXXXXXXX",
    "contribPlugins": [
        (...)
        "/plugins/profit-well/profit-well.json"
    ]
...
```

In the plugin source dir `taiga-contrib-profit-well` run

```bash
  npm install
```
and use:

- `gulp` to regenerate the source and watch for changes.
- `gulp build` to only regenerate the source.


# egg-manifest

前后端使用 **manifest.json** 文件进行关联。

**manifest.json** 可以使用 *webpack-manifest-plugin* 插件生成。

## Install

```bash
$ npm i egg-manifest --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.manifest = {
  enable: true,
  package: 'egg-manifest',
};
```

## Configuration

一个后端关联一个前端

```js
// {app_root}/config/config.default.js
exports.manifest = {
    default: path.join(appInfo.baseDir, '/public/prd/manifest.json'),
};
```

一个后端关联多个前端

```js
// {app_root}/config/config.default.js
exports.manifest = {
    project1: path.join(appInfo.baseDir, '/public/prd1/manifest.json'),
    project2: path.join(appInfo.baseDir, '/public/prd2/manifest.json'),
    default: path.join(appInfo.baseDir, '/public/prd/manifest.json'),
};
````

> **注意。至少包含一个 default 配置**

see [config/config.default.js](config/config.default.js) for more detail.

## Example（在 view 中使用）

```js
<script src="<%- ctx.loadManifest('vendor.js') %>"></script>
```

或者

```js
<script src="<%- ctx.loadManifest('project1', 'star-home.js') %>.js"></script>
```

第一个参数依赖配置的 key ，比如上面 project1 项目，会去这个路径下的 manifest.json 文件中查找 lib.js。

## manifest.json 样例

```js
{
  "star-home.js": "http://localhost:7011/public/prd/star-home@dev.js",
  "star-home.css": "http://localhost:7011/public/prd/star-home@dev.css",
  "vendor.js": "http://localhost:7011/public/prd/vendor@dev.js"
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
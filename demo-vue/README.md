# Webpack Vue Example

> 使用`vue-cli`生成的Vue示例项目

* [`vue-loader`官方中文文档][1]

## 项目生成

``` bash
# 如果未安装vue-cli,需要先安装
$ npm install -g vue-cli

# 项目初始化
$ vue init webpack-simple demo-vue

```


## 项目构建

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build
```
## Babel配置

[preset-env配置](https://babeljs.io/docs/plugins/preset-env/#examples)

```json
    // .babelrc
    // 默认使用 "presets": ["last"]
    // 
    {
        "presets": [
            ["env", { "modules": false }]
        ]
    }

```

[1]: https://vue-loader.vuejs.org/zh-cn/
# ol-rectangle-draw

![ol-rectangle-draw](https://img.shields.io/badge/ol--rectangle--draw-v0.1.0-%23C50008?logo=npm)
![nodejs](https://img.shields.io/badge/nodejs-lts--v14.x-%23036200?logo=nodedotjs)
[![blog](https://img.shields.io/badge/blog-yesifang.com-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAIAQUiBhQVBA05CyK0I2z4MJTgKoV8GEoKAgZyFkT8MZfTKX4dBRFWEDP9MZfMJ3kGAQQHAQTlK4htFUEAHRMATDAAbUQAf1EAh1QAgFAAbUUATDAAHhNMDy7KJngAeUsAKBp9GEr4MJMDAQIAmWEAWzkABAOGGlD9MZYAcUgABQNoFD7mLIoAZUCdHl4ANiKiH2EpCBgAh1UAAgERAwrVKH9nFD0ALBwSAwuqIWXmK4pTEDIAWTgrCBp2F0eVHVmKG1NWETMAdEgAgVAAAQIAJTcATXIAZJQAbqUAap0AVoEAfE4AAQEAN1EAgMAAaEIACQ4Aap4ARiwACQ0AebMAmV8AEwwAAAAAZ5oAZT8AMkkAkFoAEQsAebMAl14AGCQAkl0ALx4AOlYAeEsAGRAATHAAbkUAll0All4AbkYAMB4ATXMABwQAIxYANiIAPicANyIAJBYAQF4AIjIAis0AAgMAhsYAZJYARWYAk9oAHy4ABQcAfbkAO1gAis3/MZgAmmEAld3///8EabibAAAAgHRSTlMACCIVObX54XwKcv3UHVb+zQYH5m0xfrTU4NW1fzJMy8hDffkD/pcHh/69CGjnqJ5ZoynfBBHWZ0kSqudTlCt2lotWwNUCQIOrvrWVzwFe3a4QtnQPz/0gAbKnVe4c0Psp9E9jximBtvj4t0+FCzpaZlo7bTruA+Wtdfs1CNdm7ZpKyEIAAAABYktHRIP8tM/SAAAAB3RJTUUH5QoVBh0NInrzjgAAATtJREFUOMt902VbwzAUBeDLcAYMhru7uzPcXYcP1+EyPMkvZ03TNk0TztfzNnL7BECeCFck/JOo6BiEYuPiVX2CG9EkJsn7ZA9iSUmV9d40ZCYdICMzKzsnNy+/wASFVo+KALCR4hIGSjlQVm4BXFFZRUE1B2q8HMC4tk4D9RxoABvAjRpwuS3QJADcrIkW6witImhrD4OOTtZ7ukAEuFtboqeXjqqvH5xgQL/qoG9oeET/FQIYdQxWAGNmMT4xOTU9MyuCOVbPLywSGhEs6f3yCiFysEr7tXWiABubWu/fIiqwTRfYISqwu0fBvgoc0DlCgCjA4ZF+hWMFODllMzizgfML2l5eXfuNGd7YAARv7+4fHoPc9J/swJlnrn+Rgdc3C4SkT+vd7D8+peDr2+h/FK838Ev3D4W//wNiKCWwWalJAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yMVQwNjoyOToxMyswMDowMP1Zb/cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjFUMDY6Mjk6MTMrMDA6MDCMBNdLAAAAAElFTkSuQmCC)](//yesifang.com)

> 这是一个openlayers矩形绘制补充包。
>
> This is an openlayers rectangle drawing supplement package. 

[English Document](../README.md)

<div align="center">
  <a href="https://nodei.co/npm/ol-rectangle-draw/"><img src="https://nodei.co/npm/ol-rectangle-draw.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## 运行示例

```shell
$ git clone https://github.com/SuperYesifang/ol-rectangle-draw.git
$ cd ol-rectangle-draw
$ npm run serve
```

## 使用

`new RectangleDraw(Draw, Polygon, options?)`

### 1. 使用CDN

```html
<script src="https://raw.githubusercontent.com/SuperYesifang/ol-rectangle-draw/master/dist/RectangleDraw.cdn.js"></script>
<script>
const draw = new RectangleDraw(ol.interaction.Draw, ol.geom.Polygon, {
  //...Draw构造函数的选项
});

map.addInteraction(draw);
</script>
```



### 2. 使用ESM

```js
import Draw from "ol/interaction/Draw";
import Polygon from "ol/geom/Polygon";
import RectangleDraw from "ol-rectangle-draw";

const draw = new RectangleDraw(Draw, Polygon, {
  //...Draw构造函数的选项
})

map.addInteraction(draw);
```



## 选项

| 选项         | 类型      | 含义                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| `Draw`   | `Draw` | openlayers的Draw交互组件构造函数。 |
| `Polygon` | `Polygon` | openlayers的Polygon几何体构造函数。 |
| `options`  | `object` | Draw构造函数的选项(除了`type`和`geometryFunction`) |
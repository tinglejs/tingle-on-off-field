# tingle-on-off-field

[![npm version](https://badge.fury.io/js/tingle-on-off-field.svg)](http://badge.fury.io/js/tingle-on-off-field)

The `OnOffField Component` for tinglejs

---

## TL;DR

效果图:

![效果图](http://gtms02.alicdn.com/tps/i2/TB1x_uQJpXXXXcbXFXXOaDgVVXX-282-128.jpg)

## Install

```
npm install tingle-on-off-field --save
```

## Simple Usage

```js
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on:false
        }
    }
    handleChange(on) {
        this.setState ({
            on:on
        })
    }
    render() {
        return (
            <div>
                 <GroupList title="Label文字长度测试">
                    <OnOffField label="显示On Off" on={this.state.on} onChange={this.handleChange.bind(this)}/>
                </GroupList>
            </div>
        );
    }
};
```

## Options 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义样式类|
|on|required|-|布尔值，表示当前初始化的时候按钮开或者关的状态|
|label|optional|-|表单中的label|
|onChange|required|-|点击之后的回调函数|


## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-on-off-field/issues)
- [Tingle项目](https://github.com/tinglejs/generator-tingle)

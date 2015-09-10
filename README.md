# tingle-on-off-field [![npm version](https://badge.fury.io/js/tingle-on-off-field.svg)](http://badge.fury.io/js/tingle-on-off-field)

The `OnOffField Component` for tinglejs

<img src="https://img.alicdn.com/tps/TB1r7HSJpXXXXceXFXXXXXXXXXX-750-1254.png" width="375"/>

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
            on: true,
            on1: false,
            on2: true,
            on3: false
        }
    }

    handleChange(key,value) {
        this.setState({
            [key]: value
        })
    }
    render() {
        return (
            <div>
                 <GroupList title="开关控件">
                    <OnOffField label="默认选中" on={this.state.on} onChange={this.handleChange.bind(this,'on')}/>
                    <OnOffField label="默认没选中" on={this.state.on1} onChange={this.handleChange.bind(this,'on1')}/>
                    <OnOffField label="不可选" on={this.state.on2} readOnly={true} onChange={this.handleChange.bind(this,'on2')}/>
                    <OnOffField label="不可选" on={this.state.on3} readOnly={true} onChange={this.handleChange.bind(this,'on3')}/>
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

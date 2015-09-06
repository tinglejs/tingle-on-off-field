// TODO: move the two lines below to tingle-context
require("fastclick").attach(document.body);
React.initializeTouchEvents(true);


let OnOffField = require('../src');
let GroupList = require('tingle-group-list');
// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

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

React.render(<Demo/>, document.getElementById('TingleDemo'));
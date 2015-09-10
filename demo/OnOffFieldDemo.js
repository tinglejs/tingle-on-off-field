let OnOffField = require('../src');
let GroupList = require('tingle-group-list');

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
}
;

React.render(<Demo/>, document.getElementById('TingleDemo'));
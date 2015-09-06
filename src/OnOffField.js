/**
 * OnOffField Component for tinglejs
 * @auther ruiyang.dry
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let OnOff = require('tingle-on-off');
let classnames = require('classnames');
class OnOffField extends React.Component {

    constructor(props) {
        super(props);
    }

	handleChange(on) {
		console.log(arguments)
		this.props.onChange(on);
	}

    render() {
    	let  t=this;
        return (
        	  <div className={classnames({
                'tPL10 tPR10 tFBH tFBAC tFS14 tOnOffField ': true,
                [t.props.className]: !!t.props.className
            })}>
                <div className="tMR10 tLH1_3 tFC6 tFieldLabel">{t.props.label}</div>
                <div className="tFB1"></div>
                <OnOff on={this.props.on} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

OnOffField.defaultProps = {
}

// http://facebook.github.io/react/docs/reusable-components.html
OnOffField.propTypes = {
	label:React.PropTypes.string.isRequired
}

module.exports = OnOffField;
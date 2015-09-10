/**
 * OnOffField Component for tinglejs
 * @author ruiyang.dry
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let OnOff = require('tingle-on-off');
let Field = require('tingle-field');
let classnames = require('classnames');
class OnOffField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(on) {
        this.props.onChange(on);
    }

    render() {
        let t = this;
        return (
            <Field {...t.props} className={classnames('tOnOffField', t.props.className, {
                'readOnly': t.props.readOnly
            })}>
                <div className="tFBH">
                    <div className="tFB1"></div>
                    <OnOff on={this.props.on} readOnly={t.props.readOnly} onChange={this.handleChange.bind(this)} />
                </div>
            </Field>
        );
    }
}

OnOffField.defaultProps = {
    label: ''
};

// http://facebook.github.io/react/docs/reusable-components.html
OnOffField.propTypes = {
    label: React.PropTypes.string.isRequired
};

OnOffField.displayName = 'OnOffField';

module.exports = OnOffField;
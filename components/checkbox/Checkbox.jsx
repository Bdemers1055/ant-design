var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import shallowEqual from 'shallowequal';
import { ConfigConsumer } from '../config-provider';
export default class Checkbox extends React.Component {
  constructor() {
    super(...arguments);
    this.saveCheckbox = node => {
      this.rcCheckbox = node;
    };
    this.renderCheckbox = ({ getPrefixCls }) => {
      const { props, context } = this;
      const {
          prefixCls: customizePrefixCls,
          className,
          children,
          indeterminate,
          style,
          onMouseEnter,
          onMouseLeave,
        } = props,
        restProps = __rest(props, [
          'prefixCls',
          'className',
          'children',
          'indeterminate',
          'style',
          'onMouseEnter',
          'onMouseLeave',
        ]);
      const { checkboxGroup } = context;
      const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      const checkboxProps = Object.assign({}, restProps);
      if (checkboxGroup) {
        checkboxProps.onChange = (...args) => {
          if (restProps.onChange) {
            restProps.onChange(...args);
          }
          checkboxGroup.toggleOption({ label: children, value: props.value });
        };
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }
      const classString = classNames(className, {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
        [`${prefixCls}-wrapper-disabled`]: checkboxProps.disabled,
      });
      const checkboxClass = classNames({
        [`${prefixCls}-indeterminate`]: indeterminate,
      });
      return (
        <label
          className={classString}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <RcCheckbox
            {...checkboxProps}
            prefixCls={prefixCls}
            className={checkboxClass}
            ref={this.saveCheckbox}
          />
          {children !== undefined && <span>{children}</span>}
        </label>
      );
    };
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup)
    );
  }
  focus() {
    this.rcCheckbox.focus();
  }
  blur() {
    this.rcCheckbox.blur();
  }
  render() {
    return <ConfigConsumer>{this.renderCheckbox}</ConfigConsumer>;
  }
}
Checkbox.defaultProps = {
  indeterminate: false,
};
Checkbox.contextTypes = {
  checkboxGroup: PropTypes.any,
};

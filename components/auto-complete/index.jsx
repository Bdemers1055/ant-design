import * as React from 'react';
import { Option, OptGroup } from 'rc-select';
import classNames from 'classnames';
import InputElement from './InputElement';
import Input from '../input';
import Select from '../select';
import { ConfigConsumer } from '../config-provider';
function isSelectOptionOrSelectOptGroup(child) {
  return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}
export default class AutoComplete extends React.Component {
  constructor() {
    super(...arguments);
    this.getInputElement = () => {
      const { children } = this.props;
      const element =
        children && React.isValidElement(children) && children.type !== Option ? (
          React.Children.only(this.props.children)
        ) : (
          <Input />
        );
      const elementProps = Object.assign({}, element.props);
      // https://github.com/ant-design/ant-design/pull/7742
      delete elementProps.children;
      return <InputElement {...elementProps}>{element}</InputElement>;
    };
    this.saveSelect = node => {
      this.select = node;
    };
    this.renderAutoComplete = ({ getPrefixCls }) => {
      const {
        prefixCls: customizePrefixCls,
        size,
        className = '',
        notFoundContent,
        optionLabelProp,
        dataSource,
        children,
      } = this.props;
      const prefixCls = getPrefixCls('select', customizePrefixCls);
      const cls = classNames({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
        [className]: !!className,
        [`${prefixCls}-show-search`]: true,
        [`${prefixCls}-auto-complete`]: true,
      });
      let options;
      const childArray = React.Children.toArray(children);
      if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
        options = children;
      } else {
        options = dataSource
          ? dataSource.map(item => {
              if (React.isValidElement(item)) {
                return item;
              }
              switch (typeof item) {
                case 'string':
                  return <Option key={item}>{item}</Option>;
                case 'object':
                  return <Option key={item.value}>{item.text}</Option>;
                default:
                  throw new Error(
                    'AutoComplete[dataSource] only supports type `string[] | Object[]`.',
                  );
              }
            })
          : [];
      }
      return (
        <Select
          {...this.props}
          className={cls}
          mode={Select.SECRET_COMBOBOX_MODE_DO_NOT_USE}
          optionLabelProp={optionLabelProp}
          getInputElement={this.getInputElement}
          notFoundContent={notFoundContent}
          ref={this.saveSelect}
        >
          {options}
        </Select>
      );
    };
  }
  focus() {
    this.select.focus();
  }
  blur() {
    this.select.blur();
  }
  render() {
    return <ConfigConsumer>{this.renderAutoComplete}</ConfigConsumer>;
  }
}
AutoComplete.Option = Option;
AutoComplete.OptGroup = OptGroup;
AutoComplete.defaultProps = {
  transitionName: 'slide-up',
  optionLabelProp: 'children',
  choiceTransitionName: 'zoom',
  showSearch: false,
  filterOption: false,
};

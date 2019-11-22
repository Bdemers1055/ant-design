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
import { Item } from 'rc-menu';
import Tooltip from '../tooltip';
export default class MenuItem extends React.Component {
  constructor() {
    super(...arguments);
    this.onKeyDown = e => {
      this.menuItem.onKeyDown(e);
    };
    this.saveMenuItem = menuItem => {
      this.menuItem = menuItem;
    };
  }
  render() {
    const _a = this.props,
      { rootPrefixCls, title } = _a,
      rest = __rest(_a, ['rootPrefixCls', 'title']);
    return (
      <Tooltip
        title={title}
        placement="right"
        overlayClassName={`${rootPrefixCls}-inline-collapsed-tooltip`}
      >
        <Item {...rest} rootPrefixCls={rootPrefixCls} title={title} ref={this.saveMenuItem} />
      </Tooltip>
    );
  }
}
MenuItem.isMenuItem = true;

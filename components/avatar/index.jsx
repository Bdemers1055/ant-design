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
import Icon from '../icon';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
export default class Avatar extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      scale: 1,
      isImgExist: true,
    };
    this.setScale = () => {
      if (!this.avatarChildren || !this.avatarNode) {
        return;
      }
      const childrenWidth = this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale
      const nodeWidth = this.avatarNode.offsetWidth;
      // denominator is 0 is no meaning
      if (
        childrenWidth === 0 ||
        nodeWidth === 0 ||
        (this.lastChildrenWidth === childrenWidth && this.lastNodeWidth === nodeWidth)
      ) {
        return;
      }
      this.lastChildrenWidth = childrenWidth;
      this.lastNodeWidth = nodeWidth;
      // add 4px gap for each side to get better performance
      this.setState({
        scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1,
      });
    };
    this.handleImgLoadError = () => {
      const { onError } = this.props;
      const errorFlag = onError ? onError() : undefined;
      if (errorFlag !== false) {
        this.setState({ isImgExist: false });
      }
    };
    this.renderAvatar = ({ getPrefixCls }) => {
      const _a = this.props,
        { prefixCls: customizePrefixCls, shape, size, src, srcSet, icon, className, alt } = _a,
        others = __rest(_a, [
          'prefixCls',
          'shape',
          'size',
          'src',
          'srcSet',
          'icon',
          'className',
          'alt',
        ]);
      const { isImgExist, scale } = this.state;
      const prefixCls = getPrefixCls('avatar', customizePrefixCls);
      const sizeCls = classNames({
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
      });
      const classString = classNames(prefixCls, className, sizeCls, {
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-image`]: src && isImgExist,
        [`${prefixCls}-icon`]: icon,
      });
      const sizeStyle =
        typeof size === 'number'
          ? {
              width: size,
              height: size,
              lineHeight: `${size}px`,
              fontSize: icon ? size / 2 : 18,
            }
          : {};
      let children = this.props.children;
      if (src && isImgExist) {
        children = <img src={src} srcSet={srcSet} onError={this.handleImgLoadError} alt={alt} />;
      } else if (icon) {
        children = <Icon type={icon} />;
      } else {
        const childrenNode = this.avatarChildren;
        if (childrenNode || scale !== 1) {
          const transformString = `scale(${scale}) translateX(-50%)`;
          const childrenStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString,
          };
          const sizeChildrenStyle =
            typeof size === 'number'
              ? {
                  lineHeight: `${size}px`,
                }
              : {};
          children = (
            <span
              className={`${prefixCls}-string`}
              ref={node => (this.avatarChildren = node)}
              style={Object.assign({}, sizeChildrenStyle, childrenStyle)}
            >
              {children}
            </span>
          );
        } else {
          children = (
            <span className={`${prefixCls}-string`} ref={node => (this.avatarChildren = node)}>
              {children}
            </span>
          );
        }
      }
      return (
        <span
          {...others}
          style={Object.assign({}, sizeStyle, others.style)}
          className={classString}
          ref={node => (this.avatarNode = node)}
        >
          {children}
        </span>
      );
    };
  }
  componentDidMount() {
    this.setScale();
  }
  componentDidUpdate(prevProps) {
    this.setScale();
    if (prevProps.src !== this.props.src) {
      this.setState({ isImgExist: true, scale: 1 });
    }
  }
  render() {
    return <ConfigConsumer>{this.renderAvatar}</ConfigConsumer>;
  }
}
Avatar.defaultProps = {
  shape: 'circle',
  size: 'default',
};

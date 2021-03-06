import * as React from 'react';
import classNames from 'classnames';
import { withConfigConsumer } from '../config-provider';
import StatisticNumber from './Number';
const Statistic = props => {
  const {
    prefixCls,
    className,
    style,
    valueStyle,
    value = 0,
    title,
    valueRender,
    prefix,
    suffix,
  } = props;
  let valueNode = <StatisticNumber {...props} value={value} />;
  if (valueRender) {
    valueNode = valueRender(valueNode);
  }
  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div style={valueStyle} className={`${prefixCls}-content`}>
        {prefix && <span className={`${prefixCls}-content-prefix`}>{prefix}</span>}
        {valueNode}
        {suffix && <span className={`${prefixCls}-content-suffix`}>{suffix}</span>}
      </div>
    </div>
  );
};
Statistic.defaultProps = {
  decimalSeparator: '.',
  groupSeparator: ',',
};
const WrapperStatistic = withConfigConsumer({
  prefixCls: 'statistic',
})(Statistic);
export default WrapperStatistic;

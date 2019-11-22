import * as React from 'react';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import classNames from 'classnames';
import enUS from './locale/en_US';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { generateShowHourMinuteSecond } from '../time-picker';
import { ConfigConsumer } from '../config-provider';
const DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  week: 'gggg-wo',
  month: 'YYYY-MM',
};
const LOCALE_FORMAT_MAPPING = {
  date: 'dateFormat',
  dateTime: 'dateTimeFormat',
  week: 'weekFormat',
  month: 'monthFormat',
};
function getColumns({ showHour, showMinute, showSecond, use12Hours }) {
  let column = 0;
  if (showHour) {
    column += 1;
  }
  if (showMinute) {
    column += 1;
  }
  if (showSecond) {
    column += 1;
  }
  if (use12Hours) {
    column += 1;
  }
  return column;
}
export default function wrapPicker(Picker, pickerType) {
  var _a;
  return (
    (_a = class PickerWrapper extends React.Component {
      constructor() {
        super(...arguments);
        this.handleOpenChange = open => {
          const { onOpenChange } = this.props;
          onOpenChange(open);
        };
        this.handleFocus = e => {
          const { onFocus } = this.props;
          if (onFocus) {
            onFocus(e);
          }
        };
        this.handleBlur = e => {
          const { onBlur } = this.props;
          if (onBlur) {
            onBlur(e);
          }
        };
        this.handleMouseEnter = e => {
          const { onMouseEnter } = this.props;
          if (onMouseEnter) {
            onMouseEnter(e);
          }
        };
        this.handleMouseLeave = e => {
          const { onMouseLeave } = this.props;
          if (onMouseLeave) {
            onMouseLeave(e);
          }
        };
        this.savePicker = node => {
          this.picker = node;
        };
        this.getDefaultLocale = () => {
          const result = Object.assign({}, enUS, this.props.locale);
          result.lang = Object.assign({}, result.lang, (this.props.locale || {}).lang);
          return result;
        };
        this.renderPicker = (locale, localeCode) => {
          const { format, showTime } = this.props;
          const mergedPickerType = showTime ? `${pickerType}Time` : pickerType;
          const mergedFormat =
            format ||
            locale[LOCALE_FORMAT_MAPPING[mergedPickerType]] ||
            DEFAULT_FORMAT[mergedPickerType];
          return (
            <ConfigConsumer>
              {({ getPrefixCls, getPopupContainer: getContextPopupContainer }) => {
                const {
                  prefixCls: customizePrefixCls,
                  inputPrefixCls: customizeInputPrefixCls,
                  getCalendarContainer,
                  size,
                  disabled,
                } = this.props;
                const getPopupContainer = getCalendarContainer || getContextPopupContainer;
                const prefixCls = getPrefixCls('calendar', customizePrefixCls);
                const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
                const pickerClass = classNames(`${prefixCls}-picker`, {
                  [`${prefixCls}-picker-${size}`]: !!size,
                });
                const pickerInputClass = classNames(`${prefixCls}-picker-input`, inputPrefixCls, {
                  [`${inputPrefixCls}-lg`]: size === 'large',
                  [`${inputPrefixCls}-sm`]: size === 'small',
                  [`${inputPrefixCls}-disabled`]: disabled,
                });
                const timeFormat = (showTime && showTime.format) || 'HH:mm:ss';
                const rcTimePickerProps = Object.assign(
                  {},
                  generateShowHourMinuteSecond(timeFormat),
                  { format: timeFormat, use12Hours: showTime && showTime.use12Hours },
                );
                const columns = getColumns(rcTimePickerProps);
                const timePickerCls = `${prefixCls}-time-picker-column-${columns}`;
                const timePicker = showTime ? (
                  <TimePickerPanel
                    {...rcTimePickerProps}
                    {...showTime}
                    prefixCls={`${prefixCls}-time-picker`}
                    className={timePickerCls}
                    placeholder={locale.timePickerLocale.placeholder}
                    transitionName="slide-up"
                  />
                ) : null;
                return (
                  <Picker
                    {...this.props}
                    getCalendarContainer={getPopupContainer}
                    format={mergedFormat}
                    ref={this.savePicker}
                    pickerClass={pickerClass}
                    pickerInputClass={pickerInputClass}
                    locale={locale}
                    localeCode={localeCode}
                    timePicker={timePicker}
                    onOpenChange={this.handleOpenChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                  />
                );
              }}
            </ConfigConsumer>
          );
        };
      }
      componentDidMount() {
        const { autoFocus, disabled } = this.props;
        if (autoFocus && !disabled) {
          this.focus();
        }
      }
      focus() {
        this.picker.focus();
      }
      blur() {
        this.picker.blur();
      }
      render() {
        return (
          <LocaleReceiver componentName="DatePicker" defaultLocale={this.getDefaultLocale}>
            {this.renderPicker}
          </LocaleReceiver>
        );
      }
    }),
    (_a.defaultProps = {
      transitionName: 'slide-up',
      popupStyle: {},
      onChange() {},
      onOk() {},
      onOpenChange() {},
      locale: {},
    }),
    _a
  );
}

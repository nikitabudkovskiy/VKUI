import React, { createRef, HTMLAttributes, Component, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import PopoutRoot from '../PopoutRoot/PopoutRoot';
import PanelHeaderSimple from '../PanelHeaderSimple/PanelHeaderSimple';
import PropTypes, { Requireable } from 'prop-types';

export interface SplitLayoutProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
  popout?: ReactNode;
  modal?: ReactNode;
  header?: boolean;
};

class SplitLayout extends Component<SplitLayoutProps> {
  render() {
    const { popout, modal, header, children, className, platform, ...restProps } = this.props;
    const _class = getClassName('SplitLayout', platform);
    const innerClass = classNames('SplitLayout__inner', className, {
      'SplitLayout__inner--header': header,
    });

    return <PopoutRoot className={_class} popout={popout} modal={modal}>
      {header && <PanelHeaderSimple separator={false} />}
      <div {...restProps} className={innerClass}>
        {children}
      </div>
    </PopoutRoot>;
  }
}

export default withPlatform(SplitLayout);

interface ColProps extends HTMLAttributes<HTMLDivElement>, HasChildren {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
}

export interface SplitColChildContext {
  splitCol: Requireable<SplitCol>;
}

export class SplitCol extends Component<ColProps> {
  static childContextTypes: SplitColChildContext = {
    splitCol: PropTypes.any,
  };

  baseRef: React.RefObject<HTMLDivElement> = createRef();

  getChildContext: () => { splitCol: SplitCol } = () => {
    return {
      splitCol: this,
    };
  };

  render() {
    const { children, width, maxWidth, minWidth, ...rest } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
    }} {...rest} ref={this.baseRef} className="SplitLayout__col">
      {children}
    </div>;
  }
}

export class SplitFixedCol extends Component<ColProps> {
  render() {
    const { children, width, maxWidth, minWidth, ...rest } = this.props;

    return <div style={{
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
    }} {...rest} className="SplitLayout__colFixedWrap">
      <div style={{
        width: width,
        maxWidth: maxWidth,
        minWidth: minWidth,
      }} className="SplitLayout__colFixedInner">
        {children}
      </div>
    </div>;
  }
}
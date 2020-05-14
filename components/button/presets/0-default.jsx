import React from 'react';
import Button from '../button.jsx';

const type = Button({
  type: primary,
});

/**
 * @uxpincomponent
 */

export default function UXPinWrapper({ children }) {
  // return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
  return (
    <Button uxpId="button1" type={type}>
      {children}
    </Button>
  );
}

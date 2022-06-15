/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LOCALE } from '../../i18n';
const initialState = {
  locale: DEFAULT_LOCALE,
};

export function LanguageProvider(props) {
  return (
    <IntlProvider
      locale={initialState.locale}
      key={props.locale}
      messages={props.messages[props.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};


export default LanguageProvider;

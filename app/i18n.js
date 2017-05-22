/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';

import { DEFAULT_LOCALE } from './containers/genericContainers/App/constants'; // eslint-disable-line
import frTranslationMessages from './translations/fr.json';

export const appLocales = ['fr'];

addLocaleData(frLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, frTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  fr: formatTranslationMessages('fr', frTranslationMessages),
};

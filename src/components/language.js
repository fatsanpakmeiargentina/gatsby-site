import React from "react"
import Dropdown from 'react-dropdown'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import * as styles from './language.module.css'

const Language = () => (
  <IntlContextConsumer>
      {
        ({ languages, language: currentLocale }) =>
          <Dropdown
            className={styles.languages}
            options={[
              { label: "Español", value: "es" },
              { label: "English", value: "en"},
            ]}
            onChange={({ value: lang }) => changeLocale(lang)}
            value={currentLocale}
          />
      }
  </IntlContextConsumer>
)

export default Language

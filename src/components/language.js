import React from "react"
import { DropdownStyled } from './language.styled'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"
import * as styles from './language.module.css'

const Language = () => (
  <IntlContextConsumer>
      {
        ({ languages, language: currentLocale }) =>
          <DropdownStyled
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

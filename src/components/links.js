import React from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'
import { FacebookIcon, EmailIcon } from 'react-share'
import InternetIcon from '../icons/InternetIcon'
import PhoneIcon from '../icons/PhoneIcon'
import InstagramIcon from '../icons/InstagramIcon'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, ItemsContainer, LinkGroupContiner, Items } from './links.styled'

export const LinkItem = ({
  item: {
    name,
    web,
    facebook,
    email,
    instagram,
    phone,
    logo
  },
}) => (
  <Container>
    <h4>{name}</h4>
    <ItemsContainer>
      <GatsbyImage
        alt={name}
        image={getImage(logo)}
      />
      <Items>
        {web &&
          <a target="_blank" rel="noreferrer" href={`${web}`}>
            <InternetIcon size={32} round bgColor="#000000" fgColor="FFF" />
          </a>
        }
        {instagram &&
          <a target="_blank" rel="noreferrer" href={`${instagram}`}>
            <InstagramIcon size={32} round />
          </a>
        }
        {facebook &&
          <a target="_blank" rel="noreferrer" href={`${facebook}`}>
            <FacebookIcon size={32} round />
          </a>
        }
        {email &&
          <a href={`mailto:${email}`}>
            <EmailIcon size={32} round />
          </a>
        }
        {phone &&
          <a href={`tel:${phone}`}>
            <PhoneIcon size={32} round />
          </a>
        }
      </Items>
    </ItemsContainer>
  </Container>
)

export const LinkGroup = ({
  group: {
    fieldValue: groupName,
    edges: list,
  },
}) => {
  const intl = useIntl()

  return (
    <>
      <h2>{intl.formatMessage({id: `links.types.${groupName}`})}</h2>
      <LinkGroupContiner>
      {
        list.map((link) => (
          <LinkItem
            key={link.node.name}
            item={link.node}
          />
        ))
      }
      </LinkGroupContiner>
    </>
  )
}

import { Text, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import { headerTexts } from './constants'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({
  title = headerTexts.title,
  message = headerTexts.message
}) => (
  <Flex
    backgroundColor='orange.100'
    flexDirection='column'
    alignItems='left'
    marginY={10}
    width='full'
  >
    <Image
      src='/images/headerLogo.png'
      quality={100}
      layout='fixed'
      height={40}
      width={70}
    />

    <Heading
      fontWeight='semibold'
      marginTop={2}
      fontSize='3xl'
      color='white'
    >
      {title}
    </Heading>

    <Text
      fontWeight='light'
      fontSize='xl'
      color='white'
    >
      {message}
    </Text>
  </Flex>
)

export default Header

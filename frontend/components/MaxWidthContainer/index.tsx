import { Container } from '@chakra-ui/react'

const MaxWidthContainer: React.FC = ({ children }) => (
  <Container
    centerContent
    maxW='xs'
  >
    {children}
  </Container>
)

export default MaxWidthContainer

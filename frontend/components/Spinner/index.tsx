import { Spinner as ChakraSpinner, SpinnerProps } from '@chakra-ui/react'

const Spinner: React.FC<SpinnerProps> = (props) => (
  <ChakraSpinner
    color='orange.100'
    size='lg'
  />
)

export default Spinner

import { Radio as ChakraRadio, RadioProps } from '@chakra-ui/react'

const Radio: React.FC<RadioProps> = ({
  colorScheme = 'orange',
  children,
  ...rest
}) => (
  <ChakraRadio
    colorScheme={colorScheme}
    {...rest}
  >
    {children}
  </ChakraRadio>
)

export default Radio

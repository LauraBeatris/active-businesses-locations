import { useToast } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { ReactQueryConfigProvider as CoreReactQueryConfigProvider } from 'react-query'

const ReactQueryConfig: React.FC = ({ children }) => {
  const toast = useToast()

  const handleQueryError = () => {
    toast({
      description: 'Please, try to refresh the page',
      isClosable: true,
      position: 'top-right',
      title: 'Error while fetching data',
      status: 'error'
    })
  }

  const config = useMemo(() => ({
    queries: {
      onError: handleQueryError
    }
  }), [])

  return (
    <CoreReactQueryConfigProvider config={config}>
      {children}
    </CoreReactQueryConfigProvider>
  )
}

export default ReactQueryConfig

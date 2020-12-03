import Spinner from 'components/Spinner'

import { QueryHandlerWrapperProps } from './types'

const QueryHandlerWrapper: React.FC<QueryHandlerWrapperProps> = ({
  isLoading,
  children,
  isError
}) => {
  if (isLoading) {
    return (
      <Spinner />
    )
  }

  if (isError) {
    return null
  }

  return <>{children}</>
}

export default QueryHandlerWrapper

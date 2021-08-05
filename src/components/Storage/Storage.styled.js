import styled from 'styled-components'

const RoundedSquare = styled.div`
  width: 67px;
  height: 67px;
  border-radius: 16px;
  padding: 18px;
`

export const StorageSquare = styled(RoundedSquare)`
  background: ${({ theme }) => theme.red};
`

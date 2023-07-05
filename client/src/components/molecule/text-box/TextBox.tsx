import { ReactNode } from 'react'
import {
  Box,
  Paper,
} from '@mui/material'

type TextBoxProps = {
  children?: ReactNode
  paperMinHeight?: string
}

const TextBox: React.FC<TextBoxProps> = ({
  paperMinHeight,
  children
}) => {
  return (
    <Box
      sx={ {
        width: '80%',
        maxWidth: '800px',
        margin: '2rem auto',
        position: 'relative',
        top: '-290px',
      } }
    >
      <Paper
        elevation={ 8 }
        sx={ {
          borderRadius: '1rem',
          padding: '1rem 0rem 1.75rem',
          minHeight: `${ paperMinHeight ? paperMinHeight : '300px' }`
        } }
      >
        { children }
      </Paper>
    </Box>
  )
}

export default TextBox
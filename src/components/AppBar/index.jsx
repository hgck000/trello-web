import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      App Bar
      <ModeSelect />
    </Box>
  )
}

export default AppBar

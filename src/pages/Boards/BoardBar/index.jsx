import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material/'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      padding: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="Quang Minh MERN Stack"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
          <Tooltip title="hgck000">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/126417436?v=4"
            />
          </Tooltip>
        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar

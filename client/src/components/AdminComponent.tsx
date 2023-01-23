import { FC } from 'react';
import { useState } from 'react';
import { Box,Menu,MenuItem,Divider,IconButton, Tooltip } from '@mui/material';
import { Add,Settings,Delete,ModeEdit, AdminPanelSettings } from '@mui/icons-material';
import { Text } from '@nextui-org/react';
import { AdminLink } from './AdminLink';

export const AdminComponent:FC = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Box sx={{marginLeft:'50px', marginTop:'8px'}}>
                <Tooltip title="News settings">
                    <IconButton
                        sx={{color:'white'}}
                        onClick={ handleClick }
                        aria-controls={ open ? 'menu-list-grow' : undefined }
                        aria-haspopup="true"
                        aria-expanded={ open ? 'true' : undefined }
                    >
                        <Settings sx={{color:'white', fontSize:'30px'}}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu 
                id="menu-list-grow"
                anchorEl={ anchorEl }
                open={ Boolean(anchorEl) }
                onClose={handleClose}
                onClick={ handleClose }
                PaperProps={{
                    elevation: 0,
                    sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

            >
                <MenuItem>
                    < Add sx={{color:'black'}}/>
                    <AdminLink route='newNews' title='Create a new news'/>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ModeEdit sx={{color:'black'}}/>
                    <AdminLink route='edit' title='Edit news' />
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Delete sx={{color:'black'}}/>
                    <AdminLink route='delete' title='Delete news' />
                </MenuItem>
                <Divider />
                <MenuItem>
                    <AdminPanelSettings sx={{color:'black'}}/>
                    <AdminLink route='adminPanel' title='Admin panel' />
                </MenuItem>
            </Menu>
            
        </>
    )
}
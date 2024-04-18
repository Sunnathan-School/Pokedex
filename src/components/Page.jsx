import React from 'react'
import {Box, Container,Card, Typography, Avatar,Button} from '@mui/material'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import {getSelectedUser, setSelectedUserId} from "../services/Users.jsx";
import {getAvatarSrc} from "../services/Avatars.jsx";

function Page({children}) {

    const selectedUser = getSelectedUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        setSelectedUserId(null);
        navigate('/login');
    }

    return (
        <Box>
            <Box sx={{backgroundColor:"#F8F4F4",minHeight:'100vh'}}>
            <Container maxWidth="sm">
              <Box sx={{paddingTop:5,paddingBottom:6}}>
                <Box sx={{marginBottom:5,maxWidth:'300px',marginX:'auto'}}>
                    <img src={logo} alt="logo pokemon" />
                </Box>
                  {selectedUser && (
                      <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                          <Avatar sx={{marginRight: 2}} src={getAvatarSrc(selectedUser.avatarId)}/>
                          <Typography sx={{flexGrow: 1}}>Bonjour {selectedUser.username}</Typography>
                          <Button variant="contained" color="primary" onClick={handleLogout}>
                              Se Déconnecter
                          </Button>
                      </Box>
                  )}
                <Card sx={{padding:2}}>
                    {children}
                </Card>
              </Box>
            </Container>
            </Box>
        </Box>
      )
}

export default Page
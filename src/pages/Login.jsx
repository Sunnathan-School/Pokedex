import {
    Avatar,
    Box,
    Button,
    Divider,
    FormGroup, Grid, IconButton,
    Typography
} from "@mui/material";
import Page from "../components/Page.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {deleteUser, getUserList, setSelectedUserId} from "../services/Users.jsx";
import {getAvatarSrc} from "../services/Avatars.jsx";

function Login(){

    const navigate = useNavigate()

    const [userList, setUserList] = useState(getUserList())

    const handleDeleteUser = (index) => {
        deleteUser(index)
        setUserList(getUserList())
    }

    function handleUserClick(userId) {
        setSelectedUserId(userId)
        navigate("/pokedex")
    }

    return(
            <Page>
                <Box>
                    <Typography variant="h1" sx={{textAlign:'center'}}>Connexion au Pokedex</Typography>
                </Box>

                <Box>
                    {userList.map((value, index) => (
                        <Grid container key={index} onClick={() => {
                            handleUserClick(value.id)
                        }}
                              sx={{display: 'flex', alignItems: 'center', marginBottom: 2, cursor:'pointer'}}>
                            <Avatar src={getAvatarSrc(value.avatarId)}/>
                            <Typography sx={{flexGrow: 1, marginLeft:1}}>{value.username}</Typography>
                            <IconButton aria-label="delete" onClick={
                                (event) => {
                                    event.stopPropagation()
                                    handleDeleteUser(index)
                                }
                            }>
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                    ))}
                </Box>

                <Divider sx={{marginY:2}}></Divider>
                <FormGroup >
                    <Button variant="contained" color="primary" component={Link} to="/createUser"
                    >Créer un utilisateur</Button>
                </FormGroup>
            </Page>
    )
}


export default Login
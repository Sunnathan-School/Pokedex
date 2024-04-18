import {
    Alert,
    Avatar,
    Box,
    Button,
    FormControl,
    FormGroup, Grid, TextField, Typography
} from "@mui/material";
import Page from "../components/Page.jsx";
import React, {useState} from "react";
import {getAvatars} from "../services/Avatars.jsx";
import {createNewUser} from "../services/Users.jsx";
import {Link} from "react-router-dom";

function CreateUser(){

    const avatarList = getAvatars()

    const [avatar, setAvatar] = useState(1)
    const [username, setUsername] = useState("")

    const [errorMessage, setErrorMessage] = useState(false)


    const handleClickAvatar = (avatar) => {
        setAvatar(avatar);
    }
    const handleNewUser = (event) => {
        if (username && avatar){
            createNewUser(username, avatar)
        }
        else {
            event.preventDefault()
            setErrorMessage(true)
        }
    }

    return(
        <Page>
            <Box>
                <Typography variant="h1" sx={{textAlign:'center'}}>Créer un utilisateur</Typography>
            </Box>
            {errorMessage && <Alert severity="error">Erreur: Veuillez entrer un nom d'utilisateur</Alert>}
            <Box sx={{marginY:1}}>
                <Typography variant="h4">Choisir un avatar </Typography>

                <Grid container>
                    {avatarList.map((value, index) => (
                        <Grid item key={index}>
                            <Avatar src={value.avatarSrc}
                                    onClick={() => {handleClickAvatar(value.avatarId)}}
                                    sx={{ filter: avatar !== value.avatarId ? "grayscale(100%)" : "none" }}
                            />
                        </Grid>
                    ))
                    }
                </Grid>



            </Box>

            <Box sx={{marginY:1}}>
                <FormGroup>
                    <FormControl>
                        <TextField label="Nom" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
                    </FormControl>
                </FormGroup>
            </Box>


            <FormGroup >
                <Button variant="contained" color="primary" onClick={handleNewUser} component={Link} to="/login">Créer un compte</Button>
            </FormGroup>
        </Page>
    )
}


export default CreateUser
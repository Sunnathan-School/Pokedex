import {getSelectedUser, getUserList, setUserList} from "./Users.jsx";

export function getSelectedUserPokedex() {
    const selectedUser = getSelectedUser();
    if (!selectedUser || !selectedUser.pokemon) {
        return [];
    }
    return selectedUser.pokemon;
}


export const addPokemonToSelectedUserPokedex = (pokemon) => {
    const selectedUser = getSelectedUser()
    selectedUser.pokemon = [...selectedUser.pokemon, pokemon.id]
    setUserList(getUserList().map(user => user.id === selectedUser.id ? selectedUser : user))
}

export const removePokemonFromSelectedUserPokedex = (pokemon) => {
    const selectedUser = getSelectedUser()
    selectedUser.pokemon = selectedUser.pokemon.filter(id => id !== pokemon.id)
    setUserList(getUserList().map(user => user.id === selectedUser.id ? selectedUser : user))
}
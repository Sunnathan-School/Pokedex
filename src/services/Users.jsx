import { v4 as uuidv4 } from 'uuid';

export const USER_LIST_KEY = 'userList'
export const SELECTED_USER_KEY = 'selectedUser'

export const getUserList = () => {
    const userList = localStorage.getItem(USER_LIST_KEY)
    if (!userList){
        return []
    }
    return JSON.parse(userList);
}
export const createNewUser = (username, avatarId) =>{

    const newUser = {id: uuidv4(),avatarId: avatarId, username:username, pokemon:[]}

    let userList = getUserList()
    if (!userList || userList.length === 0){
        userList = []
    }
    userList = [...userList, newUser]
    setUserList(userList)
}

export const setUserList = (userList) => {
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(userList))
}

export const deleteUser = (index) => {
    let userList = getUserList()
    if (!userList || userList.length === 0){
        userList = []
    }
    const newUsers = userList.filter((user,i)=>i!==index)
    setUserList(newUsers)
}

export const setSelectedUserId = (userId) => {
    console.log(userId)
    sessionStorage.setItem(SELECTED_USER_KEY, userId)
}

export const getSelectedUserId = () => {
    const selectedUserId = sessionStorage.getItem(SELECTED_USER_KEY)

    const userList = getUserList()
    if (!userList || userList.length === 0){
        sessionStorage.removeItem(SELECTED_USER_KEY)
        return null
    } else {
        const user = userList.find(user => user.id === selectedUserId)
        if (!user){
            sessionStorage.removeItem(SELECTED_USER_KEY)
            return null
        }
    }
    return selectedUserId
}

export const getSelectedUser = () => {
    const selectedUserId = getSelectedUserId()
    const userList = getUserList()
    return userList.find(user => user.id === selectedUserId)
}


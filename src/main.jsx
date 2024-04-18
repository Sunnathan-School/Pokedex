import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";

import {createTheme, ThemeProvider} from "@mui/material";
import {defaultTheme} from "./assets/defaultTheme.js";
import CreateUser from "./pages/CreateUser.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import SearchPokemon from "./pages/SearchPokemon.jsx";
import PokemonDetails from "./pages/PokemonDetails.jsx";

const theme = createTheme(defaultTheme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme} >
          <BrowserRouter>
              <Routes>
                  <Route path="/">
                      <Route index element={<Login />} />
                      <Route path="createUser" element={<CreateUser />} />
                      <Route path="login" element={<Login />} />
                      <Route path="pokedex" element={<Pokedex />} />
                      <Route path="searchPokemon" element={<SearchPokemon />} />
                      <Route path="pokemon/:id" element={<PokemonDetails />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>

  </React.StrictMode>,
)

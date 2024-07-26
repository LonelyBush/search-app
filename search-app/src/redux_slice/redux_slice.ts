import { createSlice } from '@reduxjs/toolkit';
import { PokeData } from '../interfaces/api_interfaces';

const initialState: PokeData[] = [];

const postSlice = createSlice({
  name: 'pokeStore',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removePokemon: (state, action) => {
      return state.filter((elem) => {
        return elem.name !== action.payload.name;
      });
    },
    removeAllPokemons: () => {
      return [];
    },
  },
});

export const { addPokemon, removePokemon, removeAllPokemons } =
  postSlice.actions;

export default postSlice.reducer;

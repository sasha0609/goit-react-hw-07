import { createSlice } from "@reduxjs/toolkit";

const sliceContact = createSlice({
  name: "contact",
  initialState: {
    items: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
  },
  reducers: {
    addContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = sliceContact.actions;

export const contactReducer = sliceContact.reducer;

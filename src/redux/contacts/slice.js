import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";
import toast from "react-hot-toast";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
        toast("Contact removed from your list.", {
          icon: "🗑️",
        });
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
        toast("Contact added to your list.", {
          icon: "✔️",
        });
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state) => {
          state.error = true;
          state.loading = false;
          toast.error("This is an error!");
        }
      );
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        contact.number.includes(numberFilter)
    );
  }
);

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

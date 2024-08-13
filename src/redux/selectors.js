export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
export const loading = (state) => state.contacts.loading;
export const error = (state) => state.contacts.error;

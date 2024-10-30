import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to handle adding a todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: todo, status: false }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;

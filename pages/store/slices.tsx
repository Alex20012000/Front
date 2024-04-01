import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkState {
  page: number;
  catalog: Item[];
  categories: { marked: boolean; name: string }[];
  loading: boolean;
}

export interface CartState {
  cart: { item: Item; quantity: number }[];
  quantity: number;
}

export interface AuthState {
  name: string;
  about: string;
  login: string;
  pass: string;
  token: string;
}

const workInitialState: WorkState = {
  page: 0,
  catalog: [],
  categories: [],
  loading: false,
};

const cartInitialState: CartState = {
  cart: [],
  quantity: 0,
};

const authInitialState: AuthState = {
  name: 'John Smith',
  login: 'example@mail.com',
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante consequat,
     ornare nisi et, ultrices libero. Nunc nibh dolor, maximus quis auctor nec, tempor
     quis ipsum. Proin mollis pellentesque nulla ac varius.`,
  pass: 'string',
  token: 'string',
};

export const workSlice = createSlice({
  name: 'work',
  initialState: workInitialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setCatalog: (state, action: PayloadAction<Item[]>) => {
      state.catalog = action.payload;
    },
    setCategories: (state, action: PayloadAction<{ marked: boolean; name: string }[]>) => {
      state.categories = action.payload;
    },
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setPass: (state, action: PayloadAction<string>) => {
      state.pass = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setCart: (state, action: PayloadAction<{ item: Item; quantity: number }[]>) => {
      state.cart = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

export const { setPage, setCatalog, setCategories, showLoading } = workSlice.actions;
export const { setAbout, setLogin, setPass, setName, setToken } = authSlice.actions;
export const { setCart, setQuantity } = cartSlice.actions;

export const { reducer: workReducer } = workSlice;
export const { reducer: authReducer } = authSlice;
export const { reducer: cartReducer } = cartSlice;


import { createStore } from 'framework7/lite';
import masterServices from './services'

const store = createStore({
  state: {
    categories: {
      data : '',
      error: false
    },
    products: {
      data : '',
      error: false
    },
    wishlist: {
      data : [],
    },
    cart: {
      data : [],
    },
  },
  getters: {
    categories({ state }) {
      return state.categories;
    },
    products({ state }) {
      return state.products;
    },
    wishlists({ state }) {
      return state.wishlists;
    },
    carts({ state }) {
      return state.carts;
    }
  },
  actions: {
    addCategories({ state }) {
      masterServices.getData().then(function (response) {
      console.log(response.data[0].data.category)
      state.categories = {
          ...state.categories, 
          data : response.data[0].data.category
        }
      })
      .catch(function (error) {
        state.categories = {
          ...state.categories, 
          error : true
        }
      })
    },
    addProduct({ state }) {
      masterServices.getData().then(function (response) {
        state.products = {
          ...state.products, 
          data : response.data[0].data.productPromo
        }
      })
      .catch(function (error) {
        state.products = {
          ...state.products, 
          error : true
        }
      })
    },
    updateWishList({state}, data){
      if(data.act === 'ADD') {
        return state.wishlist = [...state.wishlist, data.wishlist]
      }
      if(data.act === 'REMOVE'){
        if (data.indexMy > -1) {
            state.wishlist.splice(action.indexMy, 1)
            return {
                ...state
            };
        }
      }

      return state;
    },
    updateCart({state}, data){
      if(data.act === 'ADD') {
        return state.cart = [...state.cart, data.cart]
      }
      if(data.act === 'REMOVE'){
        if (data.indexMy > -1) {
            state.cart.splice(action.indexMy, 1)
            return {
                ...state
            };
        }
      }

      return state;
    }
  },
})
export default store;

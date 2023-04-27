import {
     PLANT_LIST_REQUEST,
     PLANT_LIST_SUCCESS,
     PLANT_LIST_FAIL,

     PLANT_DETAILS_REQUEST,
     PLANT_DETAILS_SUCCESS,
     PLANT_DETAILS_FAIL,
  } from "../constants/plantConstants";


 export const plantListReducer = (state = {plants: []}, action) => {
     switch (action.type) {
         case PLANT_LIST_REQUEST:
            return { loading: true, plants: [] };

         case PLANT_LIST_SUCCESS:
            return { loading: false, plants: action.payload };

         case PLANT_LIST_FAIL:
            return { loading: false, error: action.payload };

         default:
            return state;    

   }
}; 

 export const plantDetailsReducer = (state = {plant: {reviews:[]}}, action) => {
   switch (action.type) {
       case PLANT_DETAILS_REQUEST:
          return { loading: true, ...state }

       case PLANT_DETAILS_SUCCESS:
          return { loading: false, plant: action.payload }

       case PLANT_DETAILS_FAIL:
          return { loading: false, error: action.payload }

       default:
          return state

   }
}; 
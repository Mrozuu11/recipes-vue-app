import Vue from "vue";
import Vuex from "vuex";
import httpClient from "@/api/httpClient.js";

Vue.use(Vuex);

const state = {
  fetchedMeals: {
    isFetching: false,
    response: {
      data: null,
      status: null,
    },
  },
  mealsQuery: "",
  selectedCategories: [],
  selectedAreas: [],
  selectedTags: [],
};

const getters = {
  fetchedMeals: (state) => {
    return state.fetchedMeals;
  },
  mealsQuery: (state) => {
    return state.mealsQuery;
  },
  selectedCategories: (state) => {
    return state.selectedCategories;
  },
  selectedAreas: (state) => {
    return state.selectedAreas;
  },
  selectedTags: (state) => {
    return state.selectedTags;
  },
};

const mutations = {
  FETCH_MEALS_REQUEST_STARTED(state) {
    state.fetchedMeals.isFetching = true;
    state.fetchedMeals.response = {
      data: null,
      status: null,
    };
  },
  FETCH_MEALS_REQUEST_FINISHED(state, payload) {
    state.fetchedMeals.isFetching = false;
    state.fetchedMeals.response = {
      data: payload.data,
      status: payload.status,
    };
  },
  FETCH_MEALS_REQUEST_ERROR(state) {
    state.fetchedMeals.isFetching = false;
    state.fetchedMeals.response = {
      data: null,
      status: null,
    };
  },
  UPDATE_MEALS_QUERY(state, payload) {
    state.mealsQuery = payload;
  },
  UPDATE_SELECTED_CATEGORIES(state, payload) {
    state.selectedCategories = payload;
  },
  UPDATE_SELECTED_AREAS(state, payload) {
    state.selectedAreas = payload;
  },
  UPDATE_SELECTED_TAGS(state, payload) {
    state.selectedTags = payload;
  },
};

const actions = {
  fetchMeals: async (context) => {
    context.commit("FETCH_MEALS_REQUEST_STARTED");

    await httpClient
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Soup")
      .then((successResponse) => {
        context.commit(`FETCH_MEALS_REQUEST_FINISHED`, successResponse);
      })
      .catch((errorResponse) => {
        context.commit(`FETCH_MEALS_REQUEST_ERROR`, errorResponse);
      });
  },
  updateMealsQuery: ({ commit }, payload) => {
    commit("UPDATE_MEALS_QUERY", payload);
  },
  updateSelectedCategories: ({ commit }, payload) => {
    commit("UPDATE_SELECTED_CATEGORIES", payload);
  },
  updateSelectedAreas: ({ commit }, payload) => {
    commit("UPDATE_SELECTED_AREAS", payload);
  },
  updateSelectedTags: ({ commit }, payload) => {
    commit("UPDATE_SELECTED_TAGS", payload);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

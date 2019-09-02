import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = (
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit
) => null;

SearchPresenter.propTypes = {
  topmovieResultsRated: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default SearchPresenter;
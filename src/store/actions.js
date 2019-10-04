import types from './types';

export const updateInputStartValue = (city, uniqueName, cityId) => ({
    type: types.UPDATE_INPUT_START_VALUE,
    city,
    uniqueName,
    cityId
});

export const onChangeInputStart = (value) => ({
    type: types.ON_CHANGE_INPUT_START,
    value,
});

export const receivedDataOnChangeInputStart = (data) => ({
    type: types.RECEIVED_DATA_ON_CHANGE_INPUT_START,
    data,
});

export const onChangeInputArrived = (value) => ({
    type: types.ON_CHANGE_INPUT_ARRIVED,
    value,
});

export const receivedDataOnChangeInputArrived = (data) => ({
    type: types.RECEIVED_DATA_ON_CHANGE_INPUT_ARRIVED,
    data,
});

export const focusInputStart = (heightArrow) => ({
    type: types.FOCUS_INPUT_START,
    heightArrow
});

export const receivedDataFocusInputStart = (data) => ({
    type: types.RECEIVED_DATA_FOCUS_INPUT_START,
    data,
}); 

export const focusInputArrived = (heightArrow) => ({
    type: types.FOCUS_INPUT_ARRIVED,
    heightArrow
});

export const receivedDataFocusInputArrived = (data) => ({
    type: types.RECEIVED_DATA_FOCUS_INPUT_ARRIVED,
    data,
});

export const getPopularCities = () => ({
    type: types.GET_POPULAR_CITIES,
});

export const receivedDataPopularCities = (data) => ({
    type: types.RECEIVED_DATA_POPULAR_CITIES,
    data,
});

export default {
    updateInputStartValue,
    onChangeInputStart,
    receivedDataOnChangeInputStart,
    onChangeInputArrived,
    receivedDataOnChangeInputArrived,
    focusInputStart,
    receivedDataFocusInputStart,
    focusInputArrived,
    receivedDataFocusInputArrived,
    getPopularCities,
    receivedDataPopularCities
}
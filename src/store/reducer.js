import types from './types';
import selectors from './selectors';

const initialState = {
    suggestionsCities: [],
    popularCites: [],
    resultSearchCitiesStart: [],
    resultSearchCitiesArrived: [],
    inputStartValue: '',
    inputArrivedValue: '',
    inputStartIsFocus: false,
    inputArrivedIsFocus: false,
    uniqueName: '',
    cityStartId: '',
    cityArrivedId: '',
    heightArrow: 0,
    searchIsActive: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
         case types.RECEIVED_DATA_POPULAR_CITIES:
            return {
                ...state,
                popularCites: [ ...action.data ],
            }
        case types.UPDATE_INPUT_START_VALUE:
            return {
                ...state,
                inputStartValue: state.inputStartIsFocus ? action.city : state.inputStartValue,
                inputArrivedValue: state.inputArrivedIsFocus ? action.city : state.inputArrivedValue,
                resultSearchCitiesStart: state.inputStartIsFocus ? state.suggestionsCities : state.resultSearchCitiesStart,
                resultSearchCitiesArrived: state.inputArrivedIsFocus ? state.suggestionsCities : state.resultSearchCitiesArrived,
                uniqueName: state.inputStartIsFocus ? action.uniqueName : '',
                suggestionsCities: state.suggestionsCities.map(city => {
                    if (city.city_id === action.cityId) {
                        return {
                            ...city,
                            selected: true,
                        }
                    }

                    return {
                        ...city,
                        selected: false,
                    }
                }),
                cityStartId: state.inputStartIsFocus ? action.cityId : state.cityStartId,
                cityArrivedId: state.inputArrivedIsFocus ? action.cityId : state.cityArrivedId,
                
            }
        case types.ON_CHANGE_INPUT_START:
            return {
                ...state,
                inputStartValue: action.value,
                uniqueName: '',
                cityStartId: ''
            }
        case types.RECEIVED_DATA_ON_CHANGE_INPUT_START:
            return {
                ...state,
                suggestionsCities: [ ...action.data ],
                resultSearchCitiesStart: [ ...action.data ],
            }
        case types.ON_CHANGE_INPUT_ARRIVED:
            return {
                ...state,
                inputArrivedValue: action.value,
                cityArrivedId: '',
            }
        case types.RECEIVED_DATA_ON_CHANGE_INPUT_ARRIVED:
            return {
                ...state,
                suggestionsCities: [ ...action.data ],
                resultSearchCitiesArrived: [ ...action.data ],
            }
        case types.FOCUS_INPUT_START:
            return {
                ...state,
                inputStartIsFocus: true,
                inputArrivedIsFocus: false,
                suggestionsCities: (state.inputStartValue !== '') ? 
                selectors.addSelectedTrueToCityStart(state.resultSearchCitiesStart, state) : 
                state.popularCites,
                heightArrow: action.heightArrow,
                searchIsActive: true
            }
        case types.FOCUS_INPUT_ARRIVED: 
            return {
                ...state,
                inputArrivedIsFocus: true,
                inputStartIsFocus: false,
                suggestionsCities: (state.inputStartValue !== '' & state.inputArrivedValue === '') ? action.updateData :
                (state.inputArrivedValue !== '') ? selectors.addSelectedTrueToCityArrived(state.resultSearchCitiesArrived, state) : 
                state.popularCites,
                heightArrow: action.heightArrow,
                searchIsActive: true
            }
        // case types.RECEIVED_DATA_FOCUS_INPUT_ARRIVED:
        //     return {
        //         ...state,
        //         suggestionsCities: action.data,
        //     }
        default:
        return state;
    }
};

export default reducer;
import types from './types';
import { 
    receivedDataOnChangeInputStart,
    receivedDataOnChangeInputArrived,
    receivedDataPopularCities
} from './actions';
import { addPropertySelectedToData } from './selectors';
import axios from 'axios';


const ajaxMiddleware = store => next => action => {
    switch (action.type) {
        case types.GET_POPULAR_CITIES:
            next(action);

            return axios.get('https://api.tictactrip.eu/cities/popular/5')
                .then(({ data }) => {
                    const updateData = addPropertySelectedToData(data);
                    store.dispatch(receivedDataPopularCities(updateData));
                });
        case types.ON_CHANGE_INPUT_START:
            next(action);
            return axios.get(`https://api.tictactrip.eu/cities/autocomplete/?q=${action.value}`)
                .then(({ data }) => {
                    const updateData = addPropertySelectedToData(data);

                    store.dispatch(receivedDataOnChangeInputStart(updateData));
                });
        case types.ON_CHANGE_INPUT_ARRIVED:
            next(action)
            return  axios.get(`https://api.tictactrip.eu/cities/autocomplete/?q=${action.value}`)
                .then(({ data }) => {
                    const updateData = addPropertySelectedToData(data);

                    store.dispatch(receivedDataOnChangeInputArrived(updateData));
                });
        case types.FOCUS_INPUT_ARRIVED:
            const { inputStartValue, inputArrivedValue, uniqueName } = store.getState();
            const dataForSearch = uniqueName !== '' ? uniqueName : inputStartValue;
        
            if ((inputStartValue === '' && inputArrivedValue === '') || (inputArrivedValue !== '' && inputStartValue !== '') || dataForSearch === '') {
                next(action);
                return;
            }
        
            return axios.get(`https://api.tictactrip.eu/cities/popular/from/${dataForSearch.toLowerCase()}/5`)
                .then(({ data }) => {
                const updateData = addPropertySelectedToData(data);
                next({
                    ...action,
                    updateData,
                });
            });
        default:
            return next(action);
    }
};

export default ajaxMiddleware;
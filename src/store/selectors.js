export const addPropertySelectedToData = (arrData) => (
    arrData.map((d, index) => {
        if (index === 0) {
            return {
                ...d,
                selected: true,
            }
        }

        return {
            ...d,
            selected: false,
        }
    })
);

export const addSelectedTrueToCityStart = (arrData, state) => (
    arrData.map((data) => {
        if (data.city_id === state.cityStartId) {
            return {
                ...data,
                selected: true,
            }
        }

        return {
            ...data,
            selected: false,
        }
    })
);

export const addSelectedTrueToCityArrived = (arrData, state) => (
    arrData.map((data) => {
        if (data.city_id === state.cityArrivedId) {
            return {
                ...data,
                selected: true,
            }
        }

        return {
            ...data,
            selected: false,
        }
    })
);

export default {
    addPropertySelectedToData,
    addSelectedTrueToCityStart,
    addSelectedTrueToCityArrived
};
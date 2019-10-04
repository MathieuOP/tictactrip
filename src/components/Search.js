import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; 
import { useMediaQuery } from 'react-responsive'
import './style/Search.scss';
import Input from './Input';
import SuggestionList from '../containers/SuggestionList';

const Search = ({
  inputStartValue,
  inputArrivedValue,
  suggestionsCities,
  onChangeInputStart,
  onChangeInputArrived,
  focusInputStart,
  focusInputArrived,
  heightArrow,
  inputStartIsFocus,
  searchIsActive,
  getPopularCities
}) => {

  useEffect(() => {
    getPopularCities();
  }, [getPopularCities]);
  
  const deleteAndAddClassInInputActive = (e) => {
    const parentInputElement = e.currentTarget.parentNode.parentNode.childNodes;

    parentInputElement.forEach(element => {
      const input = element.children[0];
      if (input.value === '') input.classList.remove('search__input--active');
    });

    e.currentTarget.classList.add('search__input--active');
  }

  const handleChangeInputStart = (e) => {
    const inputStartValue = e.currentTarget.value;
    onChangeInputStart(inputStartValue);
  }

  const handleChangeInputArrived = (e) => {
    const inputArrivedValue = e.currentTarget.value;
    onChangeInputArrived(inputArrivedValue);
  }

  const handleFocusInputStart = (e) => {
    deleteAndAddClassInInputActive(e)
    focusInputStart(e.currentTarget.offsetTop);
  }

  const handleFocusInputArrived = (e) => {
    deleteAndAddClassInInputActive(e);
    focusInputArrived(e.currentTarget.offsetTop);
  }

  const minWidthForDisplayArrow = useMediaQuery({ query: '(min-width: 992px)' })

  return (
      <div className="search">
        <div className="search__container">
          <div className="search__title"> Quel est votre itinéraire ? </div>
          <form>
            <div className="search__section">
              <Input 
                onChange={handleChangeInputStart}
                type="text"
                value={inputStartValue}
                autoComplete="off"
                placeholder="Saississez une ville de départ"
                onFocus={handleFocusInputStart}
                className="search__input"
              />
            </div>

            <div className="search__section">
              <Input 
                onChange={handleChangeInputArrived}
                type="text"
                value={inputArrivedValue}
                autoComplete="off"
                placeholder="Saississez une ville d'arrivé"
                onFocus={handleFocusInputArrived}
                className="search__input"
              />
            </div>
          </form>
        </div>

        <div className="search__suggestion">
          {
            (suggestionsCities.length === 0 && searchIsActive) && (
              <div> Aucune ville trouvée </div>
            )
          }
          
          {
              suggestionsCities.length > 0 && (
                <>
                  {
                    minWidthForDisplayArrow && (
                      <div className="search__arrow" style={{top: heightArrow}}/>
                    )
                  }
                  
                  <div className="search__title"> Choisissez une gare { inputStartIsFocus ? 'de départ' : 'd\'arrivée'} ? </div>
                    <ul className="search__list">
                    {
                      suggestionsCities.map(({ unique_name, local_name, city_id, selected }, index) => {
                        return (
                          <SuggestionList 
                              key={`${city_id}-index:${index}`}
                              localName={local_name}
                              uniqueName={unique_name}
                              cityId={city_id}
                              className={selected ? 'search__city search__city--selected' : 'search__city'}
                          />
                        )
                      })
                    }
                  </ul>
                </>
              )
          }
        </div> 
      </div>
  );
}

Search.propTypes = {
  inputStartValue: PropTypes.string.isRequired,
  inputArrivedValue: PropTypes.string.isRequired,
  suggestionsCities: PropTypes.arrayOf(PropTypes.object),
  onChangeInputStart: PropTypes.func.isRequired,
  onChangeInputArrived: PropTypes.func.isRequired,
  focusInputStart: PropTypes.func.isRequired,
  focusInputArrived: PropTypes.func.isRequired,
  heightArrow: PropTypes.number.isRequired,
  inputStartIsFocus: PropTypes.bool.isRequired,
  searchIsActive: PropTypes.bool.isRequired,
}

export default Search;

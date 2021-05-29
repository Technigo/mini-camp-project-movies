import React, { useState } from "react";
import { API_KEY } from '../components/Urls.js';

const Header = (props) => {
  const [filterValue, setFilterValue] = useState(props.filterValue);
  const filterChange = (e) => {
    setFilterValue(e.target.value);
    props.setFilterValue(e.target.value);
    props.setApiUrl(`https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${API_KEY}&language=en-US&page=1`)
  }
  return (
    <header className='header'>
      <div className='select-wrapper'>
        <select
          className='select-filter'
          name='select-filter'
          onChange={filterChange}
          value={filterValue}>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
            <option value='upcoming'>Upcoming</option>
            <option value='now_playing'>Now Playing</option>
        </select>
      </div>
    </header>
  )
}
export default Header;
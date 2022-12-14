import React, { useEffect, useState } from 'react';
// import { MOVIE_API_URL } from '../../services/courses.service';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCourses } from '../../redux/actions/courses';

import './Header.scss';
// import logo from '../../assets/cinema-logo.svg';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { getCourses } = props;
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  useEffect(() => {
    getCourses('now_playing', 1);
    // const fetchData = async () => {
    //   const res = await MOVIE_API_URL('now_playing');
    //   console.log(res);
    // };
    // fetchData();
    // eslint-disable-next-line
  }, []);

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            {/* <img src={logo} alt="" /> */}
            rtp
          </div>
          <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map((data) => (
              <li key={data.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
            <input className="search-input" type="text" placeholder="Search for a course" />
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  list: PropTypes.array
};

const mapStateToProps = (state) => ({
  list: state.courses.list
  // page: state.movies.page,
  // totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, { getCourses })(Header);

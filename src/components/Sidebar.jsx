import PropTypes from 'prop-types';

export default function Sidebar({ name }) {
  return (
    <div className='fixed-side-bar'>
      <div>
        <a href='/'>
          <img className='logo' src='/logo/logo-main.svg' />
        </a>
        <p className='side-bar-dynamic-name'>{name}</p>
        <a href='/'>
          <img className='logo' src='/logo/abcd-logo_orange.svg'></img>
        </a>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
};

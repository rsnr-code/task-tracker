import PropTypes from 'prop-types';

const Button = ({ color, text, onClick: handleClick }) => {
    return ( 
        <div>
            <button className="btn" style={{ backgroundColor: color }} onClick={ handleClick }>{ text }</button>
        </div>
     );
}
 
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
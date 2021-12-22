import {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src='meals.jpg' className="Meals-logo" alt="meals"/>
            </div>
        </Fragment>

    )
}
export default Header;

import React, {Component} from 'react'
import styles from './index.module.css'
import logo from '../../images/logo.png'
import getNavigation from '../../utils/navigation'
import Link from '../link'

class Header extends Component {
    render(){
        const links = getNavigation()
    return(
        <header className={styles.navigation}>
        <img alt="logo" className={styles.logo} src={logo} />
        {
          links.map(navElement => {
            return (
              <Link
                key={navElement.title}
                href={navElement.link}
                title={navElement.title}
                type="header"
              />
            )
          })
        }
        </header>
    )
}
}

export default Header
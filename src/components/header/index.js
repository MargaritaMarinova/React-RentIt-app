import React, {Component} from 'react'
import styles from './index.module.css'
import logo from '../../images/logo.png'
import getNavigation from '../../utils/navigation'
import Link from '../link'
import UserContext from '../../Context'

class Header extends Component {

    static contextType = UserContext
    render(){
      const {
        user
      } = this.context
       
      const links = getNavigation(user)
    
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
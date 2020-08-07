import React, {Component} from 'react'
import styles from './index.module.css'

import asideNavigation from '../../utils/asideNavigation'
import Link from '../link'

class Aside extends Component {
    render(){
        const categories = asideNavigation()
    return(
        <aside className={styles.container}>
        
        {
          categories.map(navElement => {
            return (
              <Link
                key={navElement.title}
                href={navElement.link}
                title={navElement.title}
                type="aside"
              />
            )
          })
        }
        </aside>
    )
}
}

export default Aside
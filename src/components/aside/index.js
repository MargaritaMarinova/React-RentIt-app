import React, {Component} from 'react'
import styles from './index.module.css'
import asideNavigation from '../../utils/asideNavigation'
import Link from '../link'


class Aside extends Component {
    render(){
        const categories = asideNavigation()
    return(
        <aside>
        
       <nav>
           
        </nav>
    
        </aside>
    )
}
}

export default Aside
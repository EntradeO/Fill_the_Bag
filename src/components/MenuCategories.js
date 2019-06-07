import React from 'react'
import { ReactComponent as FrecciaMenuDX } from '../img/FrecciaMenuDX.svg';
import { ReactComponent as FrecciaMenuSX } from '../img/FrecciaMenuSX.svg';


class MenuCategories extends React.Component {
    render(){
      return (
        <div className="BackGroundMenu">
            <a>
                <FrecciaMenuSX/>
            </a>
            <h2>Cocktail</h2>
            <a>
                <FrecciaMenuDX/>
            </a>
        </div>
      );
    }
  }


export default MenuCategories
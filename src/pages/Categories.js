import React, { Component } from 'react';
import ElementList from '../components/ElementList';
import Header from '../components/Header';
import MenuCategories from '../components/MenuCategories';
class CategoriesView extends Component {
    render() {
			return (
        <div>
            <Header/>
            <MenuCategories/>
            <ElementList name="MANATTAN" description="" price="8,00 €" ></ElementList>
            <ElementList name="COSMOPOLITAN" description="" price="8,00 €" ></ElementList>
            <ElementList name="BLODY MARY" description="" price="8,00 €" ></ElementList>
            <ElementList name="SEX ON THE BEACH" description="" price="8,00 €" ></ElementList>
            <ElementList name="CUBA LIBRE" description="" price="8,00 €" ></ElementList>
            <ElementList name="MOIJTO" description=""price="8,00 €" ></ElementList>
       </div>
			);
		}
	}
export default CategoriesView;
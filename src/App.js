import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import './helpers.js';
import './client.js';
import { Label, Input, Search, Form, Radio, Pagination, Container, Divider, Segment, Grid, Table, Modal, 
  Dropdown, Image, Item, Checkbox, Button, Dimmer, Loader, Icon, Message, Header } from 'semantic-ui-react'
import _ from 'lodash';
import Lightbox from 'react-image-lightbox';
import axios from 'axios';

import 'react-image-lightbox/style.css';
import DragSortableList from 'react-drag-sortable'
//import ReactDragList from 'react-drag-list';
//import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

//import ImageUploader from 'react-images-upload';
//import Dropzone from 'react-dropzone'
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const uuid = require('uuid/v4');


/*Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
  var that = this;
  return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
  return that.slice(i*chunkSize,i*chunkSize+chunkSize);
  });
  }
});*/



let users = [
  {
    id: '0',
    username: 'admin',
    password: 'MAGIC3232!',
    group: '0',
  },
  {
    id: '1',
    username: 'orr',
    password: 'MAGIC3232!',
    group: '1'
  },
  {
    id: '2',
    username: 'dekel',
    password: 'dekel',
    group: '1',
  },
  {
    id: '3',
    username: 'jagnoha',
    password: 'jagnoha',
    group: '2',
  },
  {
    id: '4',
    username: 'robert',
    password: 'robert',
    group: '2',
  },
  {
    id: '5',
    username: 'jordan',
    password: 'jordan',
    group: '2',
  }
];

let conditions = [
  {
    id: '0',
    type: 'New'
  },
  {
    id: '1',
    type: 'New (Other)'
  },
  {
    id: '2',
    type: 'Used'
  }
];

let locations = [
  {
    id: '1',
    value: '155B2'
  },
  {
    id: '2',
    value: '170M4',
  },
  {
    id: '3',
    value: '136M5',
  },
]

let brands = [
  {
    id: '1',
    value: 'Ford',  
  },
  {
    id: '2',
    value: 'Mopar',
  },
  {
    id: '3',
    value: 'Motorcraft',
  }
]


let productsServer = [
  {
    uuid: '1',
    timestamp: '2018-07-27T13:07:41-0400',
    authorId: '1',
    sku: 'ABC123',
    title: 'Ford ** 3PCS ** NUT N620481-S2',
    description: 'Ford ** 3PCS ** NUT N620481-S2',
    brand: '1',
    partNumbers: [
      'N620481-S2', 'N620481-AS2'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119713788-244143055.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119713788-244143055.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119775898-89732727.jpg'
    ],
    location: [
      '1'
    ],
    quantity: '0',
    condition: '1',
    conditionDescription: ['Bag Damage'],
    otherCondition: '',
    price: '40.00',
    bestOffer: false,
    freeShipping: false,
    domestic: '1',
    international: '0',
    length: '8',
    width: '8',
    depth: '8',
    weight: '15',
    weightUnit: 'oz',
    compatibilityManual: [
      {
        make: 'Chrysler',
        model: '300M',
        year: '2004',
        trim: 'Base, Special',
        engine: '3.5L V6 - Gas'
      },
      {
        make: 'Chrysler',
        model: '300M',
        year: '2003',
        trim: 'Base, Pro-Am, Special',
        engine: '3.5L V6 - Gas'
      }
    ],
    compatibilityEbayId: '',
    status: 'offline',
    ebayAccounts: [],
    amazonAccounts: [],
  },
  {
    uuid: '2',
    timestamp: '2018-07-25T13:07:41-0400',
    authorId: '3',
    sku: 'UJD2231',
    title: 'Ford NUT W707612-S300',
    description: 'Ford NUT W707612-S300 ',
    brand: '1',
    partNumbers: [
      'W707612-S300'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119848805490098767.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119899679-2118847462.jpg'
    ],
    location: [
      '2', '3'
    ],
    quantity: '2',
    condition: '0',
    conditionDescription: [],
    otherCondition: '',
    price: '25.00',
    bestOffer: false,
    freeShipping: true,
    domestic: '1',
    international: '0',
    length: '8',
    width: '8',
    depth: '8',
    weight: '15',
    weightUnit: 'oz',
    compatibilityManual: [],
    compatibilityEbayId: '',
    status: 'online',
    ebayAccounts: [],
    amazonAccounts: [],
  },
  {
    uuid: '3',
    timestamp: '2018-05-27T13:07:41-0400',
    authorId: '2',
    sku: '123431FFSD',
    title: 'Mopar TAILGATE DOOR 55396984AD',
    description: 'Mopar TAILGATE DOOR 55396984AD',
    brand: '2',
    partNumbers: [
      '55396984AD'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg',
    ],
    location: [],
    quantity: '1',
    condition: '1',
    conditionDescription: ['Open Box'],
    otherCondition: '',
    price: '0.00',
    bestOffer: true,
    freeShipping: true,
    domestic: '2',
    international: '0',
    length: '8',
    width: '8',
    depth: '8',
    weight: '15',
    weightUnit: 'oz',
    compatibilityManual: [],
    compatibilityEbayId: '',
    status: 'offline',
    ebayAccounts: [],
    amazonAccounts: [],
  },
  {
    uuid: '4',
    timestamp: '2018-03-27T13:07:41-0400',
    authorId: '1',
    sku: '12DDSA3431FFSD',
    title: 'Mopar TAILGATE DOOR 5DDSAD5396984AD',
    description: 'Mopar TAILGATE DOOR 5DDSAS5396984AD',
    brand: '3',
    partNumbers: [
      '55396DDSA984AD'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg'
    ],
    location: [],
    quantity: '1',
    condition: '2',
    conditionDescription: 'Open Box',
    otherCondition: '',
    price: '0.00',
    bestOffer: false,
    freeShipping: true,
    domestic: '3',
    international: '0',
    length: '8',
    width: '8',
    depth: '8',
    weight: '15',
    weightUnit: 'oz',
    compatibilityManual: [],
    compatibilityEbayId: '',
    status: 'offline',
    ebayAccounts: [],
    amazonAccounts: [],
  }
];


const initialState = {
  rawList: [],
  rawLocations: [],
  rawBrands: [],
  productsList: [],
  productsListSorted: [],  
  productsByPage: 10,  
  activePage: 1,
  productsSelected: [],
  conditionsList: conditions,
  brandsList: [],
  locationsList: [],
  usersList: users,
  usersFilterActive: 'ALL',
  statusFilterActive: 'ALL',
  conditionsFilterActive: 'ALL',        
  checkAll: false,
  valueSearch: '',
  checkedSearch: false,
  userActive: null,
  partNumber: '',
  locationItem: [],
  globalDirection: null,
  globalColumn: null,
  
      
  //partNumberList: [],
}

function reducer(state, action) {
  
   if (action.type === 'SORT_PRODUCT_LIST'){
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      rawList: state.rawList,
      productsListSorted: action.listSorted,
      productsSelected: [],
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      activePage: state.activePage,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: false,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
    };

    
  } else if (action.type === 'UPDATE_LISTINGS'){

   
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: action.listingsFromDB.data,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      productsSelected: state.productsSelected,
      activePage: state.activePage,
      //productsListSorted: _.sortBy(action.listingsFromDB.data, 'timestamp').reverse(),    
      
      productsListSorted: action.direction === 'ascending' ? _.sortBy(action.listingsFromDB.data, (item => {
        if (action.field === 'price'){
          return parseFloat(item[action.field]);
        } else {
          return item[action.field];
        }
        
      })).reverse() : _.sortBy(action.listingsFromDB.data, (item => {
        if (action.field === 'price'){
          return parseFloat(item[action.field]);
        } else {
          return item[action.field];
        }
        
      })),
      
      
      /*productsListSorted: action.direction === 'ascending' ? _.sortBy(action.listingsFromDB.data, action.field).reverse() :     
      _.sortBy(action.listingsFromDB.data, action.field),*/
      
      //productsListSorted: state.productsListSorted,
      
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: state.locationItem,

    }

  } else if (action.type === 'UPDATE_FIELD_DIRECTION'){

    return {
      globalDirection: action.directionValue,
      globalColumn: action.fieldValue,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      rawList: state.rawList,
      productsSelected: [],
      activePage: 1,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsFromDB,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: false,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
    }

  } else if (action.type === 'UPDATE_LOCATIONS'){

    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawLocations: action.locationsFromDB.data,
      rawBrands: state.rawBrands,
      rawList: state.rawList,
      productsSelected: state.productsSelected,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: action.locationsFromDB,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: state.locationItem,

    }
  

  } else if (action.type === 'UPDATE_BRANDS'){

    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawBrands: action.brandsFromDB.data,
      rawLocations: state.rawLocations,
      rawList: state.rawList,
      productsSelected: state.productsSelected,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: action.brandsFromDB,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: state.locationItem,

    }

  } else if (action.type === 'ADD_PRODUCT_SELECTED'){
    
    const newProductSelected = action.id;
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,      
      productsSelected: action.listSelected.concat(newProductSelected),
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
    }

  } else if (action.type === 'CHANGE_PARTNUMBER'){
    
    //const newProductSelected = action.id;
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      productsSelected: state.productsSelected,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: action.partNumber,
      locationItem: state.locationItem,
      
      //partNumberList: state.partNumberList,

    }

  /*} else if (action.type === 'CHANGE_PARTNUMBER_LIST'){
    
    //const newProductSelected = action.id;
    
    return {
      productsSelected: state.productsSelected,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      //partNumberList: action.newPartNumberList,

    }*/

  } else if (action.type === 'DELETE_PRODUCT_SELECTED'){
    const newProductsSelected = action.listSelected.filter(item => item !== action.id);
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      productsSelected: newProductsSelected,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }; 
  } else if (action.type === 'CHANGE_ACTIVE_PAGE') { 
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      activePage: Number(action.activePage),
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      productsSelected: [],
      checkAll: false,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }; 
    
  } else if (action.type === 'CHANGE_USER_FILTER') {
    return {
        globalDirection: state.globalDirection,
        globalColumn: state.globalColumn,
        rawList: state.rawList,
        rawLocations: state.rawLocations,
        rawBrands: state.rawBrands,
        usersFilterActive: action.usersFilterActive,
        activePage: 1,
        productsListSorted: state.productsListSorted,
        productsByPage: state.productsByPage,
        usersList: state.usersList,
        conditionsList: state.conditionsList,
        brandsList: state.brandsList,
        locationsList: state.locationsList,
        productsSelected: [],
        checkAll: false,
        statusFilterActive: state.statusFilterActive,
        conditionsFilterActive: state.conditionsFilterActive,
        valueSearch: state.valueSearch,
        checkedSearch: state.checkedSearch,
        userActive: state.userActive,
        partNumber: state.partNumber,
        locationItem: [],
      
        //partNumberList: [],
  
    }

  } else if (action.type === 'CHANGE_STATUS_FILTER') {
    return {
        globalDirection: state.globalDirection,
        globalColumn: state.globalColumn,
        rawList: state.rawList,
        rawLocations: state.rawLocations,
        rawBrands: state.rawBrands,
        statusFilterActive: action.statusFilterActive,
        usersFilterActive: state.usersFilterActive,
        conditionsFilterActive: state.conditionsFilterActive,
        activePage: 1,
        productsListSorted: state.productsListSorted,
        productsByPage: state.productsByPage,
        usersList: state.usersList,
        conditionsList: state.conditionsList,
        brandsList: state.brandsList,
        locationsList: state.locationsList,
        productsSelected: [],
        checkAll: false,
        valueSearch: state.valueSearch,
        checkedSearch: state.checkedSearch,
        userActive: state.userActive,
        partNumber: state.partNumber,
        locationItem: [],
      
        //partNumberList: [],
  
    }
  } else if (action.type === 'CHANGE_CONDITION_FILTER') {
    return {
        globalDirection: state.globalDirection,
        globalColumn: state.globalColumn, 
        rawList: state.rawList,
        rawLocations: state.rawLocations,
        rawBrands: state.rawBrands,
        statusFilterActive: state.statusFilterActive,
        usersFilterActive: state.usersFilterActive,
        conditionsFilterActive: action.conditionsFilterActive,
        activePage: 1,
        productsListSorted: state.productsListSorted,
        productsByPage: state.productsByPage,
        usersList: state.usersList,
        conditionsList: state.conditionsList,
        brandsList: state.brandsList,
        locationsList: state.locationsList,
        productsSelected: [],
        checkAll: false,
        valueSearch: state.valueSearch,
        checkedSearch: state.checkedSearch,
        userActive: state.userActive,
        partNumber: state.partNumber,
        locationItem: [],
      
        //partNumberList: [],
  
    }

  } else if (action.type === 'UNCHECK_ALL'){
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,    
      productsSelected: [],
      checkAll: false,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
      valueSearch: state.valueSearch,
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }
  } else if (action.type === 'CHECK_ALL'){
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,    
      productsSelected: action.productsSelected,
      checkAll: true,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
      valueSearch: state.valueSearch,        
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }
  } else if (action.type === 'CHANGE_VALUE_SEARCH'){
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,
      productsSelected: [],
      checkAll: false,
      valueSearch: action.valueSearch,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,             
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }
    
  } else if (action.type === 'CHANGE_CHECKED_SEARCH'){
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,    
      productsSelected: [],
      checkAll: false,
      activePage: 1,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
      valueSearch: state.valueSearch,        
      checkedSearch: action.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }
  
  } else if (action.type === 'UPDATE_LOCATION_ITEM'){
    
    const newLocationsList = state.locationsList.concat({id: action.id, value: action.newLocation});

  return {
    globalDirection: state.globalDirection,
    globalColumn: state.globalColumn,
    rawList: state.rawList,
    rawLocations: state.rawLocations,
    rawBrands: state.rawBrands,    
    productsSelected: [],
    checkAll: false,
    activePage: state.activePage,
    productsListSorted: state.productsListSorted,
    productsByPage: state.productsByPage,
    usersList: state.usersList,
    conditionsList: state.conditionsList,
    brandsList: state.brandsList,
    locationsList: newLocationsList,
    usersFilterActive: state.usersFilterActive,
    statusFilterActive: state.statusFilterActive,
    conditionsFilterActive: state.conditionsFilterActive,
    valueSearch: state.valueSearch,        
    checkedSearch: state.checkedSearch,
    userActive: state.userActive,
    partNumber: state.partNumber,
    locationItem: action.locationItem,
    //partNumberList: state.partNumberList,

  }


  } else if (action.type === 'ADD_NEW_LOCATION'){
    
      const newLocationsList = state.locationsList.concat({id: action.id, value: action.newLocation});

    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,    
      productsSelected: [],
      checkAll: false,
      activePage: state.activePage,
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: newLocationsList,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
      valueSearch: state.valueSearch,        
      checkedSearch: state.checkedSearch,
      userActive: state.userActive,
      partNumber: state.partNumber,
      locationItem: state.locationItem,
      //partNumberList: state.partNumberList,
  
    }

  } else if (action.type === 'ADD_NEW_BRAND'){
    
    const newBrandList = state.brandsList.concat({id: uuid(), value: action.newBrand});

  return {
    globalDirection: state.globalDirection,
    globalColumn: state.globalColumn,
    rawList: state.rawList,
    rawLocations: state.rawLocations,
    rawBrands: state.rawBrands,    
    //rawBrands: newBrandList,
    productsSelected: [],
    checkAll: false,
    activePage: state.activePage,
    productsListSorted: state.productsListSorted,
    productsByPage: state.productsByPage,
    usersList: state.usersList,
    conditionsList: state.conditionsList,
    brandsList: newBrandList,
    locationsList: state.locationsList,
    usersFilterActive: state.usersFilterActive,
    statusFilterActive: state.statusFilterActive,
    conditionsFilterActive: state.conditionsFilterActive,
    valueSearch: state.valueSearch,        
    checkedSearch: state.checkedSearch,
    userActive: state.userActive,
    partNumber: state.partNumber,
    locationItem: state.locationItem,
      
    //partNumberList: state.partNumberList,
  
  }

  } else if (action.type === 'CHANGE_ACTIVE_USER'){
    
    return {
      globalDirection: state.globalDirection,
      globalColumn: state.globalColumn,
      rawList: state.rawList,
      rawLocations: state.rawLocations,
      rawBrands: state.rawBrands,    
      productsSelected: [],
      checkAll: false,
      activePage: 1,
      productsListSorted: state.productsListSorted,
      productsByPage: 3,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      brandsList: state.brandsList,
      locationsList: state.locationsList,
      usersFilterActive: 'ALL',
      statusFilterActive: 'ALL',
      conditionsFilterActive: 'ALL',
      valueSearch: '',        
      checkedSearch: false,
      userActive: action.userActive,
      partNumber: state.partNumber,
      locationItem: [],
      
      //partNumberList: [],
  
    }


  } else {
    return state;
  }
}







const store = createStore(reducer, initialState);



class ImagesLightBox extends Component {
  
  state = {
    photoIndex: this.props.photoIndex,
    isOpen: false,
  }
  
  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.pictures;

    return (
      <span>
        
        
        <Image size={this.props.size} src = {"http://localhost:8083/images/" + this.props.pictures[photoIndex] + ".jpg"} onClick={() => this.setState({ isOpen: true })}
        
        
        
        
        >
        
      </Image>
      
        
        {isOpen && (
          <Lightbox
            mainSrc={"http://localhost:8083/images/"+images[photoIndex]+".jpg"}
            nextSrc={"http://localhost:8083/images/"+images[(photoIndex + 1) % images.length] + ".jpg"}
            prevSrc={"http://localhost:8083/images/"+images[(photoIndex + images.length - 1) % images.length]+ ".jpg"}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </span>
    );
  }
}






class DroppablePictures extends Component {
  
  render(){
    const listPictures = this.props.picturesList.map((item, index) => {
      
      return (
        <ImagesLightBox size='small' key={index} pictures = {this.props.picturesList} photoIndex = {index} />
      )
    }
    );
    return(
      <span>{listPictures}</span>
    )
  }
}



class LocationsField extends Component {
  state = { 
    options: this.props.locationsList.map(item => {
      return {key: item.id, text: item.value, value: item.id}
    }),
    currentValues: this.props.currentLocations.map(item => {
      return item;
    }),
    /*currentLocationsId: this.props.currentLocations.map(item => {
      return item;
    }),*/
    //locations: this.props.currentLocations,
  }

  

  handleAddition = (e, data) => {
        
    const locationId = uuid();    
    
    const newCurrentValue = this.state.currentValues
    .filter(item => item !== data.value)
    .concat(locationId)
    .map(item => item);
    
    store.dispatch(
      {
        type: 'ADD_NEW_LOCATION',
        id: locationId,
        newLocation: data.value.toUpperCase(),
      }
    );
    
    this.setState({
      options: [{ text: data.value.toUpperCase(), value: locationId }, ...this.state.options],
      currentValues: newCurrentValue,
    });
    
    this.props.changeLocation(newCurrentValue);

  }

  handleChange = (e,  data ) => {
    console.log("ESTE ES EL NUEVO VALUE= > > > > > >  " + data.value);
    console.log("OPTIONS: " + this.state.options);
    
    this.setState({ 
      currentValues: data.value, 
      
    })

    this.props.changeLocation(data.value);

    console.log("CURRENT VALUES INSIDE HANDLE CHANGE: " + this.state.currentValues);
    
  }

  render() {
    //console.log("VALORES DE LOCATION ACTUALES EN ESTE ITEM: " + this.state.currentValues);
    //console.log("LISTA DE LOCATIONS DISPONIBLES: " + this.props.locationsList);
    console.log("CURRENT VALUES INSIDE RENDER: " + this.state.currentValues);
    
    const { currentValues } = this.state
    const renderLabel = label => ({
        color: 'black',
        content: label.text,
        icon: 'warehouse',
      }
    )
    return (
      <div>
      <Dropdown
        options={this.state.options}
        closeOnChange
        placeholder='Locations'
        renderLabel={renderLabel}
        minCharacters = {2}
        search
        selection
        fluid
        multiple
        upward
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
      </div>
    )
  }
}

class BrandsField extends Component {
  state = { 
    options: this.props.brandsList.map(item => {
      return {key: item.id, text: item.value, value: item.id}
    }),    
    currentValue: this.props.currentBrand,
  }

  

  handleAddition = (e, { value }) => {
        
    
    if (this.props.brandsList.filter(item => item.value.toLowerCase() === value.toLowerCase()).length === 0){
      
      

    this.setState({
      options: [{ text: value.toUpperCase(), value }, ...this.state.options],
    });
    store.dispatch(
      {
        type: 'ADD_NEW_BRAND',
        newBrand: value.toUpperCase(),
      }
    )
    
    } else {
      this.setState({
        options: this.state.options,
      });
    }
    
    

  }

  handleChange = (e, { value }) => { 
    const brandOld = this.state.options.filter(item => {
      if (item.value === this.state.currentValue){
        return item;
      }
    });

    const brandNew = this.state.options.filter(item => {
      if (item.value === value){
        return item;
      }
    });

    console.log("ESTA REALIZANDO UN CAMBIO!!!!!");

    if (brandOld.length > 0 && brandNew.length > 0){
     
      console.log("DENTRO DEL IF !!!!!!!!!!");
      console.log("BRAND OLD: " + brandOld[0].text);
      console.log("BRAND NEW: " + brandNew[0].text);
      this.props.replaceTitle(brandOld[0].text, brandNew[0].text);
      this.props.replaceDescription(brandOld[0].text, brandNew[0].text);
    }

    this.setState({ currentValue: value });
    this.props.changeBrand(value);
    
    this.props.replaceTitle(brandOld[0].text, value);
    this.props.replaceDescription(brandOld[0].text, value);
  
  
  }

  render() {
    const { currentValue } = this.state
    /*const renderLabel = label => ({
        color: 'blue',
        content: label.text,
        size: 'small',
      }
    )*/
    return (
      <div>
      <Form.Dropdown
        label="Brand"
        options={this.state.options}
        closeOnChange
        placeholder='Brands'
        //renderLabel={renderLabel}
        minCharacters = {2}
        search
        selection
        fluid
        //multiple
        //upward
        allowAdditions
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
      </div>
    )
  }
}

class PartNumberTag extends Component{
  

  handleOnClickIcon = () => {
    this.props.deletePartNumber(this.props.id);
  }

  handleOnClickTag = () => {
    console.log("PULSE TAG");
  }

  render(){
    console.log(this.props.id);
    return (
      <span>
      <Label key={this.props.id} as='a' onClick={this.handleOnClickTag}>
        {this.props.partNumber}
      <Icon name='delete' onClick={this.handleOnClickIcon} />
    </Label><span> </span>
    </span>
    )
  }
}


class PartNumbersField extends Component {
  
  state = {
    //partNumber: this.props.partNumber,
    partNumbersArray: this.props.item.partNumbers,
  }

  /*componentDidUpdate(){
    this.props.changePartNumbers(this.state.partNumbersArray);
  }*/

  componentDidMount(){
    store.dispatch({
      type: 'CHANGE_PARTNUMBER',
      partNumber: '',
    })
    
    
    
  }

  handleChange = (e) => {
    
    

    if (e.key !== 'Enter'){
      console.log(e.target.value);
          
      store.dispatch({
        type: 'CHANGE_PARTNUMBER',
        partNumber: e.target.value.toUpperCase(),
      })
    }
  }

  handleClick = (e) => {
    console.log(e.type);
    if (this.props.partNumber !== ''){
    const newPartNumbersArray = this.state.partNumbersArray.concat(this.props.partNumber);
    this.props.changePartNumbers(newPartNumbersArray);
    this.setState({
      //partNumber: '',
      partNumbersArray: newPartNumbersArray,
    })
    store.dispatch({
      type: 'CHANGE_PARTNUMBER',
      partNumber: '',
    })
    
    } 
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      console.log("Apreto Enter");
      if (this.props.partNumber !== ''){
      const newPartNumbersArray = this.state.partNumbersArray.concat(this.props.partNumber);
      this.props.changePartNumbers(newPartNumbersArray);
      this.setState({
        //partNumber: '',
        partNumbersArray: newPartNumbersArray,
      })
      store.dispatch({
        type: 'CHANGE_PARTNUMBER',
        partNumber: '',
      })
      
    }
    }
  }
  
  
  deletePartNumber = (id) => {
    const newPartNumbersArray = this.state.partNumbersArray.filter((item, index) => index !== id);
    this.props.changePartNumbers(newPartNumbersArray);
    this.setState({
      partNumbersArray: newPartNumbersArray,
    })
    store.dispatch({
      type: 'CHANGE_PARTNUMBER',
      partNumber: '',
    }) 
  }

  onSort = (sortedList) => {
    console.log("ordenando la lista: " + sortedList);
    this.setState({
      partNumbersArray: sortedList.map(item => item.partNumber),
    })
  }

  render(){
    
    

   const list = this.state.partNumbersArray.map((item, index) => 
     {
       return {content: (<PartNumberTag key = {index} partNumber = {item} id = {index} deletePartNumber = {this.deletePartNumber} />), partNumber: item}
      }
    )
   
    
    
    return (
      <div>
        
        <Form.Input onKeyPress={this.handleKeyPress} icon={{ name: 'add', circular: true, link: true, onClick: this.handleClick }} 
        placeholder='Add Part Number...' onChange={this.handleChange} value = {this.props.partNumber} />
        <br />
        <DragSortableList items= {list} onSort={this.onSort} type="horizontal"/>
        
      </div>
    )
  }
}





class ProductForm extends Component {

  state = {
    
    fields: {
      title: this.props.item.title,
      brand: this.props.item.brand,
      partNumbers: this.props.item.partNumbers,
      quantity: this.props.item.quantity,
      price: this.props.item.price,
      bestOffer: this.props.item.bestOffer,
      description: this.props.item.description,
      condition: this.props.item.condition,
      conditionDescription: this.props.item.conditionDescription,
      location: this.props.item.location,
    },

    conditionDescriptionOptions: window.helpers.conditionDescriptionOptions,
    //currentConditionDescription: this.props.item.conditionDescription,
    
    
  }
  
  replaceTitle = (oldBrand, newBrand) => {
    console.log("my Old Brand " + oldBrand);
    console.log("my New Brand " + newBrand);
    const fields = this.state.fields;
    const oldTitle = fields['title'];
    //const re =  '/'+oldBrand+'/gi';
    //const re = /Ford/gi;
    const re = new RegExp(oldBrand, 'gi');
    console.log(re);
    const newTitle = oldTitle.replace(re, newBrand);
    console.log(newTitle);
    fields['title'] = newTitle;
    this.setState({ fields });
  }

  replaceDescription = (oldBrand, newBrand) => {
    console.log("my Old Brand " + oldBrand);
    console.log("my New Brand " + newBrand);
    const fields = this.state.fields;
    const oldDescription = fields['description'];
    //const re =  '/'+oldBrand+'/gi';
    //const re = /Ford/gi;
    const re = new RegExp(oldBrand, 'gi');
    console.log(re);
    const newDescription = oldDescription.replace(re, newBrand);
    fields['description'] = newDescription;
    this.setState({ fields });
  }
  
  changeBrand = (newBrand) => {
      
      
    
      const fields = this.state.fields; 
      
      
           
      /*const test = this.props.brandsList.filter((item) => {
        if (newBrand === item.value){
          return item.id;
        }
      })*/
      
            
      fields['brand'] = newBrand;
      this.setState({ fields });

      
   
  }

  changePartNumbers = (newPartNumbers) => {
    const fields = this.state.fields;
    fields['partNumbers'] = newPartNumbers;
    this.setState({ fields });
  }

  changeLocation = (newLocations) => {
    const fields = this.state.fields;
    fields['location'] = newLocations;
    this.setState({ fields });
  }

  onInputChange = (e) => {
    console.log(e.target.name);
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;  
    this.setState({
        fields,
      })
  }

  onCheckChange = (e, data) => {
    console.log(data);
    const fields = this.state.fields;
    fields[data.name] = data.checked;
    this.setState({ fields })
  }

  handleAddition = (e, {value} ) => {
    this.setState({
      conditionDescriptionOptions: [{ text: value, value }, ...this.state.conditionDescriptionOptions],
    })
  }

  handleChangeConditiondescription = (e, {value} ) =>  {
    
    const fields = this.state.fields;
    fields['conditionDescription'] = value;
    this.setState({ fields })
  }

  /*handleChangeLocation = (e, {value} ) =>  {
    
    const fields = this.state.fields;
    fields['location'] = value;
    this.setState({ fields })
  }*/

  handleChangeCondition = (e, {value} ) =>  {
    
    const fields = this.state.fields;
    fields['condition'] = value;
    
    this.setState({ fields })

  


  }

  dropdownConditiondescription = (condition) => {
    //const fields = this.state.fields;
    if (condition !== '0'){      
      return (
        <div>
        <Form.Dropdown name='conditionDescription' upward multiple search fluid label='Condition Description' placeholder='Condition Description' 
            value={this.state.fields.conditionDescription} allowAdditions
            selection closeOnChange options={this.state.conditionDescriptionOptions} 
            onAddItem={this.handleAddition} onChange={this.handleChangeConditiondescription} 
             />
        {this.state.fields.conditionDescription.map(item => {
          
          return (
            <Label as='a' basic>
          {item}
        </Label>
          )
        
        })}
        
        
        
        </div>
      ) 
    } else {
      //fields['conditionDescription'] = this.props.item.conditionDescription;
      //this.setState({ fields });
      return
    }
  }  

  render(){    
    
    

    const dropdowntest = this.dropdownConditiondescription(this.state.fields.condition);

    return (
      <div>
        <Form >
        
        <Segment>
        
         
        <Image.Group>
        
    
    
        <DroppablePictures picturesList = {this.props.item.pictures} />
        

        
        
        </Image.Group>
        </Segment>
        <Segment>
        <BrandsField brandsList={this.props.brandsList} currentBrand = {this.props.item.brand} 
          changeBrand = {this.changeBrand} replaceTitle = {this.replaceTitle} replaceDescription = {this.replaceDescription}
        />
        </Segment>

        <Segment>
        <Label attached='top left' ><Icon name='tags' /> Part Numbers</Label>
          <Form.Group inline>
            <PartNumbersField 
              item={this.props.item} partNumber = {this.props.partNumber} changePartNumbers = {this.changePartNumbers}
              //partNumberList = {this.props.partNumberList}
            />
          </Form.Group>
        </Segment>
        
        <Form.Group inline>
          
          
          <Form.Input width={16} fluid label='Product Title' required placeholder='Product Title' 
              value={this.state.fields.title}
              onChange={this.onInputChange}
              name='title'
          />
          
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Input  name='quantity' fluid label='Available' type="number" value={this.state.fields.quantity} onChange={this.onInputChange} />
          <Form.Input  name='price' fluid label='Price' type="number" step='0.1' value={this.state.fields.price} onChange={this.onInputChange} />
          <Form.Checkbox name='bestOffer' label='Best Offer' checked={this.state.fields.bestOffer} toggle onChange={this.onCheckChange} />
        </Form.Group>
        
        <Segment>
        <Form.Group inline>
          
          <Form.Input label="Compatibility from EbayID" icon={<Icon name='sync alternate' inverted circular link />} placeholder='EbayID' />
          <Form.Checkbox label='Auto' toggle />
          <Label as='a' color='yellow'>
          <Icon name='warning' size='large' />
            Product without Fitments
          </Label>
          
        </Form.Group>
        </Segment>
        <Form.TextArea name='description' label="Description" value = {this.state.fields.description} onChange={this.onInputChange} />
        <Segment>
        
        <Label attached='top left' ><Icon name='shipping' /> Shipping Information</Label>
          
          <Form.Group inline widths='equal'>
            <Form.Dropdown fluid label='Domestic Shipping' placeholder='Domestic Shipping' 
              defaultValue={this.props.item.domestic} fluid selection options={window.helpers.shippingOptions} />
          
            <Form.Checkbox label='Free Shipping' checked={this.props.item.freeShipping} toggle />
            <Form.Dropdown fluid label='International Shipping' placeholder='International Shipping' defaultValue={this.props.item.international} 
              fluid selection options={window.helpers.internationalShippingOptions} />
          </Form.Group>
        </Segment>

        <Segment>
        
        <Label attached='top left' ><Icon name='balance scale' /> Physical Information</Label>
          
          <Form.Group inline widths='equal'>
            <Form.Input  fluid label='Length' type="number" value={this.props.item.length}/>
            <Form.Input  fluid label='Width' type="number" value={this.props.item.width}/>
            <Form.Input  fluid label='Depth' type="number" value={this.props.item.depth}/>
            
            <Form.Input  fluid label='Weight' type="number" value={this.props.item.weight}/>
            <Form.Dropdown fluid label='Weight Unit' upward placeholder='Weight Unit' defaultValue={this.props.item.weightUnit} 
              fluid selection options={window.helpers.weightUnit} />
            
          </Form.Group>
        </Segment>
        

        <Segment>
            <Label attached='top left' ><Icon name='star' /> Condition</Label>
            
            <Form.Dropdown name='conditions' upward fluid label='Condition' placeholder='Condition' defaultValue={this.state.fields.condition} 
              fluid selection options={window.helpers.conditionOptions} onChange={this.handleChangeCondition} />
             {dropdowntest}
            
        </Segment>

        <Segment>
            <Label attached='top left' ><Icon name='warehouse' /> Locations</Label>
            
            <LocationsField locationsList={this.props.locationsList} currentLocations = {this.props.item.location} 
              changeLocation = {this.changeLocation} item = {this.props.item}
            />
          
        </Segment>

        
          
        
        
        
            
          
        </Form>
      </div>
    )
  }
}




class Product extends Component {
  
  
  
  state = { modalOpen: false, action: 'online'}

  checkStatus = () => {
    if (this.state.action !== this.props.item.status){
      return false;
    } else {
      return true;
    }
  }

  checkButton = (e, data) => {
    this.setState({
      action: data.value,
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  
  handleChecked = onClick => (e,data) => {

    if (data.checked === true){
      store.dispatch({
        type: 'ADD_PRODUCT_SELECTED',
        id: this.props.item.uuid,
        listSelected: this.props.productsSelected,
      })
    } else {
      store.dispatch({
        type: 'DELETE_PRODUCT_SELECTED',
        id: this.props.item.uuid,
        listSelected: this.props.productsSelected,
      })
    }
    
    
  }

  render() {
    
    /*function checkApplyOptions(option, status){
      if (option === )
    }*/

    const options = [
      { key: 'online', icon: 'globe', text: 'Switch to Online', value: 'online' },
      { key: 'offline', icon: 'level down', text: 'Bring to Offline', value: 'offline' },
      { key: 'delete', icon: 'delete', text: 'Delete', value: 'delete' },
    ]

    

    return (
      <Table.Row key={this.props.item.uuid}>
              <Table.Cell collapsing>
                <Checkbox slider 
                  checked={window.helpers.isProductChecked(this.props.productsSelected, this.props.item.uuid)}
                  onClick={this.handleChecked()}> /></Checkbox>
              </Table.Cell>
              
              <Table.Cell>
                {window.helpers.getNameFromId(this.props.usersList, this.props.item.authorId)}              
              </Table.Cell>
              <Table.Cell>
                <Label color={window.helpers.getColorConnection(this.props.item.status)}>{this.props.item.status}</Label>                
              </Table.Cell>
              <Table.Cell>
                <ImagesLightBox size='tiny' key={0} pictures = {this.props.item.pictures} photoIndex = {0} />
                <ImagesLightBox size='tiny' key={1} pictures = {this.props.item.pictures} photoIndex = {this.props.item.pictures.length-1} />
                
                
                
                
                </Table.Cell>
              
              <Table.Cell>
                
                {window.helpers.getConditionFromId(this.props.conditionsList, this.props.item.condition)}
              </Table.Cell>
              <Table.Cell>
              {window.helpers.getBrandFromId(this.props.brandsList, this.props.item.brand )}
              </Table.Cell>
              <Table.Cell>
                <div>{this.props.item.partNumbers[0]}</div><span className='App-secondary-table-title'>{this.props.item.sku}</span>  
              </Table.Cell>



              <Table.Cell>
                {window.helpers.outOfStock(this.props.item.quantity)} 
                <h3>{this.props.item.title}</h3>
                <div>{this.props.item.location.length > 0 ? 
                  this.props.item.location.map((item, index) => {
                    return <Label key={index} color='black'><Icon name='warehouse' />
                     {window.helpers.getBrandFromId(this.props.locationsList, item )}
                    </Label>;
                  }) 
                  : <Label color='teal'><Icon name='warning sign' />Still in the pallet</Label> }
                </div> 
                
              </Table.Cell>
              <Table.Cell>                
                {this.props.item.quantity}
              </Table.Cell>
              <Table.Cell>
                {window.helpers.priceWarning(this.props.item.price)}
                {this.props.item.price}
              </Table.Cell>
              <Table.Cell>{this.props.item.timestamp}</Table.Cell>
              <Table.Cell collapsing>
                
                <Modal
                  //closeIcon
                  //closeOnDimmerClick={false}
                  //closeOnEscape={false}
                  trigger={<Button icon='edit'onClick={this.handleOpen}/>}
                  open={this.state.modalOpen}                  
                  >
                  <Modal.Header>
                    
                        <h1>Products Editor</h1>
                        <h3>{this.props.item.title}</h3>
                    
                  </Modal.Header>
                  <Modal.Content scrolling>
                    <ProductForm key={this.props.item.uuid} id={this.props.item.uuid} 
                      item={this.props.item} locationsList={this.props.locationsList} 
                      brandsList={this.props.brandsList}
                      partNumber = {this.props.partNumber}
                      //partNumberList = {this.props.partNumberList}
                      />
                  </Modal.Content>
                  <Modal.Actions>
                  <Button color='green'>
                      <Icon name='save'/> Save
                    </Button>
                  

                    <Button.Group color='teal'>
                    <Dropdown 
                        defaultValue={this.state.action}
                        options={options} floating button className='icon' onChange={this.checkButton} />
                      <Button disabled={this.checkStatus()}>
                        Apply
                      </Button>
                        
                    </Button.Group>
                    <Button color='red' onClick={this.handleClose}>
                      <Icon name='cancel'/> Cancel
                    </Button>
                    
                    
                    
                  </Modal.Actions>
                </Modal>



                <Button icon='trash' />
              </Table.Cell>              
        </Table.Row>
    )
  }
}


class ProductsSearched extends Component {

  handleClick = () => {
    
    store.dispatch({
      type: 'CHANGE_CHECKED_SEARCH',
      checkedSearch: true,      
    })
  }

  handleSearchChange = (e, value) => {
    
    console.log(e);
    store.dispatch({
      type: 'CHANGE_VALUE_SEARCH',
      valueSearch: e.target.value,
    });
    
  }

  deleteSearchWord = () => {
    store.dispatch({
      type: 'CHANGE_VALUE_SEARCH',
      valueSearch: '',
    });
    store.dispatch({
      type: 'CHANGE_CHECKED_SEARCH',
      checkedSearch: false,      
    })
  }

  render() {   

    if (this.props.checkedSearch === true){
      return (
      <div>
        <Input 
            icon = {{ name: 'delete', link: true, onClick: this.deleteSearchWord}}
            placeholder='Search SKU, Title, MPN...' 
            onChange={this.handleSearchChange}
            value={this.props.valueSearch}
            
            
          />
          <Button icon='search' onClick={this.handleClick} />
      </div>
      )
    } else {
        return (
        <div>
              <Input 
            placeholder='Search SKU, Title, MPN...' 
            onChange={this.handleSearchChange}
            value={this.props.valueSearch}
            
            />
            <Button icon='search' onClick={this.handleClick} />
          
        </div>
        )
    }
    
  }
}

class ActionProductsSelected extends Component {
  
  render(){
    const options = [
      { key: 'online', icon: 'globe', text: 'Switch to Online', value: 'online' },
      { key: 'offline', icon: 'level down', text: 'Bring to Offline', value: 'offline' },
      { key: 'delete', icon: 'delete', text: 'Delete', value: 'delete' },
    ]
    return (
      <Button.Group color='teal'>
      <Dropdown defaultValue='online' disabled = {this.props.productsSelected.length < 1 ? true : false} 
    options={options} floating button className='icon' />
    <Button disabled = {this.props.productsSelected.length < 1 ? true : false}>
      Apply on {this.props.productsSelected.length} selected</Button>
    
  </Button.Group>
    )
  }
}

class SelectAllItems extends Component {
  
  
  
  toggle = (e,data) => {
    console.log(data.checked);
    //this.setState({ checked: !this.state.checked})
  
    if (data.checked === false || this.props.productsListGrouped.length < 1){
      store.dispatch({
        type: 'UNCHECK_ALL',
      })  
    } else {
      store.dispatch({
        type: 'CHECK_ALL',
        productsSelected: this.props.productsListGrouped[this.props.activePage-1].map(item => item.uuid),
      })
    }  
  }
  
  

  render(){
    //console.log("AQUI ESTA LA INFORMACION BUENA: " + this.props.productsListGrouped[this.props.activePage-1].map(item => item.uuid));

    return (
            
      <Table.HeaderCell collapsing>
                <Checkbox toggle 
                  checked={this.props.checkAll}
                  onClick={this.toggle}> /></Checkbox>
      </Table.HeaderCell>
    )
  }
}


class SortableProductList extends Component {
  
  state = {
    columnTemp: null,
    data: this.props.productsListSorted,
    //data: _.sortBy(this.props.productsListSorted, 'brand'),
    //data: this.props.rawList,
    direction: null,
  }

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
    /*store.dispatch({
      type: 'UPDATE_COLUMN',
      columnValue: 'timestamp',
      })*/
  }

  
  handleSort = clickedColumn => () => {    
    
    const { columnTemp, data, direction } = this.state;
    //const column = this.props.column;

    window.client.getListingsFromDB(store, this.state.direction, clickedColumn)

    if (columnTemp !== clickedColumn) {
      
      

      this.setState({
        columnTemp: clickedColumn,
        //data: _.sortBy(data, [clickedColumn]),
        
        data: _.sortBy(data, (item => {
          if (clickedColumn === 'price'){
            return parseFloat(item[clickedColumn]);
          } else {
            return item[clickedColumn];
          }
          
        })),
        
        direction: 'ascending',        
      })     

      store.dispatch({
        type: 'UPDATE_FIELD_DIRECTION',
        fieldValue: clickedColumn,
        directionValue: direction,
      })

      
      

      
      
      
      return
    }
  
    this.setState({
      data: data.reverse(),      
      direction: direction === 'ascending' ? 'descending' : 'ascending',      
    })
    
    store.dispatch({
      type: 'UPDATE_FIELD_DIRECTION',
      fieldValue: clickedColumn,
      directionValue: direction, //=== 'ascending' ? 'descending' : 'ascending',
    })

    store.dispatch({
      type: 'SORT_PRODUCT_LIST',
      listSorted: this.state.data,
    });

    
    
  }
  
  render() {
    const { columnTemp, data, direction } = this.state
    //const column = this.props.column;
    //console.log("ESTA ES LA COLUMNA:" + this.props.column);
    return (
        
        <Table.Header>
            <Table.Row>
              
              <SelectAllItems 
                productsListGrouped = {this.props.productsListGrouped} 
                activePage = {this.props.activePage}
                checkAll = {this.props.checkAll}
              />



              <Table.HeaderCell sorted={columnTemp === 'authorId' ? direction: null}
                onClick={this.handleSort('authorId')}>
                User
              </Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'status' ? direction: null}
                 onClick={this.handleSort('status')}>
                Status
              </Table.HeaderCell>
              <Table.HeaderCell>
                Pictures
              </Table.HeaderCell>
              
              <Table.HeaderCell sorted={columnTemp === 'condition' ? direction: null}
                onClick={this.handleSort('condition')}>
                Condition
              </Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'brand' ? direction: null}
                onClick={this.handleSort('brand')}>
                Brand
              </Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'partNumbers' ? direction: null}
                onClick={this.handleSort('partNumbers')}
              ><div>Part Number</div><span className='App-secondary-table-title'>SKU</span></Table.HeaderCell>
              <Table.HeaderCell
                sorted={columnTemp === 'title' ? direction: null}
                onClick={this.handleSort('title')}
              ><div>Product Name</div><span className='App-secondary-table-title'>Locations</span></Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'quantity' ? direction: null}
                onClick={this.handleSort('quantity')}>
                Available
              </Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'price' ? direction: null}
                onClick={this.handleSort('price')}>
                Price
              </Table.HeaderCell>
              <Table.HeaderCell sorted={columnTemp === 'timestamp' ? direction: null}
                onClick={this.handleSort('timestamp')}>
                Date Created
              </Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          
    )
  }
}



class SelectableProduct extends Component {
  

  render(){
    
    return (
      <Product 
        key = {this.props.item.uuid} 
        item = {this.props.item} 
        conditionsList = {this.props.conditionsList}
        usersList = {this.props.usersList}
        productsSelected = {this.props.productsSelected}
        productsListGrouped = {this.props.productsListGrouped} 
        activePage = {this.props.activePage}
        brandsList = {this.props.brandsList}
        locationsList = {this.props.locationsList}
        partNumber = {this.props.partNumber}
        //partNumberList = {this.props.partNumberList} 
      />
    )
  }
}

class ProductsTableList extends Component {
  
  
  
  render(){
    
        
    if (this.props.productsListGrouped.length > 0){

    return (
      
      this.props.productsListGrouped[Number(this.props.activePage)-1].map((item) =>  
      <SelectableProduct 
        key={item.uuid} item = {item} 
        conditionsList = {this.props.conditionsList}
        usersList = {this.props.usersList}
        productsSelected = {this.props.productsSelected}
        productsListGrouped = {this.props.productsListGrouped} 
        activePage = {this.props.activePage}
        brandsList = {this.props.brandsList}
        locationsList = {this.props.locationsList}
        partNumber = {this.props.partNumber}
        //partNumberList = {this.props.partNumberList} 
      />  
      )
        
    )
    } else {
      return (
        <Table.Row>
              <Table.Cell collapsing>
                
              </Table.Cell>
              
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>
                </Table.Cell>
              
              <Table.Cell>
              </Table.Cell>
              <Table.Cell>



              </Table.Cell>
              <Table.Cell>
              <Message
                    warning
                    header='Sorry, this option has not generated any results!'
                    content='Try again using different parameters'
                />
              </Table.Cell>
                


              <Table.Cell>
              </Table.Cell>
              <Table.Cell>                
              </Table.Cell>
              <Table.Cell>
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
              </Table.Cell>              
        </Table.Row>
      )
    }
  }
}

class ProductsTable extends Component {
  
  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }
    
  render(){
   
   return (
      <div>
        <Table sortable striped  >
          <SortableProductList 
            productsListSorted = {this.props.productsListSorted} 
            productsListGrouped = {this.props.productsListGrouped} 
            activePage = {this.props.activePage}
            checkAll = {this.props.checkAll}
            rawList = {this.props.rawList}
            
          />
          <Table.Body>
            <ProductsTableList 
              productsListGrouped = {this.props.productsListGrouped} 
              productsByPage = {this.props.productsByPage}
              activePage = {this.props.activePage}
              productsSelected = {this.props.productsSelected} 
              conditionsList = {this.props.conditionsList}
              usersList = {this.props.usersList}
              productsListSorted = {this.props.productsListSorted}
              brandsList = {this.props.brandsList}
              locationsList = {this.props.locationsList}
              partNumber = {this.props.partNumber}
              //column = {this.props.column}
              //partNumberList = {this.props.partNumberList}  
            />
          </Table.Body>
        </Table>
        
        
        
        
      </div>
    )
  }
}



class ProductsFilterByUser extends Component {
  
  state = {}

  handleChange = (e, {value }) => {
    store.dispatch(
      {
        type: 'CHANGE_USER_FILTER',
        usersFilterActive: value,
      }
    )
    this.setState({value})
  }

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  render(){
    const { value } = this.state;
    const tempOptionUserList = this.props.usersList.map(item => {
      return {key: item.id, value: item.id, text: item.username}
    });

    const optionUserList = [{key: 'ALL', value: 'ALL', text: "All Users"}, ...tempOptionUserList];

    
    //console.log("My lista de usuarios" + optionUserList[0].text);
    

    return (
      <span>
          Show me products created by{' '}
          <big><Dropdown inline options={optionUserList} defaultValue={optionUserList[0].value} value = {value} onChange={this.handleChange} /></big>     
   
      </span>
    )
  }
}


class ProductsFilterByCondition extends Component {
  state = {value: 'ALL'}

  handleChange = (e, {value }) => {
    store.dispatch(
      {
        type: 'CHANGE_CONDITION_FILTER',
        conditionsFilterActive: value,
      })
    
     this.setState({value})
  }

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  render(){
    return (
      
      <Form floated='left'>
        <Form.Group inline>
          <label>Filter by Condition: </label>
          <Form.Field
            control={Radio}
            label='All'
            value='ALL'
            checked={this.state.value === 'ALL'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='New'
            value='0'
            checked={this.state.value === '0'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='New (Other)'
            value='1'
            checked={this.state.value === '1'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='Used'  
            value='2'
            checked={this.state.value === '2'}
            onChange={this.handleChange}          
          />
        </Form.Group>
      </Form>      
    )
  }
}



class ProductsFilterByStatus extends Component {
  
  state = {value: 'ALL'}

  handleChange = (e, {value }) => {
    store.dispatch(
      {
        type: 'CHANGE_STATUS_FILTER',
        statusFilterActive: value,
      })
    
     this.setState({value})
  }

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  render(){
    return (
      
      <Form floated='left'>
        <Form.Group inline>
          <label>Filter by Status: </label>
          <Form.Field
            control={Radio}
            label='All'
            value='ALL'
            checked={this.state.value === 'ALL'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='Online'
            value='online'
            checked={this.state.value === 'online'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='Offline'
            value='offline'
            checked={this.state.value === 'offline'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='Error'  
            value='error'
            checked={this.state.value === 'error'}
            onChange={this.handleChange}          
          />
        </Form.Group>
      </Form>      
    )
  }
}

class ProductsDashboardFilter extends Component {
  
  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
          
      <Grid  padded columns={3}>
          <Grid.Column size={4} >
            
            <Segment compact><ProductsFilterByUser usersList = {this.props.usersList} /></Segment>
            
          </Grid.Column>
          <Grid.Column size={6}>
          <Segment compact><ProductsFilterByStatus /></Segment>
          </Grid.Column>
          <Grid.Column size={6}>
          <Segment compact><ProductsFilterByCondition /></Segment>
          </Grid.Column>
      </Grid>

      
         
    )
  }
}


class ProductsDashboardPagination extends Component {

  //state = { activePage: this.props.activePage }

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }
  
  handlePaginationChange = (e, { activePage } ) => {
    
    console.log(activePage);
    
    store.dispatch({
      type: 'CHANGE_ACTIVE_PAGE',
      activePage: activePage,
    });

    

  }

  render () {
    console.log("STATE DE ACTIVE PAGE: " + this.props.activePage)
  
    const totalPages = this.props.productsListGrouped.length;
    console.log("TOTAL PAGES: " + totalPages);

    return (
      <div className='App'>
        <Pagination 
          activePage={this.props.activePage}
          onPageChange={this.handlePaginationChange}
          totalPages={totalPages}
          />
      </div>
    )
  }
}

class ProductsDashboard extends Component {
  
  
  render() {
    
    return (
      <div>
        <Grid>
        <Grid.Column width={6}>
        <ActionProductsSelected productsSelected = {this.props.productsSelected} /> 
        </Grid.Column>
        <Grid.Column width={10}>
        <ProductsSearched 
          productsListSorted = {this.props.productsListSorted}
          valueSearch = {this.props.valueSearch} 
          checkedSearch = {this.props.checkedSearch} />
        </Grid.Column>
        </Grid>
        
        <ProductsDashboardFilter 
          productsByPage = {this.props.productsByPage} 
          productsListGrouped = {this.props.productsListGrouped} 
          activePage = {this.props.activePage}
          productsSelected = {this.props.productsSelected}
          conditionsList = {this.props.conditionsList}
          usersList = {this.props.usersList}
          productsListSorted = {this.props.productsListSorted}
        />
        <ProductsTable
          productsByPage = {this.props.productsByPage} 
          productsListGrouped = {this.props.productsListGrouped} 
          activePage = {this.props.activePage}
          productsSelected = {this.props.productsSelected}
          conditionsList = {this.props.conditionsList}
          usersList = {this.props.usersList}
          productsListSorted = {this.props.productsListSorted}
          checkAll = {this.props.checkAll}
          brandsList = {this.props.brandsList}
          locationsList = {this.props.locationsList} 
          partNumber = {this.props.partNumber}
          rawList = {this.props.rawList}
          
          //partNumberList = {this.props.partNumberList}
        />
        
        <ProductsDashboardPagination 
          productsListGrouped = {this.props.productsListGrouped}
          productsByPage = {this.props.productsByPage} 
          activePage = {this.props.activePage}
          productsListSorted = {this.props.productsListSorted}          
        /> 
        
        
      </div>
    )
  }
}


class App extends Component {
  
  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
    this.loadInformationFromServer();
    setInterval(this.loadInformationFromServer, 5000);
    
  }

  loadInformationFromServer = () => {
    const state = store.getState();
    window.client.getListingsFromDB(store, state.globalDirection, state.globalColumn);
    window.client.getLocationsFromDB(store);
    window.client.getBrandsFromDB(store);
  }

  
  
  render() {
    const state = store.getState();
    
    const usersFilterActive = state.usersFilterActive;
    const statusFilterActive = state.statusFilterActive;
    const conditionsFilterActive = state.conditionsFilterActive;
    const valueSearch = state.valueSearch;
    const checkedSearch = state.checkedSearch;

    


    function checkSearchFilter(list, valueSearch){
      if (checkedSearch === true && list.length > 0){
        return list.filter(item => item.title.toLowerCase().includes(valueSearch.toLowerCase()) || 
        item.partNumbers[0].toLowerCase().includes(valueSearch.toLowerCase()) ||
        item.sku.toLowerCase().includes(valueSearch.toLowerCase()))
      } else {
        return list;
      }
    }

    function checkUsersFilterActive(list, usersFilterActive){
      if (usersFilterActive !== 'ALL'){
        return list.filter(item => item.authorId === usersFilterActive)
      } else {
        return list;
      }
    }

    function checkStatusFilterActive(list, statusFilterActive){
      if (statusFilterActive !== 'ALL'){
        return list.filter(item => item.status === statusFilterActive)
      } else {
        return list;
      }
    }

    function checkConditionsFilterActive(list, conditionsFilterActive){
      if (conditionsFilterActive !== 'ALL'){
        return list.filter(item => item.condition === conditionsFilterActive)
      } else {
        return list;
      }
    }

    const rawList = state.rawList;
    const rawLocations = state.rawLocations;
    const rawBrands = state.rawBrands;

    const productsListSorted = state.productsListSorted;
    //const productsListSorted = rawList;
    
    /*
    const productsListFiltered = 
        
        
        checkConditionsFilterActive(checkStatusFilterActive(checkUsersFilterActive(checkSearchFilter(productsListSorted, valueSearch),usersFilterActive),
        statusFilterActive),conditionsFilterActive)*/

        const productsListFiltered = 
        
        
        checkConditionsFilterActive(checkStatusFilterActive(checkUsersFilterActive(checkSearchFilter(productsListSorted, valueSearch),usersFilterActive),
        statusFilterActive),conditionsFilterActive)    

    console.log("PRODUCT FILTERED: " + productsListFiltered); 
    
    
    
    const productsByPage = state.productsByPage;  
    const activePage = state.activePage;
    const productsSelected = state.productsSelected;
    const usersList = state.usersList;
    const conditionsList = state.conditionsList;
    
    //const brandsList = state.brandsList;
    const brandsList = rawBrands;
    
    //const locationsList = state.locationsList;
    const locationsList = rawLocations;
    
    const userActive = state.userActive;
    const partNumber = state.partNumber;
    const locationItem = state.locationItem;
    //const partNumberList = state.partNumberList;

    console.log("EL ARRAY ORDENADO: " + productsListSorted);
    
    const checkAll = state.checkAll;

    const globalDirection = state.globalDirection;
    const globalColumn = state.globalColumn;
    console.log("GLOBAL DIRECTION **************************", globalDirection);
    console.log("GLOBAL COLUMN *****************************", globalColumn);


    console.log("Active Page in App: " + activePage);
    console.log("TODOS MIS LOCATIONS: " + locationsList);
    console.log("MI PARTNUMBER: " + partNumber);

    //window.client.getListingsFromDB();
    //console.log("ESTE ES EL VALOR PRUEBA!!!!!!!!!!!!: " + valorPrueba);
    //getListingsFromDB();
    
    if (rawList.length < 1){
      return (
        
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>
      

      
      );
    } else {
    return (
      <div>
        {console.log(activePage)}
        <ProductsDashboard
          rawList = {rawList}
          rawLocations = {rawLocations}
          rawBrands = {rawBrands} 
          productsListGrouped = {productsListFiltered.chunk(productsByPage)}
          productsByPage = {productsByPage}
          activePage = {activePage}
          productsSelected = {productsSelected}
          conditionsList = {conditionsList}
          usersList = {usersList}          
          productsListSorted = {productsListFiltered}
          usersFilterActive = {usersFilterActive}
          statusFilterActive = {statusFilterActive}
          checkAll = {checkAll}
          brandsList = {brandsList}
          locationsList = {locationsList}
          valueSearch = {valueSearch}
          checkedSearch = {checkedSearch}
          partNumber = {partNumber}
          locationItem = {locationItem}
          

          //rawList = {rawList}
          //partNumberList = {partNumberList}
        />
      </div>
    );}
  }
}

export default App;

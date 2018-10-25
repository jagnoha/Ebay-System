/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import axios from 'axios';

window.client = (function () {


    function getListingsFromDB(store, direction, field){
        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.get('http://localhost:8083/getlistings', config)
        .then(response => {
            
            store.dispatch(
                {
                  type: 'UPDATE_LISTINGS',
                  listingsFromDB: response,
                  direction: direction,
                  field: field,
                  //listSorted: sorted,
                }
              )
        
        
        })
        .catch(error => console.log("error"));       
        
    }
    
    function getLocationsFromDB(store){
        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.get('http://localhost:8083/getlocations', config)
        .then(response => {
            
            store.dispatch(
                {
                  type: 'UPDATE_LOCATIONS',
                  locationsFromDB: response,
                }
              )
        
        
        })
        .catch(error => console.log("error"));       
        
    }

    function getBrandsFromDB(store){
        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios.get('http://localhost:8083/getbrands', config)
        .then(response => {
            
            store.dispatch(
                {
                  type: 'UPDATE_BRANDS',
                  brandsFromDB: response,
                }
              )
        
        
        })
        .catch(error => console.log("error"));       
        
    }

    return {
        getListingsFromDB,
        getLocationsFromDB,
        getBrandsFromDB,
    }

}())
  

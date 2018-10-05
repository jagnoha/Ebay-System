/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

window.helpers = (function () {

    Object.defineProperty(Array.prototype, 'chunk', {
        value: function(chunkSize) {
            var that = this;
            return Array(Math.ceil(that.length/chunkSize)).fill().map(function(_,i){
                return that.slice(i*chunkSize,i*chunkSize+chunkSize);
            });
        }

    })

    function getConditionFromId(list, id){
        return list.filter((item) => item.id === id)[0].type; 
    } 
    
    function getNameFromId(list, id){
        return list.filter((item) => item.id === id)[0].username; 
    }

    function getColorConnection(status){
        if (status === 'online'){
          return 'green';
        } else if (status === 'offline'){
          return 'yellow';
        };
        return 'red';
    } 
      
    const priceWarning = (price) => {
        if (Number(price) <= 0){
          return <Icon color='blue' name='warning sign' />
        }
    }
      
    const outOfStock = (qty) => {
        if (qty < 1){  
          return <Label size='tiny' color='yellow'>Out of Stock</Label>
        }
    }

    return {
        getConditionFromId,
        getNameFromId,
        getColorConnection,
        priceWarning,
        outOfStock,
    }

}())
  
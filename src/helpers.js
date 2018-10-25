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

    /*Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };*/

    function getConditionFromId(list, id){
        return list.filter((item) => item.id === id)[0].type; 
    } 
    
    function getNameFromId(list, id){
        return list.filter((item) => item.id === id)[0].username; 
    }

    function getBrandFromId(list, id){
        return list.filter((item) => item.id === id)[0].value;
    }

    function getLocationFromId(list, id){
        return list.filter((item) => item.id === id)[0].value;
    }

    function getLocationIdFromName(list, name){
        const result = list.filter((item) => item.value === name);
        if (result.length > 0){
            return result[0].id;
        } else {
            return null;
        }
    }

    function getColorConnection(status){
        if (status === 'online'){
          return 'green';
        } else if (status === 'offline'){
          return 'yellow';
        };
        return 'red';
    } 

    function isProductChecked(list, id){
        return (list.filter(item => item === id).length > 0 ? true : false) 
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

    const shippingOptions = [
        {text:'USPS First Class',value: '0'},
        {text:'USPS Priority Mail',value: '1'},
        {text:'UPS Ground',value: '2'},
        {text:'Pallet',value: '3'},
        {text:'Local Pickup',value: '4'},    
    ]

    const internationalShippingOptions = [
        {text:'GSP',value: '0'},
        {text:'No International',value: '1'},
    ]

    const weightUnit = [
        {value:'oz', text: 'oz'},
        {value:'lbs', text: 'lb'},
        {value:'gr', text: 'gr'},
        {value:'Kg', text: 'Kg'},
    ]

    const conditionOptions = [
        {text: 'New', value: '0'},
        {text: 'New (Other)', value: '1'},
        {text: 'Used', value: '2'},
    ]

    const conditionDescriptionOptions = [
        {value:'Box Damage', text: 'Box Damage'},
        {value:'Bag Damage', text: 'Bag Damage'},
        {value:'Open Box', text: 'Open Box'},
        {value:'Out of Box', text: 'Out of Box'},
        {value:'Out of Bag', text: 'Out of Bag'},
        {value:'NOS', text: 'NOS'},
        {value:'Rebuilt / Remanufactured', text: 'Rebuilt / Remanufactured'},
        {value:'Missing Parts', text: 'Missing Parts'},
        {value:'Some Dent', text: 'Some Dent'},
        {value:'Some Scratches', text: 'Some Scratches'},
        {value:'As Pictured', text: 'As Pictured'},
        {value:'Dirty', text: 'Dirty'},
        {value:'Small Cracks', text: 'Small Cracks'},
        {value:'Vintage', text: 'Vintage'},
        {value:'Unknown Condition', text: 'Unknown Condition'},
        {value:'New Take Off', text: 'New Take Off'},
        {value:'New, Open Bag/Box for Taking Pictures', text: 'New, Open Bag/Box for Taking Pictures'},        



       
    ]


    return {
        getConditionFromId,
        getNameFromId,
        getColorConnection,
        priceWarning,
        outOfStock,
        isProductChecked,
        getBrandFromId,
        getLocationFromId,
        shippingOptions,
        internationalShippingOptions,
        weightUnit,
        conditionOptions,
        conditionDescriptionOptions,
        getLocationIdFromName,
    }

}())
  

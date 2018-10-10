import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import './helpers.js';
import { Label, Input, Search, Form, Radio, Pagination, Container, Divider, Segment, Grid, Table, Modal, 
  Dropdown, Image, Item, Checkbox, Button, Icon, Message, Header } from 'semantic-ui-react'
import _ from 'lodash'



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
    value: '170M3'
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
    conditionDescription: 'Bag Damage',
    otherCondition: '',
    price: '0.00',
    bestOffer: false,
    freeShipping: true,
    domestic: 'USPS First Class',
    international: 'GSP',
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
    conditionDescription: '',
    otherCondition: '',
    price: '25.00',
    bestOffer: false,
    freeShipping: true,
    domestic: 'USPS First Class',
    international: 'GSP',
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
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg'
    ],
    location: [],
    quantity: '1',
    condition: '1',
    conditionDescription: 'Open Box',
    otherCondition: '',
    price: '0.00',
    bestOffer: false,
    freeShipping: true,
    domestic: 'USPS First Class',
    international: 'GSP',
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
    domestic: 'USPS First Class',
    international: 'GSP',
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
  productsList: productsServer,
  productsListSorted: productsServer,  
  productsByPage: 3,  
  activePage: 1,
  productsSelected: [],
  conditionsList: conditions,
  brandsList: brands,
  locationsList: locations,
  usersList: users,
  usersFilterActive: 'ALL',
  statusFilterActive: 'ALL',
  conditionsFilterActive: 'ALL',        
  checkAll: false,
  valueSearch: '',
  checkedSearch: false,
  userActive: null,
}

function reducer(state, action) {
  
   if (action.type === 'SORT_PRODUCT_LIST'){
    return {
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
    };

  } else if (action.type === 'ADD_PRODUCT_SELECTED'){
    
    const newProductSelected = action.id;
    
    return {
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
    }

  } else if (action.type === 'DELETE_PRODUCT_SELECTED'){
    const newProductsSelected = action.listSelected.filter(item => item !== action.id);
    return {
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
    }; 
  } else if (action.type === 'CHANGE_ACTIVE_PAGE') { 
    return {
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
    }; 
    
  } else if (action.type === 'CHANGE_USER_FILTER') {
    return {
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
    }

  } else if (action.type === 'CHANGE_STATUS_FILTER') {
    return {
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
    }
  } else if (action.type === 'CHANGE_CONDITION_FILTER') {
    return {
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
    }

  } else if (action.type === 'UNCHECK_ALL'){
    return {    
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
    }
  } else if (action.type === 'CHECK_ALL'){
    
    return {    
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
    }
  } else if (action.type === 'CHANGE_VALUE_SEARCH'){
    
    return {
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
    }
    
  } else if (action.type === 'CHANGE_CHECKED_SEARCH'){
    
    return {    
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
    }

  } else if (action.type === 'CHANGE_ACTIVE_USER'){
    
    return {    
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
    }


  } else {
    return state;
  }
}







const store = createStore(reducer, initialState);



class ProductForm extends Component {

  

  render(){
    
    return (
      <div>
        <Form >
          
        <Form.Group inline>
          <Form.Input width={14} fluid label='Product Title' required placeholder='Product Title' value={this.props.item.title} />
          <Form.Checkbox width={2} fluid label='Auto' toggle />
        </Form.Group>
        <Form.Group inline widths='equal'>
          <Form.Input  fluid label='Available' type="number" value={this.props.item.quantity}/>
          <Form.Input  fluid label='Price' type="number" step='0.1' value={this.props.item.price} />
          <Form.Checkbox fluid label='Best Offer' toggle />
        </Form.Group>
        
        <Segment>
        <Form.Group inline>
          
          <Form.Input label="Compatibility from EbayID" icon={<Icon name='sync alternate' inverted circular link />} placeholder='EbayID' />
          <Form.Checkbox fluid label='Auto' toggle />
          <Label as='a' color='yellow'>
          <Icon name='warning' size='large' />
            Product without Fitments
          </Label>
          
        </Form.Group>
        </Segment>
        <Form.TextArea label="Description" value = {this.props.item.description} />
        <Segment>
        
        <Label attached='top left' ><Icon name='shipping' /> Shipping Information</Label>
          
          <Form.Group inline widths='equal'>
            <Form.Dropdown fluid label='Domestic Shipping' placeholder='Domestic Shipping' defaultValue='1' fluid selection options={[{text:'USPS First Class', value: '1'}]} />
          
            <Form.Checkbox fluid label='Free Shipping' checked={true} toggle />
            <Form.Dropdown fluid label='International Shipping' placeholder='International Shipping' defaultValue='1' fluid selection options={[{text:'GSP', value: '1'}]} />
          </Form.Group>
        </Segment>

        <Segment>
        
        <Label attached='top left' ><Icon name='balance scale' /> Physical Information</Label>
          
          <Form.Group inline widths='equal'>

          </Form.Group>
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
                <Modal trigger={<Image size='tiny' src={this.props.item.pictures[0]} />}>
                  <Modal.Content image>
                    <Image src={this.props.item.pictures[0]} />
                  </Modal.Content>
                </Modal>
                <Modal trigger={<Image size='tiny' src={this.props.item.pictures.slice(-1)} />}> 
                  <Modal.Content image>
                    <Image src={this.props.item.pictures.slice(-1)} />
                  </Modal.Content>
                </Modal>
                </Table.Cell>
              
              <Table.Cell>
                
                {window.helpers.getConditionFromId(this.props.conditionsList, this.props.item.condition)}
              </Table.Cell>
              <Table.Cell>
              {window.helpers.getBrandFromId(this.props.brandsList, this.props.item.brand )}
              </Table.Cell>
              <Table.Cell>
                <div>{this.props.item.partNumbers[0]}</div><span className='App-secondary-table-title'>{this.props.item.uuid}</span>  
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
                     
                        <h4>{this.props.item.status}</h4>
                      

                    
                  </Modal.Header>
                  <Modal.Content scrolling>
                    <ProductForm key={this.props.item.uuid} id={this.props.item.uuid} item={this.props.item} />
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
    column: null,
    data: this.props.productsListSorted,
    direction: null,
  }

  /*componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }*/

  
  handleSort = clickedColumn => () => {    
    
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',        
      })
      
      return
    }
  
    this.setState({
      data: data.reverse(),      
      direction: direction === 'ascending' ? 'descending' : 'ascending',      
    })

    store.dispatch({
      type: 'SORT_PRODUCT_LIST',
      listSorted: this.state.data,
    });
  }
  
  render() {
    const { column, data, direction } = this.state
    return (
        
        <Table.Header>
            <Table.Row>
              
              <SelectAllItems 
                productsListGrouped = {this.props.productsListGrouped} 
                activePage = {this.props.activePage}
                checkAll = {this.props.checkAll}
              />



              <Table.HeaderCell sorted={column === 'authorId' ? direction: null}
                onClick={this.handleSort('authorId')}>
                User
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'status' ? direction: null}
                 onClick={this.handleSort('status')}>
                Status
              </Table.HeaderCell>
              <Table.HeaderCell>
                Pictures
              </Table.HeaderCell>
              
              <Table.HeaderCell sorted={column === 'condition' ? direction: null}
                onClick={this.handleSort('condition')}>
                Condition
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'brand' ? direction: null}
                onClick={this.handleSort('brand')}>
                Brand
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'partNumbers' ? direction: null}
                onClick={this.handleSort('partNumbers')}
              ><div>Part Number</div><span className='App-secondary-table-title'>SKU</span></Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'title' ? direction: null}
                onClick={this.handleSort('title')}
              ><div>Product Name</div><span className='App-secondary-table-title'>Locations</span></Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'quantity' ? direction: null}
                onClick={this.handleSort('quantity')}>
                Available
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'price' ? direction: null}
                onClick={this.handleSort('price')}>
                Price
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'timestamp' ? direction: null}
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
  
    
  render(){
   
   return (
      <div>
        <Table sortable striped  >
          <SortableProductList 
            productsListSorted = {this.props.productsListSorted} 
            productsListGrouped = {this.props.productsListGrouped} 
            activePage = {this.props.activePage}
            checkAll = {this.props.checkAll}
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

  /*componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }*/

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

    const productsListSorted = state.productsListSorted;
    
    const productsListFiltered = 
        
        
        checkConditionsFilterActive(checkStatusFilterActive(checkUsersFilterActive(checkSearchFilter(productsListSorted, valueSearch),usersFilterActive),
        statusFilterActive),conditionsFilterActive)

    console.log("PRODUCT FILTERED: " + productsListFiltered); 
    
    const productsByPage = state.productsByPage;  
    const activePage = state.activePage;
    const productsSelected = state.productsSelected;
    const usersList = state.usersList;
    const conditionsList = state.conditionsList;
    const brandsList = state.brandsList;
    const locationsList = state.locationsList;
    const userActive = state.userActive;
    console.log("EL ARRAY ORDENADO: " + productsListSorted);
    
    const checkAll = state.checkAll;
    
    console.log("Active Page in App: " + activePage);
    
    
    
    return (
      <div>
        {console.log(activePage)}
        <ProductsDashboard 
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
        />
      </div>
    );
  }
}

export default App;

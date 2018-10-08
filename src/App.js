import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import './helpers.js';
import { Label, Form, Radio, Pagination, Container, Divider, Segment, Grid, Table, Modal, 
  Dropdown, Image, Item, Checkbox, Button, Icon, Message } from 'semantic-ui-react'
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
    id: '1',
    username: 'orr',
  },
  {
    id: '2',
    username: 'dekel'
  },
  {
    id: '3',
    username: 'jagnoha'
  },
  {
    id: '4',
    username: 'robert'
  },
  {
    id: '5',
    username: 'jordan'
  }
];

let conditions = [
  {
    id: '1',
    type: 'New'
  },
  {
    id: '2',
    type: 'New (Other)'
  },
  {
    id: '3',
    type: 'Used'
  }
];


let productsServer = [
  {
    uuid: '1',
    timestamp: '2018-07-27T13:07:41-0400',
    authorId: '1',
    sku: 'ABC123',
    title: 'Ford ** 3PCS ** NUT N620481-S2',
    description: 'Ford ** 3PCS ** NUT N620481-S2',
    brand: 'Ford',
    partNumbers: [
      'N620481-S2', 'N620481-AS2'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119713788-244143055.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119713788-244143055.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119775898-89732727.jpg'
    ],
    location: [
      '170M3'
    ],
    quantity: '0',
    condition: '2',
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
    brand: 'Ford',
    partNumbers: [
      'W707612-S300'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119848805490098767.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-05/1527119899679-2118847462.jpg'
    ],
    location: [
      '170M4', '136M5'
    ],
    quantity: '2',
    condition: '1',
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
    brand: 'Mopar',
    partNumbers: [
      '55396984AD'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg'
    ],
    location: [],
    quantity: '1',
    condition: '3',
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
    brand: 'Motorcraft',
    partNumbers: [
      '55396DDSA984AD'
    ],
    pictures: [
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064520510294929285.jpg',
      'http://zeemplex.com/marketplace/docroot/sites/default/files/2018-09/1538064693347-467134214.jpg'
    ],
    location: [],
    quantity: '1',
    condition: '3',
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
  usersList: users,
  usersFilterActive: 'ALL',
  statusFilterActive: 'ALL',
  conditionsFilterActive: 'ALL',        
  checkAll: false,
};

function reducer(state, action) {
  
   if (action.type === 'SORT_PRODUCT_LIST'){
    return {
      productsListSorted: action.listSorted,
      productsSelected: [],
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      activePage: state.activePage,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: false,
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
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
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
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
      checkAll: state.checkAll,
    }; 
  } else if (action.type === 'CHANGE_ACTIVE_PAGE') { 
    return {
      activePage: Number(action.activePage),
      productsListSorted: state.productsListSorted,
      productsByPage: state.productsByPage,
      usersList: state.usersList,
      conditionsList: state.conditionsList,
      productsSelected: [],
      checkAll: false,
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,          
    }; 
    
  } else if (action.type === 'CHANGE_USER_FILTER') {
    return {
        usersFilterActive: action.usersFilterActive,
        activePage: 1,
        productsListSorted: state.productsListSorted,
        productsByPage: state.productsByPage,
        usersList: state.usersList,
        conditionsList: state.conditionsList,
        productsSelected: [],
        checkAll: false,
        statusFilterActive: state.statusFilterActive,
        conditionsFilterActive: state.conditionsFilterActive,
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
        productsSelected: [],
        checkAll: false,
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
        productsSelected: [],
        checkAll: false,
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
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,
  
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
      usersFilterActive: state.usersFilterActive,
      statusFilterActive: state.statusFilterActive,
      conditionsFilterActive: state.conditionsFilterActive,        
    }


  } else {
    return state;
  }
}







const store = createStore(reducer, initialState);








class Product extends Component {
  
  
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
              <Table.Cell>{this.props.item.brand}</Table.Cell>
              <Table.Cell>
                <div>{this.props.item.partNumbers[0]}</div><span className='App-secondary-table-title'>{this.props.item.uuid}</span>  
              </Table.Cell>



              <Table.Cell>
                {window.helpers.outOfStock(this.props.item.quantity)} 
                <h3>{this.props.item.title}</h3>
                <div>{this.props.item.location.length > 0 ? 
                  this.props.item.location.map((item, index) => {
                    return <Label key={index} color='black'><Icon name='warehouse' />{item}</Label>;
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
                <Button icon='edit' />
                <Button icon='trash' />
              </Table.Cell>              
        </Table.Row>
    )
  }
}


class ProductsSearched extends Component {
  render() {
    return (
      <div>
        <h1>Products Searched</h1>
      </div>
    )
  }
}

class ActionProductsSelected extends Component {
  render(){
    const options = [
      { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
      { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
      { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
    ]
    return (
      <Button.Group color='teal'>
    <Button>Save</Button>
    <Dropdown options={options} floating button className='icon' />
  </Button.Group>
    )
  }
}

class SelectAllItems extends Component {
  
  /*state = {
    checked: this.props.checkAll,
  }*/

  
  toggle = (e,data) => {
    console.log(data.checked);
    //this.setState({ checked: !this.state.checked})
  
    if (data.checked === false){
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
  
  /*store.dispatch({
    type: 'UNCHECK_ALL',
    id: 
  });*/

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

class SelectableProductList extends Component {
  render(){
    return (
      <div>
        <h1>Selectable Product List</h1>
      </div>
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
      />
    )
  }
}

class ProductsTableList extends Component {
  
  
  
  render(){
    
    console.log("PPRPREPRE:" + this.props.activePage);
    console.log("PRODUCT GROUPED:" + this.props.productsListGrouped );
    
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

    
    console.log("My lista de usuarios" + optionUserList[0].text);
    

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
            value='1'
            checked={this.state.value === '1'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='New (Other)'
            value='2'
            checked={this.state.value === '2'}
            onChange={this.handleChange}            
          />
          <Form.Field
            control={Radio}
            label='Used'  
            value='3'
            checked={this.state.value === '3'}
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

class ProductsDashboardResultsPerPage extends Component {
  
  render() {
    return (
      <div>
        <h1>Product Dashboard Results Per Page</h1>
      </div>
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
        <ActionProductsSelected /> 
        <ProductsSearched />

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
        />
        
        <ProductsDashboardPagination 
          productsListGrouped = {this.props.productsListGrouped}
          productsByPage = {this.props.productsByPage} 
          activePage = {this.props.activePage}
          productsListSorted = {this.props.productsListSorted}          
        /> 
        
        <ProductsDashboardResultsPerPage />
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
/*
    function checkUsersFilterActive(usersFilterActive){
      if (usersFilterActive !== 'ALL'){
        if (statusFilterActive !== 'ALL'){
          return state.productsListSorted.filter(item => item.authorId === usersFilterActive).filter(item => item.status === statusFilterActive);
        } else {

        }
      
      
      } else {
        return state.productsListSorted;
      }
    }
*/
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

/*
  function checkUsersFilterActive(usersFilterActive){
    if (usersFilterActive !== 'ALL'){
      return state.productsListSorted.filter(item => item.authorId === usersFilterActive)
    } else {
      return state.productsListSorted;
    }
  }
*/

    /*function checkStatusFilterActive(statusFilterActive){
      console.log("status: " + statusFilterActive)
      if (statusFilterActive !== 'ALL'){
        return state.productsListSorted.filter(item => item.status === usersFilterActive);
      } else {
        return state.productsListSorted;
      }
    }*/

    const productsListSorted = state.productsListSorted;
    
    const productsListFiltered = 
      checkConditionsFilterActive(

      checkStatusFilterActive(checkUsersFilterActive(productsListSorted, usersFilterActive), statusFilterActive), conditionsFilterActive)   
    



    console.log("PRODUCT FILTERED: " + productsListFiltered); 
    
    const productsByPage = state.productsByPage;  
    const activePage = state.activePage;
    const productsSelected = state.productsSelected;
    const usersList = state.usersList;
    const conditionsList = state.conditionsList;
    console.log("EL ARRAY ORDENADO: " + productsListSorted);
    //console.log("GROUPADO: " + productsListSorted.chunk(productsByPage));
    //const productsListGrouped = productsListSorted.chunk();
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
          //productsListSorted = {productsListSorted}
          productsListSorted = {productsListFiltered}
          usersFilterActive = {usersFilterActive}
          statusFilterActive = {statusFilterActive}
          checkAll = {checkAll}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label, Container, Divider, Segment, Grid, Table, Modal, 
  Dropdown, Image, Item, Checkbox, Button, Icon } from 'semantic-ui-react'
import _ from 'lodash'




let users = [
  {
    id: '1',
    username: 'orr'
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
    datetime: '2018-07-27T13:07:41-0400',
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
    datetime: '2018-07-25T13:07:41-0400',
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
    datetime: '2018-05-27T13:07:41-0400',
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
  }
];

function getNameFromId(list, id){
  return list.filter((item) => item.id === id)[0].username; 
}

function getConditionFromId(list, id){
  return list.filter((item) => item.id === id)[0].type; 
}  

class Product extends Component{
  state = {
    checked: false,
    mivalue: this.props.mivalue,
  }

  /*
  componentDidUpdate(){
    console.log("Hola");
    this.checkProductChecked();
  }

  checkProductChecked(){
    const existKey = this.props.editableList.filter(item => {
      return item === this.props.uuid
    });
    console.log(existKey.length);
    console.log(this.props.editableList);
    if (existKey.length === 0){
     this.setState({
       checked: false,
     })
    } else {
      this.setState({
        checked: true,
      })
    }
  }*/
  
  shouldComponentUpdate(nextProps, nextState){
    return this.state.mivalue == nextProps.mivalue;
  }

  onCheckProduct = () => {
    
    const newChecked = this.state.checked === false ? true : false;
    
    if (newChecked === true){
      this.props.addEditableProduct(this.props.uuid);
    } else {
      this.props.deleteEditableProduct(this.props.uuid);
    }
   
    this.setState({
      checked: newChecked,
    })
    
  }
  /*
  handleChecked = () => {
    if (this.props.checked === false){
      this.props.deleteEditableProduct;
    } else {
      this.props.addEditableProduct;
    }
  }*/

  render(){
    
    function getColorConnection(status){
      if (status === 'online'){
        return 'green';
      } else if (status === 'error'){
        return 'red';
      } else {
        return 'yellow'
      };
    };
    
    const condition = getConditionFromId(this.props.conditionList, this.props.condition);    
    
    const connectionInfo = (
      <Label color='blue'>{condition}</Label>
    );

    const outOfStock = (qty) => {
      if (qty < 1){  
        return <Label size='tiny' color='yellow'>Out of Stock</Label>
      }
    }
    
    const priceWarning = (price) => {
      if (Number(price) <= 0){
        return <Icon color='blue' name='warning sign' />
      }
    }
    
    const mivalue = 0;
    if (mivalue > 0){


    return (
      <Table.Row key={this.props.uuid}>
              <Table.Cell collapsing>
                <Checkbox slider checked={this.state.checked} onClick={this.onCheckProduct}/>
              </Table.Cell>
              
              <Table.Cell>{getNameFromId(this.props.userList, this.props.username)}</Table.Cell>
          
              <Table.Cell>
                <Modal trigger={<Image size='tiny' src={this.props.firstPicture} />}>
                  <Modal.Content image>
                    <Image src={this.props.firstPicture} />
                  </Modal.Content>
                </Modal>
                <Modal trigger={<Image size='tiny' src={this.props.lastPicture} />}>
                  <Modal.Content image>
                    <Image src={this.props.lastPicture} />
                  </Modal.Content>
                </Modal></Table.Cell>
              <Table.Cell><Label color={getColorConnection(this.props.status)}>{this.props.status}</Label></Table.Cell>
              <Table.Cell>{connectionInfo}</Table.Cell>
              <Table.Cell>{this.props.brand}</Table.Cell>
              <Table.Cell>{this.props.partNumber}</Table.Cell>
              <Table.Cell>
                {outOfStock(this.props.quantity)} 
                <h3>{this.props.title}</h3>
                <strong>SKU:</strong> 
                {this.props.sku}
                <div>{this.props.location.length > 0 ? 
                  this.props.location.map((item, index) => {
                    return <Label key={index} color='black'><Icon name='warehouse' />{item}</Label>;
                  }) 
                  : <Label color='teal'><Icon name='warning sign' />Still in the pallet</Label> }
                </div> 
              
              </Table.Cell>
              <Table.Cell>{this.props.quantity}</Table.Cell>
              <Table.Cell>
                {priceWarning(this.props.price)}
                {this.props.price}</Table.Cell>
              <Table.Cell>{this.props.datetime}</Table.Cell>
              <Table.Cell collapsing>
                <Button icon='edit' />
                <Button icon='trash' />
              </Table.Cell>              
        </Table.Row>
    )
    } else {
      /*this.setState(
        {mivalue: 1}
      )*/
      return (
        <Table.Row key={this.props.uuid}>
              <Table.Cell collapsing>
                <Checkbox slider checked={this.props.checked} onClick={this.onCheckProduct}/>
              </Table.Cell>
              
              <Table.Cell>{getNameFromId(this.props.userList, this.props.username)}</Table.Cell>
          
              <Table.Cell>
                <Modal trigger={<Image size='tiny' src={this.props.firstPicture} />}>
                  <Modal.Content image>
                    <Image src={this.props.firstPicture} />
                  </Modal.Content>
                </Modal>
                <Modal trigger={<Image size='tiny' src={this.props.lastPicture} />}>
                  <Modal.Content image>
                    <Image src={this.props.lastPicture} />
                  </Modal.Content>
                </Modal></Table.Cell>
              <Table.Cell><Label color={getColorConnection(this.props.status)}>{this.props.status}</Label></Table.Cell>
              <Table.Cell>{connectionInfo}</Table.Cell>
              <Table.Cell>{this.props.brand}</Table.Cell>
              <Table.Cell>{this.props.partNumber}</Table.Cell>
              <Table.Cell>
                {outOfStock(this.props.quantity)} 
                <h3>{this.props.title}</h3>
                <strong>SKU:</strong> 
                {this.props.sku}
                <div>{this.props.location.length > 0 ? 
                  this.props.location.map((item, index) => {
                    return <Label key={index} color='black'><Icon name='warehouse' />{item}</Label>;
                  }) 
                  : <Label color='teal'><Icon name='warning sign' />Still in the pallet</Label> }
                </div> 
              
              </Table.Cell>
              <Table.Cell>{this.props.quantity}</Table.Cell>
              <Table.Cell>
                {priceWarning(this.props.price)}
                {this.props.price}</Table.Cell>
              <Table.Cell>{this.props.datetime}</Table.Cell>
              <Table.Cell collapsing>
                <Button icon='edit' />
                <Button icon='trash' />
              </Table.Cell>              
        </Table.Row>
      )

    }
  }
}


class EditableProduct extends Component{
  /*state = {
    checked: this.props.checked,
  }*/

  render(){
    return (
      <Product
          checked={this.props.checked}
          uuid={this.props.uuid}          
          sku={this.props.sku} 
          username={this.props.username}
          firstPicture={this.props.firstPicture}
          lastPicture={this.props.lastPicture}
          status={this.props.status}
          condition={this.props.condition}
          brand={this.props.brand}
          partNumber={this.props.partNumber}
          location={this.props.location}
          title={this.props.title}
          quantity={this.props.quantity}
          price={this.props.price}
          datetime={this.props.datetime}
          userList={this.props.userList}
          editableList={this.props.editableList}
          conditionList = {this.props.conditionList}
          addEditableProduct = {this.props.addEditableProduct}
          deleteEditableProduct={this.props.deleteEditableProduct}
          mivalue={this.props.mivalue}
      />
    )
  }
}

class EditableProductList extends Component {
  render(){
    
    const list = this.props.productList.map((item)=> {
      return (
        <EditableProduct
          key={item.uuid}
          uuid={item.uuid}
          sku={item.sku} 
          username={item.authorId}
          firstPicture={item.pictures[0]}
          lastPicture={item.pictures.slice(-1)}
          status={item.status}
          condition={item.condition}
          brand={item.brand}
          partNumber={item.partNumbers[0]}
          location={item.location}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          datetime={item.datetime}
          userList={this.props.userList}
          conditionList = {this.props.conditionList}
          checked={item.checked}
          addEditableProduct = {this.props.addEditableProduct}
          deleteEditableProduct={this.props.deleteEditableProduct}
          editableList={this.props.editableList}
          mivalue={this.props.mivalue}
        />
      )
    });

    return(
            
      <Table.Body>
        {list}
      </Table.Body>
    )
  }
}

class SelectedProductList extends Component {
    
  
  render(){
    const numberSelected = this.props.editableList.length;

    return (
      <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='11'>
                <Button floated='right' icon labelPosition='left' primary size='small'>
                  <Icon name='add' /> Add Product
                </Button>
                <Button size='small'>Publish Selected</Button>
                <Button size='small'>Unpublish Selected</Button>
                <Button disabled size='small'>
                  Delete Selected
                </Button>
                <Label basic size='large'>{numberSelected} Selected Products</Label>
              </Table.HeaderCell>
            </Table.Row>
      </Table.Footer>
    )
  }
}


class SortableProductList extends Component {
  state = {
    column: null,
    data: this.props.productList,
    editableList: [],
    direction: null,
    mivalue: 1,    
  }
  
  
  /*
  checkedItem = (uuid) => {
    const item = _.find(this.state.data, {'uuid': uuid });
    
    if (item.checked === false){
      this.setState({

      })
    }
    return item.checked === false ? true : false
  }
*/
  /*shouldComponentUpdate(nextProps, nextState) {
    return this.state.editableList != nextState.editableList;
  }*/

  addEditableProduct = (key) => {
    const tempList = this.state.editableList.concat(key);
    this.setState(
      {
        editableList: tempList,
      }
    )
  }

  deleteEditableProduct = (key) => {
    const tempList = this.state.editableList.filter(item => 
      item !== key
    );

    this.setState(
      {
        editableList: tempList,
      }
    )
  }

  handleSort = clickedColumn => () => {    
    this.setState({
      mivalue: 0,
    })
    const { column, data, direction } = this.state
    console.log(this.state.editableList);
    

    if (column !== clickedColumn) {
      //console.log(this.state.editableList);
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
  }
  
  

  render(){
    const { column, data, direction } = this.state
    return (
     <div>
      
      <Table sortable striped definition >
      
        <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell
                sorted={column === 'authorId' ? direction: null}
                onClick={this.handleSort('authorId')} 
              >
                User
              </Table.HeaderCell>
              <Table.HeaderCell>Pictures</Table.HeaderCell>
              <Table.HeaderCell
                 sorted={column === 'status' ? direction: null}
                 onClick={this.handleSort('status')}
              >Connection</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'condition' ? direction: null}
                onClick={this.handleSort('condition')}
              >Condition</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'brand' ? direction: null}
                onClick={this.handleSort('brand')}
              >Brand</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'partNumbers' ? direction: null}
                onClick={this.handleSort('partNumbers')}
              >Part Number</Table.HeaderCell>
              <Table.HeaderCell>Product Info</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'quantity' ? direction: null}
                onClick={this.handleSort('quantity')}
              >Quantity</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'price' ? direction: null}
                onClick={this.handleSort('price')}
              >Price</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'datetime' ? direction: null}
                onClick={this.handleSort('datetime')}
              >Authored on</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <EditableProductList 
            conditionList = {this.props.conditionList} 
            userList = {this.props.userList} 
            productList={this.state.data} 
            addEditableProduct={this.addEditableProduct}
            deleteEditableProduct={this.deleteEditableProduct}
            editableList = {this.state.editableList}
            mivalue = {this.state.mivalue}
            />
          <SelectedProductList editableList = {this.state.editableList} />

      </Table>
     </div>
    )
  }
}

class EditableProductTable extends Component {
  render(){
    return (
      <div>
          {console.log(this.props.productList)}
          <SortableProductList conditionList = {this.props.conditionList} userList = {this.props.userList} productList={this.props.productList}/>       
      </div>
    )
  }
}


class ProductsDashboard extends Component {
  render(){
    return (
      <div>
        <h1>Products</h1>
             
        <EditableProductTable conditionList = {this.props.conditionList} userList = {this.props.userList} productList={this.props.productList} />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <ProductsDashboard conditionList = {conditions} userList = {users} productList = {productsServer}/>
      </div>
    );
  }
}

export default App;

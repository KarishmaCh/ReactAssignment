import { useState } from 'react';
import { Form, Button, ListGroup, } from 'react-bootstrap';
import { GroceryItem } from './types';
import './GroceryList.css';

function App() {
const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
const [inputValue, setInputValue] = useState<string>('');

const handleAddItem = () => {
const newItem: GroceryItem = {
id: Date.now(),
name: inputValue,
};
setGroceryItems([...groceryItems, newItem]);
setInputValue('');
};

const handleRemoveItem = (id: number) => {
const updatedItems = groceryItems.filter((item) => item.id !== id);
setGroceryItems(updatedItems);
};

  return (
    <div >
      
      <Form>
  <Form.Group controlId="formGroceryItem">
    <Form.Control
      type="text"
      placeholder="Enter grocery item"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="grocery-input"
    />
  </Form.Group>
  <Button variant="primary" onClick={handleAddItem} className="add-button">Add Item</Button>
</Form>

<ListGroup>
  {groceryItems.map((item) => (
    <ListGroup.Item key={item.id} className="grocery-item">
      <div className="item-text">{item.name}</div>
      <Button variant="danger" className="delete-button" onClick={() => handleRemoveItem(item.id)}>Delete</Button>
    </ListGroup.Item>
  ))}
</ListGroup>
    </div>
  );
}
export default App;
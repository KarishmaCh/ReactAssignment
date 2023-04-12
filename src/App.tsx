import { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { GroceryItem } from './types';
import './GroceryList.css';

function App() {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [sortedItems, setSortedItems] = useState<GroceryItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form behavior
    if (!inputValue) {
      alert('Error: Input cannot be empty.'); // Display error message if input is empty
    } else if (!/^[a-zA-Z]+$/.test(inputValue)) {
      alert('Error: Input must contain only alphabetic characters.'); // Display error message if input contains non-alphabetic characters
    } else {
      const newItem: GroceryItem = {
        id: Date.now(),
        name: inputValue,
      };
      setGroceryItems([...groceryItems, newItem]);
      setInputValue('');
    }
  };

  const handleRemoveItem = (id: number) => {
    const updatedItems = groceryItems.filter((item) => item.id !== id);
    setGroceryItems(updatedItems);
    setSortedItems(
      updatedItems.sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const handleSortItems = () => {
    setSortedItems([...groceryItems].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div className="centered">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroceryItem">
          <Form.Control
            type="text"
            placeholder="Enter grocery item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="grocery-input"
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="add-button">
          Add Item
        </Button>
        <Button variant="primary" onClick={handleSortItems} className="sort-button">
          Sort Items
        </Button>
      </Form>
      <ListGroup>
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <ListGroup.Item key={item.id} className="grocery-item">
              <div className="item-text">{item.name}</div>
              <Button
                variant="danger"
                className="delete-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          groceryItems.map((item) => (
            <ListGroup.Item key={item.id} className="grocery-item">
              <div className="item-text">{item.name}</div>
              <Button
                variant="danger"
                className="delete-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
}

export default App;

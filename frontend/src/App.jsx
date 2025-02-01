import { useState, useEffect } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Dialog } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  const [items, setItems] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", description: "" });

  // Fetch items from the backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/items/")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  // Handle form submission to add a new item
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, data]); // Add new item to the list
        setDialogOpen(false);
        setNewItem({ name: "", description: "" });
      })
      .catch((error) => console.error("Error creating item:", error));
  };

  return (
    <div className="app-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>

      {/* Show Items */}
      {items.map((item) => (
        <Card key={item.id} className="card-shadow p-4 w-96 bg-white shadow-md mb-2">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
        </Card>
      ))}

      {/* Open Create Item Dialog */}
      <Button
        onClick={() => setDialogOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
      >
        Add Item
      </Button>

      {/* Create Item Dialog */}
      {dialogOpen && (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Create New Item</h2>
          <form onSubmit={handleSubmit}>
            <Label>Name:</Label>
            <Input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              required
              className="w-full mb-2"
            />
            <Label>Description:</Label>
            <Input
              type="text"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="w-full mb-2"
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Create
            </Button>
          </form>
        </Dialog>
      )}
    </div>
  );
}

export default App;

const express = require('express');
const app = express();
app.use(express.json());

const employees = [
    { id: 1, name: 'Tamiselvan', position: 'Software Engineer' },
    { id: 2, name: 'Thilagam', position: 'Project Manager' },
    { id: 3, name: 'Pavithran', position: 'Data Scientist' }
  ];
  
  app.get('/employees', (req, res) => {
    res.json(employees);
  });
  
  const users = [
    { id: 101, name: 'Tamilselvan', email: 'tamil.vollmoon@gmail.com', ContactNo: '8855223344'},
    { id: 102, name: 'Thilagam', email: 'thilagam.vollmoon@gmail.com', ContactNo: '9955223344'},
    { id: 103, name: 'Pavithran', email: 'pavithran.vollmoon@gmail.com', ContactNo: '7755223344'},
    { id: 104, name: 'MonishRajan', email: 'monish.vollmoon@gmail.com', ContactNo: '6655223344'}
  ];
  
  
  app.get('/vollmoonusers', (req, res) => {
    res.json(users);
  });
  

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
});

app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(200).json(newEmployee);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
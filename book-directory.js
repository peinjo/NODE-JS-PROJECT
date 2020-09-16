function myApp() {
let myApp = {
  001: {
    title: 'Lord of the Rings',
    author: 'J.R. Tolkien',
    editions: ['classic', 'revised']
  },
 002: {
    title: 'The Hobbit',
    author: 'J.R. Tolkien',
    editions: ['original', 'revised']
  },
   003: {
    title: 'Children of Hurin',
    author: 'J.R. Tolkien',
    editions: ['classic', 'revised']
  },
   004: {
    title: 'The fall of Gondolin',
    author: 'J.R. Tolkien',
    editions: ['first', 'revised']
  },
 004: {
    title: 'The silmarillion',
    author: 'J.R. Tolkien',
    editions: ['classic', 'second']
  }
};
}
// note: only books by J.R. Tolkien is allowed, i mean he is great

// Create a new Book
app.post('/myApp', (req,res)=>{

});

// Retrieve all Books
app.get('/myApp', (req,res)=>{

});

// Retrieve a single Book with Book Id
app.get('/myApp/:id', (req,res)=>{

});

// Update a book with book Id
app.put('/myApp/:id', (req,res)=>{

});

// Delete a book with book Id
app.delete('/myApp/:id', (req,res)=>{

});

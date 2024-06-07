import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookShelfPage';

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <Router>
            <Container>
                <Button component={Link} to="/bookshelf" variant="contained" color="success" style={{ margin: '20px 0' }}>
                    My Bookshelf
                </Button>
                <Routes>
                    <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
                    <Route path="/" element={<SearchPage addToBookshelf={addToBookshelf} />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;

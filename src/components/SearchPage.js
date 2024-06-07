import React, { useState, useEffect } from 'react';
import { Container, TextField, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const SearchPage = ({ addToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (query.length > 2) {
            fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
                .then(response => response.json())
                .then(data => setBooks(data.docs));
        }
    }, [query]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Search by book name:</Typography>
            <TextField
                variant="outlined"
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {books.map(book => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.key}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Book Title: {book.title}</Typography>
                                <Typography variant="body2">Edition Count: {book.edition_count}</Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => addToBookshelf(book)}
                                >
                                    Add to Bookshelf
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchPage;

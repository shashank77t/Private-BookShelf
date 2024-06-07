import React from 'react';
import { Container, Card, CardContent, Typography, Grid } from '@mui/material';

const BookshelfPage = ({ bookshelf }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>My Bookshelf</Typography>
            <Grid container spacing={2}>
                {bookshelf.map(book => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.key}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Book Title: {book.title}</Typography>
                                <Typography variant="body2">Edition Count: {book.edition_count}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BookshelfPage;

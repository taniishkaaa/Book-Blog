import React, { createContext, useState } from 'react';

export const ReviewContext = createContext();

export const ReviewProvider = (props) => {
    const host = "http://localhost:5000";
    const reviewsInitial = [];

    const [reviews, setReviews] = useState(reviewsInitial);

    const getReview = async () => {
        const response = await fetch(`${host}/api/addreviews/fetchreviews`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const reviewed = await response.json();
        const lowercaseReviews = reviewed.map(review => ({
            ...review,
            title: review.title.toLowerCase(),
            author: review.author.toLowerCase()
        }));
        setReviews(lowercaseReviews);
    };

    const getToken = () => {
        return localStorage.getItem('auth-token');
    };

    // Function to add a review
    const addReview = async (title, author, review) => {
        const token = getToken();
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const response = await fetch(`${host}/api/addreviews/addreview`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': `Bearer ${token}`
                },
                body: JSON.stringify({ title: title.toLowerCase(), author: author.toLowerCase(), review })
            });

            if (!response.ok) {
                throw new Error('Failed to add review');
            }

            const reviewed = await response.json();
            setReviews(reviews.concat(reviewed));
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview, getReview, setReviews }}>
            {props.children}
        </ReviewContext.Provider>
    );
};


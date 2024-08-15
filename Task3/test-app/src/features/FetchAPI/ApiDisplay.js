import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from './fetchApiSlice';

export default function ApiDisplay() {
    const { value, loading, error } = useSelector((state) => state.fetchApi);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {value.map((item) => (
                <ul key={item.id}>
                    {Object.entries(item).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                    ))}
                </ul>
            ))}
        </div>
    );
}

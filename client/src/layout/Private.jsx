import React, { useEffect } from 'react'
import Navbar from '../components/private/Navbar'
import { Outlet } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { config } from '../config'
import { useDispatch } from 'react-redux'
import { setCategories } from '../store/slices/categorySlice'

const Private = () => {
    const { get } = useApi();
    const dispatch = useDispatch();

    const fetchAllCategories = async () => {
        const categories = await get(`/categories/${config.BUSINESS_ID}`);

        dispatch(setCategories(categories));
    }

    useEffect(() => {
        fetchAllCategories();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Private
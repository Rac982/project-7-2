import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BusinessProductItem from "../../components/dashboard/BusinessProductItem";
import ProductModal from "../../components/dashboard/ProductModal";

import SearchInput from "../../components/shared/SearchInput";
import { clearSearchResult } from "../../store/slices/searchSlice";
import { setSortBy, selectSortBy } from "../../store/slices/sortSlice";
import { setCategory } from "../../store/slices/categoryFilterSlice";
import { setCurrentProduct, setProducts, sortBusinessMenuProducts } from "../../store/slices/productSlice";

import { useApi } from "../../hooks/useApi";

function MenuBusiness() {
    // 1. Redux e stato
    const dispatch = useDispatch();
    const sortBy = useSelector(selectSortBy);
    const category = useSelector((state) => state.filters.category);
    const { products: filteredProducts } = useSelector((state) => state.search);
    const { all: products } = useSelector((state) => state.products);
    const user = useSelector((state) => state.auth.user);

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("create");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { get, post, put, del } = useApi();

    const isSearching = filteredProducts.length > 0;

    // 2. Eventi UI
    const handleChange = (e) => {
        dispatch(sortBusinessMenuProducts(e.target.value));
    };

    const handleChangeCategoryFilter = (e) => {
        dispatch(setCategory(e.target.value));
    };

    const openCreateModal = () => {
        setModalType("create");
        setSelectedProduct(null);
        setIsModalOpen(true);
    };

    const openEditModal = (product) => {
        setModalType("edit");
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteProduct = async (product) => {
        if (!window.confirm(`Sei sicuro di voler eliminare "${product.name}"?`)) return;

        try {
            await del(`/products/${product._id}`);
            const catId = typeof product.category === "object" ? product.category._id : product.category;
            fetchProducts(catId);
        } catch (error) {
            console.error("Errore durante l'eliminazione del prodotto:", error);
        }
    };

    const handleDuplicateProduct = async (product) => {
        console.log("Duplica:", product);

        const categoryId = typeof product.category === "object" ? product.category._id : product.category;

        const duplicatedProduct = {
            name: `${product.name} (Copia)`,
            price: product.price,
            category: categoryId,
            description: product.description,
            image: product.image,
        };

        console.log("Invio:", duplicatedProduct);

        try {
            await post("/products", duplicatedProduct);

            // Ricarica prodotti per categoria selezionata
            const currentCat = categories.find((c) => c.name === product.category.name || c._id === product.category);
            fetchProducts(currentCat?._id);

        } catch (error) {
            console.error("Errore duplicazione:", error);
            console.log("Dettaglio errore:", error.response?.data);
        }
    };


    // 3. Submit modale
    const handleModalSubmit = async (productData) => {
        try {
            if (modalType === "create") {
                await post("/products", productData);
            } else if (modalType === "edit" && selectedProduct?._id) {
                await put(`/products/${selectedProduct._id}`, productData);
            }

            // Ricarica correttamente i prodotti per la categoria aggiornata
            const cat = categories.find(c => c._id === productData.category);
            if (cat?._id) fetchProducts(cat._id);


        } catch (error) {
            console.error("Errore salvataggio prodotto:", error);
        } finally {
            setIsModalOpen(false);
        }
    };

    // 4. API fetch prodotti
    /* const fetchProducts = async () => {
        try {
            const products = await get(`/products`);
            dispatch(setProducts(products));
        } catch (error) {
            console.error("Errore nel caricamento dei prodotti:", error);
        } finally {
            setLoading(false);
        }
    }; */
    const fetchProducts = async (categoryId) => {
        if (!categoryId) return;
        try {
            const products = await get(`/products/${categoryId}`);
            dispatch(setProducts(products));
        } catch (error) {
            console.error("Errore nel caricamento dei prodotti:", error);
        } finally {
            setLoading(false);
        }
    };

    // 5. API fetch categorie
    /*  const fetchCategories = async () => {
         try {
             if (!user?._id) {
                 console.warn("ID utente non disponibile per categorie");
                 return;
             }
             const categories = await get(`/categories/${user._id}`);
             setCategories(categories);
         } catch (error) {
             console.error("Errore nel caricamento delle categorie:", error);
         }
     };
  */
    const fetchCategories = async () => {
        try {
            if (!user?._id) return;
            const categories = await get(`/categories/${user._id}`);
            setCategories(categories);

            if (categories.length > 0) {
                const firstCat = categories[0];
                dispatch(setCategory(firstCat._id));
                fetchProducts(firstCat._id);
            }
        } catch (error) {
            console.error("Errore nel caricamento delle categorie:", error);
        }
    };

    // 6. Effect su mount
    useEffect(() => {
        fetchCategories();
    }, []);

    // 7. Effect ricerca
    useEffect(() => {
        if (query.trim() === "") {
            dispatch(clearSearchResult());
        }
    }, [query]);

    // 8. Render
    return (
        <div className="max-w-[972px] w-full px-4 mb-20">
            <div className="flex flex-row w-full justify-between items-center gap-4 mt-12">
                <button
                    type="button"
                    onClick={openCreateModal}
                    className="flex items-center gap-3 bg-white text-primary hover:bg-primary hover:text-white font-semibold transition-all w-auto h-[39px] rounded-full py-2 px-6 shadow-elevation-1 cursor-pointer text-sm"
                >
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                        <path d="M9.72 14.01v-2.73H6.98a.78.78 0 110-1.56h2.74V6.98a.78.78 0 111.56 0v2.74h2.73a.78.78 0 110 1.56h-2.73v2.73a.78.78 0 11-1.56 0Zm7.85-10.58A9.996 9.996 0 0010.5.5C4.98.5.5 4.98.5 10.5S4.98 20.5 10.5 20.5 20.5 16.02 20.5 10.5c0-2.12-.66-4.09-1.93-5.67a.78.78 0 10-1.19 1 8.44 8.44 0 011.6 4.67c0 4.66-3.78 8.44-8.44 8.44S2.06 15.16 2.06 10.5 5.84 2.06 10.5 2.06c2.26 0 4.37.84 6.01 2.37a.78.78 0 001.06-1.11Z" fill="currentColor" />
                    </svg>
                    Aggiungi un nuovo piatto
                </button>

                <ProductModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleModalSubmit}
                    modalType={modalType}
                    initialData={selectedProduct}
                    categories={categories}
                />

                <div className="w-full sm:w-1/3">
                    <SearchInput value={query} onChange={(e) => setQuery(e.target.value)}
                        businessId={user._id}/>
                </div>

                <div>
                    <select
                        value={category}
                        onChange={handleChangeCategoryFilter}
                        className="text-xs border border-gray-300 rounded-lg px-4 py-2"
                    >
                        <option value="">Tutte le categorie</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <select
                        value={sortBy}
                        onChange={handleChange}
                        className="text-xs border border-gray-300 rounded-lg px-4 py-2"
                    >
                        <option value="NAME_ASC">Nome A-Z</option>
                        <option value="NAME_DESC">Nome Z-A</option>
                        <option value="PRICE_ASC">Prezzo crescente</option>
                        <option value="PRICE_DESC">Prezzo decrescente</option>
                    </select>
                </div>
            </div>

            <div className="mt-12">
                {isSearching ? (
                    filteredProducts.map((product) => (
                        <BusinessProductItem
                            key={product._id}
                            product={product}
                            onEdit={(p) => openEditModal(p)}
                            onDuplicate={handleDuplicateProduct}
                            onDelete={handleDeleteProduct}
                        />
                    ))
                ) : !loading ? (
                    (() => {
                        const filteredByCategory = category
                            ? products.filter((p) => {
                                const prodCatId = typeof p.category === "object" ? p.category._id : p.category;
                                return String(prodCatId) === String(category);
                            })
                            : products;

                        return filteredByCategory.length > 0 ? (
                            filteredByCategory.map((product) => (
                                <BusinessProductItem
                                    key={product._id}
                                    product={product}
                                    onEdit={(p) => openEditModal(p)}
                                    onDuplicate={handleDuplicateProduct}
                                    onDelete={handleDeleteProduct}
                                />
                            ))
                        ) : (
                            <div className="text-center flex rounded-3xl bg-white w-full shadow-elevation-1 px-6 py-7 justify-center my-11 text-sm text-muted">
                                Nessun piatto disponibile.
                            </div>
                        );
                    })()
                ) : null}
            </div>
        </div>
    );
};

export default MenuBusiness;
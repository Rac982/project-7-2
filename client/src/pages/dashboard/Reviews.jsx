import { useEffect, useState } from "react";
import ChartReviews from "../../components/shared/ChartReviews";
import ReviewCard from "../../components/shared/ReviewCard";
import Stars from "../../components/shared/Stars";
import { useApi } from "../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../../store/slices/dashboard/reviewsSlice";

const Reviews = () => {
    const dispatch = useDispatch();
    const { all: userReviews } = useSelector((state) => state.reviews);

    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [averageRating, setAverageRating] = useState(0);

    const { get } = useApi();

    const handleRecentFilter = () => {
        setFilter("Più recenti");
        const sorted = [...userReviews].sort((a, b) => {
            return b.createdAt.localeCompare(a.createdAt);
        });
        dispatch(setReviews(sorted))
    };

    const handleWorstFilter = () => {
        setFilter("Peggiori");
        const sorted = [...userReviews].sort((a, b) => a.rating - b.rating);
        dispatch(setReviews(sorted))
    };

    const handleBestFilter = () => {
        setFilter("Migliori");
        const sorted = [...userReviews].sort((a, b) => b.rating - a.rating);
        dispatch(setReviews(sorted))
    };

    const fetchReviews = async () => {
        try {
            const data = await get(`/reviews?page=${page}&limit=${limit}`);

            dispatch(setReviews(data.docs));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, [page, limit]);

    useEffect(() => {
        const average = userReviews.reduce((acc, curr) => acc + curr.rating, 0) / userReviews.length;
        
        setAverageRating(Math.round(average));
    }, [userReviews]);

    return (
        <div className="flex flex-col p-8">
            <div className="flex gap-20 justify-between items-center py-2 text-center h-[300px] ">
                <div className="flex flex-col justify-center items-center w-1/4 h-full">
                    <h1 className="font-bold text-8xl">{averageRating}</h1>
                    <Stars rating={averageRating} />
                    <div>
                        <span>Sulla base di {userReviews.length} recensioni</span>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <ChartReviews />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="gap-5 ">
                    <div className="py-4">
                        <h2>Ordina per</h2>
                    </div>
                    <div className="flex gap-3 pb-4 text-white">
                        <div
                            className={`${filter === "Più recenti"
                                    ? "bg-[#1418a1] text-white"
                                    : "bg-[#dadbf0] text-black"
                                } rounded-full px-3 cursor-pointer`}
                            onClick={handleRecentFilter}
                        >
                            Più recenti
                        </div>
                        <div
                            className={`${filter === "Migliori"
                                    ? "bg-[#1418a1] text-white"
                                    : "bg-[#dadbf0] text-black"
                                } rounded-full px-3 cursor-pointer`}
                            onClick={handleBestFilter}
                        >
                            Migliori
                        </div>
                        <div
                            className={`${filter === "Peggiori"
                                    ? "bg-[#1418a1] text-white"
                                    : "bg-[#dadbf0] text-black"
                                } rounded-full px-3 cursor-pointer`}
                            onClick={handleWorstFilter}
                        >
                            Peggiori
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full">
                    {userReviews.map((review) => (
                        <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

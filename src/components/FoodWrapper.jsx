import FoodCard from "./FoodCard";
import { fetchMeals } from "../http";
import { useFetch } from "../hooks/useFetch";
export default function FoodWrapper() {
    const foodFetch = useFetch(fetchMeals, []);
    const foodData = foodFetch.fetchedData;
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-0 justify-items-stretch w-full max-w-6xl mx-auto bg-transparent">
            {foodData.map((food) => (
                <FoodCard key={food.id} imgSrc={food.image} title={food.name} description={food.description} id={food.id} price={food.price}/>
            ))}
        </div>
    )
}
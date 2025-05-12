import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CategoryTitle = ({ onOpenFilter}) => {
    const navigate = useNavigate();
    const { current: activeCategory } = useSelector((state) => state.categories);
    

  

  return (
    <div className="flex pt-4 pl-4 pb-4 pr-3 items-center bg-white w-[375px] gap-4">
                    <img className="cursor-pointer" src="/images/Component1.svg" alt="arrow" onClick={() => navigate("/private/categories")} />
                    <h1 className="w-full font-semibold text-[18px]">{activeCategory ? activeCategory.name : "Categoria"}</h1>
                    <img src="/images/Slider.jpg" alt="slider" className="cursor-pointer w-[26px] h-[26px]" onClick={onOpenFilter} />
    </div>
  )
}

export default CategoryTitle
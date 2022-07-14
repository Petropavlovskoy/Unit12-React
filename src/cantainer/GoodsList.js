import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';
import Goods from '../components/Goods';


function GoodsList() {

    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                {goods.map(item => <Goods title={item.title} cost={item.cost}
                    image={item.image} articul={item.articul} key={item / articul} />)}
            </div>
        </>
    )
}

export default GoodsList;
// Компонент получает данные из stor
// и вывводит результат
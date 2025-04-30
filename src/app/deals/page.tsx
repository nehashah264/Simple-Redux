"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setDeals } from "../../store/dealsSlice";

const DealsPage = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state: RootState) => state.deals.list);

  useEffect(() => {
    dispatch(
      setDeals([
        { id: "1", title: "Deal One", price: 99 },
        { id: "2", title: "Deal Two", price: 149 },
      ])
    );
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Deals</h1>
      <ul className="space-y-2">
        {deals.map((deal) => (
          <li key={deal.id} className="p-4 bg-gray-100 rounded">
            {deal.title} - ${deal.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealsPage;

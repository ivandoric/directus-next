import {useQuery} from "react-query";
import {getSession} from "../queries/sessions";
import getData from "../queries/getData";
import useStore from '../stores/temp_order';
import {useEffect} from "react";

export default function MiniCart() {
  const { data: session, isSuccess } = useQuery(['session'], async () => await getData(getSession, 'session_by_id', { id: localStorage.getItem('session_id') }));


  const {tempOrder, setInitialTempOrder} = useStore();

  useEffect(() => {
    if (isSuccess && session) {
      setInitialTempOrder(session.temp_order);
    }
  }, [isSuccess]);

  if (!useStore.getState().tempOrder.length) {
    return (
      <section className="max-w-2xl mx-auto pt-8 px-4 lg:max-w-7xl lg:px-8">
        <div>Your cart is empty</div>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto pt-8 px-4 lg:max-w-7xl lg:px-8">
      <table className="table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-2 text-xs text-gray-500">Product name</th>
            <th className="px-6 py-2 text-xs text-gray-500">Size</th>
            <th className="px-6 py-2 text-xs text-gray-500">Color</th>
            <th className="px-6 py-2 text-xs text-gray-500">Qty.</th>
            <th className="px-6 py-2 text-xs text-gray-500">Price</th>
          </tr>
        </thead>
        <tbody>
          {tempOrder.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-2 text-sm text-center text-gray-500">{item.product_name}</td>
              <td className="px-6 py-2 text-sm text-center text-gray-500">{item.size_short_title}</td>
              <td className="px-6 py-2 text-sm text-center text-gray-500">
                <span className="w-4 h-4 rounded-2xl border-white inline-block mt-2" style={{ background: item.color_value }}></span>
              </td>
              <td className="px-6 py-2 text-sm text-center text-gray-500">{item.quantity}</td>
              <td className="px-6 py-2 text-sm text-center text-gray-500">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

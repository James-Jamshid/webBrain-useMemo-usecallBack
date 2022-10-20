// memo ni nimaga ishlatamiz?
//javob parent va child componentlar bolsa 1tasi render bolganda qolhani ham render boladi. agar shunda memoni ishlatsak bittasida memo bilganda boshqasi oz xolida qoladi
//shartlari:1) memo child componentda ochilishi kerak
//2) parent componentda useState buyrugi bolishi kerak
//lekin parentdan childga object jonatsak memo ishlatsak ham rerender bolaveradi ikalasi.
// useMemo ni parentda ishlatib objectimizbi useMemo bilan orab qoysak renderingdagi muammo hal boladi.
//usememo bilan usecallbackni farqi usecallback funcsiya yuboradi va xoxlasak paramentrni qayta yuborishimiz mumkin,
//use memo bolsa togridan togri value qaytaradi

import React, {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Nav from "../Navbar/Nav";

const HomePage = () => {
  const [count, setCount] = useState(0);
  console.log("parent");
  const obj1 = useMemo(() => {
    return { title: "LOGO" };
  }, []);
  const obj2 = useCallback(() => {
    return { title: "LOGO" };
  }, []);

  return (
    <div className="flex w-full h-auto flex-col">
      <Nav obj1={obj1} obj2={obj2} />
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h1> Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default React.memo(HomePage);

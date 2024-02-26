import { useEffect, useState } from "react";
import { DefaultService } from "../../api";

function Main() {
  const [count, setCount] = useState(0);
  const [api, setApi] = useState("");

  useEffect(() => {
    DefaultService.testApi(1234).then((res) => setApi(res));
  });
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>API: {api}</div>
    </>
  );
}

export default Main;

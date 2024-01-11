import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef} from "react";

const myNum: number = 10;

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n<2) return n
  return fib(n-1) + fib(n-2)
}


function App() {

  const [count, setCount] = useState<number>(0);
  const [users] = useState<[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)
  
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("mounting");
    console.log(`Users: ${users}`);

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    console.log(e)
    setCount((prev) => prev + 2);
  }, []);

  const removeTwo = useCallback(()=>{
    setCount((prev) => prev-2)
  }, [])

  const result: number = useMemo<number>(()=> fib(myNum), [myNum])



  return (
    <div className="app">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <button onClick={removeTwo}>Remove</button>
      <h2> Result: {result}</h2>
      <input ref={inputRef} type="text"/>
    </div>
  );
}

export default App;

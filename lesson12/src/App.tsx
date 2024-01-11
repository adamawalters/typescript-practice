import Counter from "./components/Counter";
import Heading from "./components/heading";
import Section from "./components/Section";
import { useState } from "react";
import List from "./components/List";



function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section title={"Section Title"}>this is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      {<List items={["Coffee", "Tacos", "Code"]} render={(item: string)=> <span className="gold">{item}</span>} />}
    </>
  );
}

export default App;



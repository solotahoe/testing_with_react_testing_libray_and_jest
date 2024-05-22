
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe(Counter, ()=>{
  it("count should be initialzed to zero", ()=>{
      const {getByTestId} = render(<Counter initialCount={0}/>)
      const countValue = Number(getByTestId("count").textContent);
      expect(countValue).toEqual(0);
  })

  it("count should should increament by one if the increment button is cliked", ()=>{
    const {getByTestId,getByRole} = render(<Counter initialCount={0}/>)
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
    const incrementBtn = getByRole("button", {name:"Increament"});
    fireEvent.click(incrementBtn)
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
})


it("the decrement button should reduce the count by one per click", ()=>{
  const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)
  const decrementBtn = getByRole("button", {name:"Decrement"})
  const currentValue = Number(getByTestId("count").textContent);
  expect(currentValue).toEqual(0)
  fireEvent.click(decrementBtn)
  const countValue2 = Number(getByTestId('count').textContent)
  expect(countValue2).toEqual(-1)
})

it("the resetsetBtn button should reset the counter to zero click", ()=>{
  const {getByTestId, getByRole} = render(<Counter initialCount={5}/>)
  const resetBtn = getByRole("button", {name:"Restart"})
  fireEvent.click(resetBtn)
  const currentValue = Number(getByTestId("count").textContent);
  expect(currentValue).toEqual(0)
  
})

it("the switch signs button should switch the count from + to -", ()=>{
  const {getByTestId, getByRole} = render(<Counter initialCount={20}/>)
  const switchSigns = getByRole("button", {name:"Switch Signs"})
  fireEvent.click(switchSigns)
  const currentValue = Number(getByTestId("count").textContent);
  expect(currentValue).toEqual(-20)
  
})

})
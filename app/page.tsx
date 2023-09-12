"use client";

import { useState } from "react";

const Home = () => {

  //
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false]);

  const toggleCheckbox = (index: number) => {
    setChecked(checked.map((c, i) => index === i ? !c : c));
  }

  const selectAll = () => {
    setChecked([true, true, true, true]);
  }

  const deselectAll = () => {
    setChecked([false, false, false, false]);
  }

  /* simple function that expects a boolean array and return an array filled with all indices where the received array is true*/
  const getSelectedIndices = (arr: boolean[]): number[] => {
    return arr.map((c, i) => c ? i + 1 : -1).filter((c) => c !== -1);
  }

  return (
    <main>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 pt-24 pb-4 px-12 lg:px-24">
        <div className="flex items-center pl-2 bg-blue border-2 border-blue rounded hover:border-yellow text-white">
          <input id="checkbox-1" type="checkbox" checked={checked[0]} onChange={() => toggleCheckbox(0)} name="checkbox-1" className="accent-yellow w-4 h-4 rounded" />
          <label htmlFor="checkbox-1" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">checkbox 1</label>
        </div>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue rounded hover:border-yellow text-white">
          <input id="checkbox-2" type="checkbox" checked={checked[1]} onChange={() => toggleCheckbox(1)} name="checkbox-2" className="accent-yellow w-4 h-4 rounded" />
          <label htmlFor="checkbox-2" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">checkbox 2</label>
        </div>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue rounded hover:border-yellow text-white">
          <input id="checkbox-3" type="checkbox" checked={checked[2]} onChange={() => toggleCheckbox(2)} name="checkbox-3" className="accent-yellow w-4 h-4 rounded" />
          <label htmlFor="checkbox-3" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">checkbox 3</label>
        </div>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue rounded hover:border-yellow text-white">
          <input id="checkbox-4" type="checkbox" checked={checked[3]} onChange={() => toggleCheckbox(3)} name="checkbox-4" className="accent-yellow w-4 h-4 rounded" />
          <label htmlFor="checkbox-4" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">checkbox 4</label>
        </div>
      </div>
      <div className='bg-yellow h-2 mx-10'>
      </div>
      <div className='grid grid-cols-2 gap-2 px-12 lg:px-24 py-4'>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue text-white rounded hover:border-yellow">
          <button id="select-button" onClick={() => selectAll()} name="select-button" className="w-4 h-4 rounded" />
          <label htmlFor="select-button" className="w-full py-4 ml-2 text-base lg:text-lg">select all</label>
        </div>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue text-white rounded hover:border-yellow">
          <button id="deselect-button" onClick={() => deselectAll()} name="deselect-button" className="w-4 h-4 rounded" />
          <label htmlFor="deselect-button" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">deselect all</label>
        </div>
      </div>
      <div className='border-blue bg-white flex border-2 font-bold text-blue p-4 items-center justify-center mx-10 rounded text-lg lg:text-4xl'>
        <p>currently checked: </p>
        {getSelectedIndices(checked).map((checkBoxIndex, arrayIndex) => <p key={arrayIndex}> {checkBoxIndex} </p>)}
      </div>
    </main>
  )
}
export default Home;
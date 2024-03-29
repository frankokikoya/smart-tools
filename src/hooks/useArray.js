import { useState } from 'react';

export const useArray = (defaultValue = []) => {
  const [array, setArray] = useState(defaultValue);

  function unshift(element) {
    setArray((a) => [element, ...a]);
  }

  function push(element) {
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function map(callback) {
    setArray((a) => a.map(callback));
  }

  function update(index, newElement) {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  }

  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    set: setArray,
    unshift,
    push,
    filter,
    map,
    update,
    remove,
    clear
  };
}

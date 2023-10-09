import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  // function lisa() { // ES5
  //   if (inputiLuger.current.value === "") {
  //     uuendaSonum("Tühja nimetusega toodet ei saa lisada");
  //   } else {
  //     uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
  //   }
  // }

  const lisa = () => { // ES6 arrow function
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega toodet ei saa lisada");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <div>{sonum}</div>
    </div>
  )
}

export default LisaToode
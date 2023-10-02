import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(7);
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Kogus vähendatud!"); // kui tahta mingit muud sõnumit mingil tingimusel, saame kasutada
    // if ja else funktsionaalsust ehk tingimust ja ütleme, et kui tingimus on tõene, siis näita sõnumit
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Kogus suurendatud!");
  }

  return (
    <div>
            {/* järgmine kord paneme 0 ja 1 asemel laikimata pildi ja laigitud pildi */}
      <span>{laigitud === false && 0}</span>
      <span>{laigitud === true && 1}</span>
      {laigitud === false && <button onClick={() => uuendaLaigitud(true)}>Laigituks</button>}
      {laigitud === true && <button onClick={() => uuendaLaigitud(false)}>Mittelaigituks</button>}

      <br /><br />

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={() => nulli()}>Nulli</button>}
      <button onClick={() => vahenda()}>-</button>
      <span>{kogus}</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  )
}

export default Avaleht
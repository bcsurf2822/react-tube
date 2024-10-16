'use client';

const RealFruit = function () {
  return(
    <div className="fruit">
      <p>
         This is named fruit
      </p>
    
    </div>
  )
}

const FruitStand = function () {
  return (
      <div className="stand">
    <p>
          And a named fruitstand
    </p>
  </div>
  )
}

export default function Bannana(){
  return(
    <div>
      Exported as a bannana and imported as an apple
    </div>
  )
}

export {RealFruit, FruitStand}
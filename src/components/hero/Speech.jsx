import { TypeAnimation } from "react-type-animation"

const Speech = () => {
  return (
    <div className='bubbleContainer'>
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000, 
        // Same substring at the start will only be typed out once, initially
        'I can make some bubbles in a bubble.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '\'The Myth of Sisyphus\' is my favorite book.',
        1000
      ]}
      wrapper="span"
      speed={40}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      deletionSpeed={70}
      repeat={Infinity}
    />
        </div>
        <img src="/man.png" alt="" className="bubbleImg" />
    </div>
  )
}

export default Speech
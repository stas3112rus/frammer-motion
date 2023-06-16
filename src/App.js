import './App.css';
import {
  motion
} from 'framer-motion'
import logo from './logo.svg'
import Collapsible from './components/Colapsible';

function App() {
  const pVariants = {
    hidden: {
      x: -1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      
    }
  }

  const listVariants = {
    visible: i => ({
      opacity: 1,
      transition: {
        duration: i * 6
      }
    }),
    hidden: {opacity: 0}
    
  }

  const items = ['Text1', 'Text2', 'Text3'];


  return ( <div className = "App" >
      <motion.img 
        src = {logo}
        className = "App-logo" 
        alt="logo"
        
        animate={{rotate: 360}}
        transition={
          {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "reverse",
            type: 'keyframes',
            ease: 'easeInOut'
          }
        }
        />

        <motion.p 
          initial = { 'hidden' }
          animate = {
            'visible'
          }
          transition={{
            delay: 0.5,
            duration: 3
          }}
          variants = { pVariants }
        >
          Раз два три
        </motion.p>
        
        <motion.div
          whileHover={{
            scale: 5,
            color: "red"
          }}
        >
          Click
        </motion.div>
        <ul style={{width:'100px', margin:"0 auto"}} >
          {
            items.map((el, index) => ( 
            <motion.li
              initial="hidden"
              animate="visible"
              variants = {
                  listVariants                
              }
              custom = {index}
              key={index}> 
              {el} 
            </motion.li> ))
          }
        </ul>
        
        <Collapsible title={"toggle content"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ea soluta quas provident, facere suscipit eveniet eius veritatis, dicta a rerum ipsum necessitatibus nihil ad cupiditate quidem consectetur quod exercitationem.
        </Collapsible>
    </div>
  );
}

export default App;
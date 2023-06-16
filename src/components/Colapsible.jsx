import {
  motion,
  AnimatePresence
} from 'framer-motion'
import { useState } from 'react';

const Collapsible = (props) => {
	const {
		title = 'click me',
		children
	} = props; 

	const [isVisible, setVisible] = useState(true);

	const handleVisibility = () => setVisible(current => !current);

	return (
	<div style={{margin: "0 auto"}}>
		<div
			onClick = {handleVisibility}
			style = {{
				background: "#ddd",
				width: "300px",
				padding: "0.8rem 1.2rem",
				margin: "15px auto"
			}}
		>
			{title}
		</div>
		<AnimatePresence initial={false}>
			{
				isVisible && <motion.div
						initial={{height: 0, opacity: 0}}
						animate={{height: 'auto', opacity: 1} }
						exit = {{height: 0, opacity: 0}}
						style={{overflow: 'hidden'}}
						
					>
					<div style={{padding: "0.8rem 1.2rem", width: "300px", margin: "15px auto", border: '1px solid #ddd'}}>
						{children}
					</div>
				</motion.div>
			}
		</AnimatePresence>
	</div>)
}

export default Collapsible
import { ScrollText } from 'lucide-react';
import { Icon } from 'lucide-react';
import { burger } from '@lucide/lab';
function App() {
  return (
    <>
      Hello Hello 
      <ScrollText color='red' size={100} strokeWidth={1}/>
      <Icon iconNode={burger}/>
    </>
  )
}

export default App

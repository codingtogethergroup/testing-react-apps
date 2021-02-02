// http://localhost:3000/easy-button
// NOTE: this component wont work by itself, so we have the example :)

import * as React from 'react'
import {useTheme} from './theme'

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
}

function EasyButton(props) {
  const [theme] = useTheme()
  const handleClick = () => window.alert('clicked easy button')
  return <button style={styles[theme]} {...props} onClick={handleClick} />
}

export default EasyButton

import PropTypes from 'prop-types'
import Buttons from './Buttons'
const header = ({title}) => {
    const onClick=()=>{
        console.log('click')
    }
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Buttons color='' text='Add' onClick={onClick}/>
            </header>
        </div>
    )
}

header.defaultProps={
    title:'this is a default msg',
  }

header.prototype={
    titlet:PropTypes.string.isRequired,
}

export default header

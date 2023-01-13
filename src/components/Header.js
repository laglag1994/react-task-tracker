import PropTypes from 'prop-types'
import Buttons from './Buttons'



const header = ({title, onAdd, showAdd}) => {

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Buttons color={showAdd ? 'red' : 'green' } 
                text={showAdd ? 'Close': 'Add'}
                onClick={onAdd}/>
            </header>
        </div>
    )
}

header.defaultProps={
    title:'task tracker',
  }

header.prototype={
    titlet:PropTypes.string.isRequired,
}

export default header

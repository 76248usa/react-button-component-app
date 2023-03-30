import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

const Button = ({
children,
warning,
success,
outline,
rounded,
danger,
primary,
secondary,
...rest
}) =>  {  
    
    const classes = className('flex items-center px-3 py-1.5 border mb-5', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'bg-white border-green-500 text-green': outline
    })   
       return <button className={classes} {...rest} >
    {children}
  </button>
    } 
    
/*Button.propTypes = {
    checkVariationValue: ({warning,success,outline,rounded,danger, primary,secondary}) => {
        const count = Number(!!primary)+ Number(!!secondary)+ Number(!!warning)
        + Number(!!success)+ Number(!!danger) + Number(!!outline)+ Number(!!rounded)

        if(count > 1){
            return new Error('Only one can be true')
        }        
    }
}*/

export default Button
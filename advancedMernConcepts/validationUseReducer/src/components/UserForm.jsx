import React, {useReducer} from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
    submitted : false,
}

const reducer = (state, action) => {
    const newState = {...state,
        submitted : false}
    switch (action.type) {
        // SET ERRORS
        case 'SET-FIRSTNAME-ERROR' : 
            console.log(action.payload)
            return {
                ...newState,
                firstName : {
                    ...newState.firstName,
                    error : action.payload
                }
            }
        case 'SET-LASTNAME-ERROR' : 
            console.log(action.payload)
            return {
                ...newState,
                lastName : {
                    ...newState.lastName,
                    error : action.payload
                }
            }
        case 'SET-EMAIL-ERROR' : 
            console.log(action.payload)
            return {
                ...newState,
                email : {
                    ...newState.email,
                    error : action.payload
                }
            }
        // SET VALUES
        case 'SET-FIRSTNAME' : 
            console.log(action.payload)
            return {
                ...newState,
                firstName : {
                    ...newState.firstName,
                    value : action.payload,
                    error : null
                }
            }
        case 'SET-LASTNAME' : 
            console.log(action.payload)
            return {
                ...newState,
                lastName : {
                    ...newState.lastName,
                    value : action.payload,
                    error : null
                }
            }
        case 'SET-EMAIL' : 
            console.log(action.payload)
            return {
                ...newState,
                email : {
                    ...newState.email,
                    value : action.payload,
                    error: null
                }
            }
        // SET SUBMITTED
        case 'SET-SUBMITTED' :
            console.log(action.payload)
            return {
                ...newState,
                submitted :  action.payload
                }
            default: 
                return state
        }
    }

    
    const UserForm = () => {
        const [state, dispatch] = useReducer(reducer, initialState)
        
        const isSubmitDisabled = () => {
            const { firstName, lastName, email } = state;
            return (
                firstName.error ||
                lastName.error ||
                email.error ||
                firstName.value.length < 1 ||
                lastName.value.length < 1 ||
                email.value.length < 1
                );
            };

    const handleChange = (e) => {
        const {name, value} = e.target
        switch(name){
            // First Name
            case 'firstName' :
                if(value.length > 5){
                    dispatch({type: 'SET-FIRSTNAME', payload: value})
                } else {
                    dispatch({type: 'SET-FIRSTNAME-ERROR', payload: "First name must be more than 5 characters"})
                } break;
            // Last Name
            case 'lastName' :
                if(value.length > 5){
                    dispatch({type: 'SET-LASTNAME', payload: value})
                } else {
                    dispatch({type: 'SET-LASTNAME-ERROR', payload: "Last name must be more than 5 characters"})
                } break;
            // Email
            case 'email' :
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                    dispatch({type: 'SET-EMAIL', payload: value})
                }else {
                    dispatch({type: 'SET-EMAIL-ERROR', payload: "Please enter a valid email"})
                } break;
            default : break;
        }
    }

        
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type: 'SET-SUBMITTED', payload : true})
    }
        
        
  return (
    <div>
        {state.submitted && (
            <div>
                <p>{state.firstName.value}</p>
                <p>{state.lastName.value}</p>
                <p>{state.email.value}</p>
            </div>
        )}
        <form onSubmit={(e) => submitHandler(e)}>
            <div>
                <label htmlFor="firstName">firstName</label>
                <input type="text" name='firstName' onChange={(e) => handleChange(e)}/>
                {state.firstName.error && state.firstName.error}
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' onChange={(e) => handleChange(e)}/>
                {state.lastName.error && state.lastName.error}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' onChange={(e) => handleChange(e)}/>
                {state.email.error && state.email.error}
            </div>
            <button type="submit" disabled={ isSubmitDisabled() }>Submit</button>
        </form>
    </div>
  )
}

export default UserForm
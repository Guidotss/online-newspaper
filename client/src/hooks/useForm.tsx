import { useState, useEffect, useMemo } from 'react'; 

export const useForm = (initialState={}, formValidations={}) => {
    const [ formState, setFormState ] = useState(initialState);
    const [ validations, setValidations ] = useState(formValidations);


    const isFormValid = useMemo(() => {
        for(const formValue of Object.values(validations)){
            if(formValue !== null){
                return false;
            }
        }

        return true;

    },[formValidations]); 



    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        }); 
    }


    const reset = () => {
        setFormState(initialState);
    }



    const createValidators = () =>{
        const formCheckedValues = {};

        for(const formValue of Object.keys(formState)){
            const [ fn, errorMessage ] = formValidations[formValue];

            formCheckedValues[`${formValue}Valid`] = fn(formState[formValue]) ? null : errorMessage;
        }

        setValidations(formCheckedValues);
    }



    return {
        ...formState,
        formState,
        ...validations,
        onInputChange,
        reset,
    }
}
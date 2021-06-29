import React from 'react'
import { Select } from 'formik-semantic-ui-react'
import { useField } from 'formik'
import { FormField/* , Label */ } from 'semantic-ui-react'

export default function BlncDropdown({ ...props }) {

    const [field/* , meta */] = useField(props)

    return (
        <FormField /* error={meta.touched && !!meta.error} */>
            <Select
                {...field}
                {...props}
                selectOnBlur={false}
                clearable
            />
            {/* {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ) : null} */}
        </FormField>
    )
}

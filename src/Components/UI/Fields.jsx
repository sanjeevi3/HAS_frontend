const { default: objectToArray } = require("../../helpers/objectToArray");
const { default: Field } = require("./Field");

const Fields=props=>{
   const fields=objectToArray(props.fields);
    return(
        <>
        {
        fields.map(field=>{
            return <Field key={field.key} field={field} />;
        })
    }
        </>
    )
}

export default Fields;
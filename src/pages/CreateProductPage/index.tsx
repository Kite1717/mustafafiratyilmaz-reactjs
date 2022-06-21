import { Formik } from "formik";
import React from "react";
import SelectInput from "../../components/SelectInput";
import TextAreaInput from "../../components/TextAreaInput";
import TextInput from "../../components/TextInput";

const CreateProductPage = (): JSX.Element => {
  return (
    <div>
      <h2 className="mt-8 text-center font-semibold xl:text-4xl md:text-2xl">Create Product</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <form className="px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center">
            <div className="mb-4">
              <TextInput
                placeholder="Product Name"
                inputClassNames={[]}
                containerClassNames={["w-96","min-w-96"]}
                id="search"
                name="search"
              />
              <p className="mt-1 text-red-500 text-xs italic">
                Please enter the product name.
              </p>
            </div>
            <div className="mb-4">
              <TextAreaInput
                placeholder="Description"
                inputClassNames={[]}
                containerClassNames={["w-96","max-w-96"]}
                id="search"
                name="search"
              />
              <p className="mt-1 text-red-500 text-xs italic">
                Please enter the product description.
              </p>
            </div>

            <div className="mb-4">
              <TextInput
                placeholder="Image URL"
                inputClassNames={[]}
                containerClassNames={["w-96","max-w-96"]}
                id="search"
                name="search"
              />
              <p className="mt-1 text-red-500 text-xs italic">
                Please enter the image url of product.
              </p>
            </div>
            <div className="mb-4">
              <SelectInput
                options={[]}
                placeholder="Categories"
                inputClassNames={[]}
                containerClassNames={["w-96","max-w-96"]}
                id="category"
                name="category"
                onChange={(e?: React.ChangeEvent<HTMLSelectElement>) => false}
                currentValue={"string"}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                Please select the category of product.
              </p>
            </div>

            <div className="mb-4">
              <TextInput
                placeholder="Product Price"
                inputClassNames={[]}
                containerClassNames={["w-96","max-w-96"]}
                id="search"
                name="search"
                type="number"
              />
              <p className="mt-1 text-red-500 text-xs italic">
                Please enter the product price.
              </p>
            </div>

            <div className="mb-4">
              <button
                className="w-96 max-w-96 uppercase text-black bg-white hover:opacity-80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProductPage;

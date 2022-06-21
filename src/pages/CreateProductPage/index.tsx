import { Formik } from "formik";
import React, { useEffect } from "react";
import SelectInput from "../../components/SelectInput";
import TextAreaInput from "../../components/TextAreaInput";
import TextInput from "../../components/TextInput";
import { CategoryModel } from "../../models/CategoryModel";
import { NewProductModel } from "../../models/ProductModel";
import {
  fecthCategoriesAsync,
  selectCategories,
} from "../../redux/category/categorySlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createProductAsync } from "../../redux/product/productSlice";

const CreateProductPage = (): JSX.Element => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fecthCategoriesAsync());
    }
  }, [categories, dispatch]);
  return (
    <div>
      <h2 className="mt-8 text-center font-semibold xl:text-4xl md:text-2xl">
        Create Product
      </h2>
      <Formik
        initialValues={
          {
            name: "",
            avatar: "",
            developerEmail: "mustafa.firat.yilmaz@protonmail.com",
            price: "",
            description: "",
            category: "",
          } as unknown as NewProductModel
        }
        validate={(values) => {
          const errors = {} as NewProductModel;

          if (!values.name) {
            errors.name = "Please enter the product name.";
          }

          if (!values.avatar) {
            errors.avatar = "Please enter the image url of product.";
          }

          if (!values.price) {
            errors.price = "Please enter the product price.";
          }

          if (Number.isNaN(Number(values.price)) || Number(values.price) <= 0) {
            errors.price = "Please enter the valid product price.";
          }

          if (!values.description) {
            errors.description = "Please enter the product description.";
          }
          if (!values.category || values.category === "all") {
            errors.category = "Please select the category of product";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          setSubmitting(true);
          const selectedCategory: CategoryModel | undefined = categories.find(
            (cat: CategoryModel) => cat.id === values.category
          );
          if (selectedCategory) {
            values.category = selectedCategory?.name;
          }

          dispatch(createProductAsync(values as NewProductModel));
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          isSubmitting,
          errors,
          touched,
          values,
          handleSubmit,
          setFieldValue,
          handleBlur,
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className="px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center"
          >
            <div className="mb-4">
              <TextInput
                placeholder="Product Name"
                inputClassNames={[]}
                containerClassNames={["w-96", "min-w-96"]}
                id="name"
                name="name"
                onChange={(
                  e?:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                ): void => {
                  setFieldValue("name", e?.target?.value);
                }}
                onBlur={handleBlur}
                currentValue={values.name}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <div className="mb-4">
              <TextAreaInput
                placeholder="Description"
                inputClassNames={[]}
                containerClassNames={["w-96", "max-w-96"]}
                id="description"
                name="description"
                onChange={(
                  e?:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                ): void => {
                  setFieldValue("description", e?.target?.value);
                }}
                onBlur={handleBlur}
                currentValue={values.description}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                {errors.description &&
                  touched.description &&
                  errors.description}
              </p>
            </div>

            <div className="mb-4">
              <TextInput
                placeholder="Image URL"
                inputClassNames={[]}
                containerClassNames={["w-96", "max-w-96"]}
                id="avatar"
                name="avatar"
                onChange={(
                  e?:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                ): void => {
                  setFieldValue("avatar", e?.target?.value);
                }}
                onBlur={handleBlur}
                currentValue={values.avatar}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                {errors.avatar && touched.avatar && errors.avatar}
              </p>
            </div>
            <div className="mb-4">
              <SelectInput
                options={categories}
                placeholder="Categories"
                inputClassNames={[]}
                containerClassNames={["w-96", "max-w-96"]}
                id="category"
                name="category"
                onChange={(e?: React.ChangeEvent<HTMLSelectElement>) =>
                  setFieldValue("category", e?.target?.value || "")
                }
                onBlur={handleBlur}
                currentValue={values.category}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                {errors.category && touched.category && errors.category}
              </p>
            </div>

            <div className="mb-4">
              <TextInput
                placeholder="Product Price"
                inputClassNames={[]}
                containerClassNames={["w-96", "max-w-96"]}
                id="price"
                name="price"
                type="number"
                onChange={(
                  e?:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                ): void => {
                  setFieldValue("price", e?.target?.value);
                }}
                onBlur={handleBlur}
                currentValue={values.price + ""}
              />
              <p className="mt-1 text-red-500 text-xs italic">
                {errors.price && touched.price && errors.price}
              </p>
            </div>

            <div className="mb-4">
              <button
                className="w-96 max-w-96 uppercase text-black bg-white hover:opacity-80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isSubmitting}
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

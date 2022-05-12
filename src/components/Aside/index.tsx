import React, { useState } from "react";

import I18n, { Translator } from "../i18n";

import { Container } from "./styles";

// Formik
import { Formik, Form, Field } from "formik";

// Service
import { postCalculateDistance } from "./service";

import { useDashContext } from "../../context/dashboard-context";

const Aside: React.FC = () => {
  const [countAddress, setCountAddress] = useState(2);
  const placeholder = Translator("Aside.Placeholder");

  // Request value
  const { setResultRequest } = useDashContext();

  return (
    <Container>
      <div className="content-div">
        <h1 className="title-h1">{Translator("Aside.Title")}</h1>
        <h3 className="description-h2">{Translator("Aside.Description")}</h3>
        <p className="address-p">{Translator("Aside.Address")}</p>
        <p>sdsd</p>
        <Formik
          initialValues={{
            addressArray: [],
          }}
          onSubmit={(value) => {
            const sendData = async () => {
              let ret = await postCalculateDistance(value);
              setResultRequest(ret);
            };

            sendData();
          }}
        >
          {({ errors, isSubmitting, touched }) => (
            <Form>
              {[...Array(countAddress)].map((element, index) => (
                <Field
                  name={`AddressArray.${index}.address`}
                  className="address-input"
                  data-testid="input-aside"
                  key={index}
                  placeholder={placeholder}
                />
              ))}
              <button
                className="more-button"
                type="button"
                data-testid="button-aside"
                onClick={() => {
                  if (countAddress >= 10) {
                    return;
                  }
                  setCountAddress(countAddress + 1);
                }}
              >
                More
              </button>
              <button
                type="submit"
                data-testid="submit-aside"
                className="submit-button"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <I18n />
    </Container>
  );
};

export default Aside;

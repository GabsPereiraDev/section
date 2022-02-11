import { Formik, Form, Field } from "formik";
import { Container } from "./styled";

export function EditAddress() {
    return (
        <Container>
            <h3>Endereço de Cobrança</h3>

            <Formik
                initialValues={{
                    address: "",
                    identifier: "",
                    state: "",
                    city: "",
                    district: "",
                    complement: "",
                }}
                onSubmit={async (values) => {
                    try {


                        if (values.identifier != "") {
                            const addressProps = {

                                address: values.address,
                                identifier: values.identifier,

                                state_province: values.state,
                                city: values.city,
                                district: values.district,
                                complement: values.complement,
                            };





                        }


                    } catch (error) {

                    }
                }}
            >
                <Form>




                    <section>
                        <label htmlFor="">Nome *</label>
                        <Field name="name"  required/>
                    </section>
                    <section>
                        <label htmlFor="">Sobrenome *</label>
                        <Field name="lastName" required />
                    </section>
                    <section>
                        <label htmlFor="">Nome Da Compania</label>
                        <Field name="company"  />
                    </section>
                    <section>
                        <label htmlFor="">Cidade *</label>
                        <Field name="city" required/>
                    </section>
                    <section>
                        <label htmlFor="">Endereço *</label>
                        <Field name="address" required/>
                    </section>

                    <section>
                        <label htmlFor="">Estato *</label>
                        <Field name="state" required/>
                    </section>

                    <section>
                        <label htmlFor="">CEP *</label>
                        <Field name="zipCode" required/>
                    </section>

                    <section>
                        <label htmlFor="">Email *</label>
                        <Field name="email" required/>
                    </section>

                    <button type="submit">Adicionar Endereço</button>
                </Form>
            </Formik>
        </Container>
    )
}
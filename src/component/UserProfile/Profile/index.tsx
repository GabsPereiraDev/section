import { Formik, Form, Field } from "formik";
import { Container } from "./styled";

export function Profile() {
    return (
        <Container>
            <h3>Informações Da Conta</h3>

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

                    <Field name="username" placeholder="Username ou Email"/>

                    <section>
                        <Field name="name" Placeholder="First Name"/>
                        <Field name="lastName"  placeholder="Last Name"/>
                    </section>

                    <section>
                        <Field name="phone_number" placeholder="Phone Number"/>
                        <Field  name="email" placeholder="Email Address"/>
                    </section>

                    <Field name="address" placeholder="Address" />

                    <section>
                        <Field  name="city" placeholder="City"/>
                        <Field  name="country" placeholder="Country"/>
                    </section>

                    <button type="submit">Atualizar perfil</button>
                </Form>
            </Formik>
        </Container>
    )
}
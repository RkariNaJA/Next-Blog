import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function ContactPage(params) {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!"></meta>
      </Head>
      <ContactForm />
    </Fragment>
  );
}

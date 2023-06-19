import React, { useEffect, useState } from "react";
import Link from "next/link";

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return { props: { faq } };
}

export default function FAQ({ faq }) {
  return (
    <>
      <h1>FAQ</h1>
      <Link href="/">Voltar</Link>
      <ul>
        {faq.map(({ answer, question }, index) => (
          <>
            <h2>{question}</h2>
            <li key={question}>{answer}</li>
          </>
        ))}
      </ul>
    </>
  );
}

import Head from "next/head";

export default function ThanksPage() {
  return (
    <>
      <Head>
        <title>Thank You | TechnoCore</title>
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Thank you!</h1>
        <p className="text-lg text-gray-300 max-w-md">
          Your message has been successfully sent. We’ll get back to you as soon as possible.
        </p>
        <a href="/" className="mt-6 text-green-400 hover:underline">← Back to Home</a>
      </main>
    </>
  );
}

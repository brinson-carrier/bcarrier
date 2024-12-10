import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <section id="about" className="my-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Write a brief introduction about yourself here.</p>
        </section>
        <section id="resume" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p>Add a link to your resume or display it here.</p>
        </section>
        <section id="skills" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
          <p>List your skills and tools.</p>
        </section>
        <section id="contact" className="my-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Add your contact information or a form here.</p>
        </section>
      </main>
    </>
  );
}
